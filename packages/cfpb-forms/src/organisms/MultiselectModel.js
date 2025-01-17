// Undefined return value for void methods.
let UNDEFINED;

// How many options may be checked.
const MAX_SELECTIONS = 5;

/**
 * Escapes a string.
 * @param {string} str - The string to escape.
 * @returns {string} The escaped string.
 */
function stringEscape(str) {
  return str.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
}

/**
 * Tests whether a string matches another.
 * @param   {string}  x - The control string.
 * @param   {string}  y - The comparison string.
 * @returns {boolean}   True if `x` and `y` match, false otherwise.
 */
function stringMatch(x, y) {
  return RegExp(stringEscape(y.trim()), 'i').test(x);
}

/**
 * @class
 * MultiselectModel
 * @param {HTMLOptionsCollection} options -
 *   Set of options from a <select> element.
 * @param {string} name - a unique name for this multiselect.
 */
function MultiselectModel(options, name) {
  const _options = options;
  const _name = name;
  let _optionsData = [];

  let _selectedIndices = [];
  let _filterIndices = [];

  /* When the options list is filtered, we store a list of filtered indices
  so that when the filter changes we can reset the last matched options. */
  let _lastFilterIndices = [];

  // Which option is in focus. -1 means the focus is on the search input.
  let _index = -1;

  /**
   * @param {HTMLElement} item - An option HTML node.
   * @returns {string} A (hopefully) unique ID.
   *   If it's not unique, we have a duplicate option value.
   */
  function _getOptionId(item) {
    return _name + '-' + item.value.trim().replace(/\s+/g, '-').toLowerCase();
  }

  /**
   * @returns {boolean}
   *   True if the maximum number of options are checked, false otherwise.
   */
  function isAtMaxSelections() {
    return _selectedIndices.length === MAX_SELECTIONS;
  }

  /**
   * Cleans up a list of options for saving to memory.
   * @param {HTMLOptionsCollection} list - The options from a select element.
   * @returns {Array} An array of option objects.
   */
  function _formatOptions(list) {
    let item;
    const cleaned = [];

    let isChecked = false;
    for (let i = 0, len = list.length; i < len; i++) {
      item = list[i];
      isChecked = isAtMaxSelections() ? false : item.defaultSelected;
      cleaned.push({
        id: _getOptionId(item),
        value: item.value,
        text: item.text,
        checked: isChecked,
      });

      // If an option is initially checked, we need to record it.
      if (isChecked) {
        _selectedIndices.push(i);
      }
    }

    return cleaned;
  }

  /**
   * @returns {MultiselectModel} An instance.
   */
  function init() {
    _optionsData = _formatOptions(_options);

    return this;
  }

  /**
   * Toggle checked value of an option.
   * @param {number} index - The index position of the option in the list.
   * @returns {boolean} A value of true is checked and false is unchecked.
   */
  function toggleOption(index) {
    _optionsData[index].checked = !_optionsData[index].checked;

    if (
      _selectedIndices.length < MAX_SELECTIONS &&
      _optionsData[index].checked
    ) {
      _selectedIndices.push(index);
      _selectedIndices.sort();

      return true;
    }
    // We're over the max selections, reverse the check of the option.
    _optionsData[index].checked = false;
    _selectedIndices = _selectedIndices.filter(function (currIndex) {
      return currIndex !== index;
    });

    return false;
  }

  /**
   * Utility function for Array.reduce() used in searchIndices.
   * @param {Array} aggregate - The reducer's accumulator.
   * @param {object} item - Each item in the collection.
   * @param {number} index - The index of item in the collection.
   * @param {string} value - The value of item in the collection.
   * @returns {Array} The reducer's accumulator.
   */
  function _searchAggregator(aggregate, item, index, value) {
    if (stringMatch(item.text, value)) {
      aggregate.push(index);
    }
    return aggregate;
  }

  /**
   * Search for a query string in the options text and return the indices of
   * the matching positions in the options array.
   * @param {string} query - A query string.
   * @returns {Array} List of indices of the matching entries from the options.
   */
  function filterIndices(query) {
    // Convert query to a string if its not.
    if (Object.prototype.toString.call(query) !== '[object String]') {
      query = '';
    }
    _lastFilterIndices = _filterIndices;
    if (_optionsData.length > 0) {
      _filterIndices = _optionsData.reduce(function (acc, item, index) {
        return _searchAggregator(acc, item, index, query);
      }, []);
    }
    // Reset index position.
    _index = -1;

    return _filterIndices;
  }

  /**
   * Retrieve an option object from the options list.
   * @param {number} index - The index position in the options list.
   * @returns {object} The option object with text, value, and checked value.
   */
  function getOption(index) {
    return _optionsData[index];
  }

  /**
   * Set the index of the collection (represents the highlighted option).
   * @param {number} value - The index to set.
   */
  function setIndex(value) {
    const filterCount = _filterIndices.length;
    const count = filterCount === 0 ? _optionsData.length : filterCount;
    if (value < 0) {
      _index = -1;
    } else if (value >= count) {
      _index = count - 1;
    } else {
      _index = value;
    }
  }

  /**
   * @returns {number} The current index (highlighted option).
   */
  function getIndex() {
    return _index;
  }

  this.init = init;

  // This is used to check an item in the collection.
  this.toggleOption = toggleOption;
  this.getSelectedIndices = function () {
    return _selectedIndices;
  };
  this.isAtMaxSelections = isAtMaxSelections;

  // This is used to search the items in the collection.
  this.filterIndices = filterIndices;
  this.clearFilter = function () {
    _filterIndices = _lastFilterIndices = [];
    return UNDEFINED;
  };
  this.getFilterIndices = function () {
    return _filterIndices;
  };
  this.getLastFilterIndices = function () {
    return _lastFilterIndices;
  };

  // These are used to highlight items in the collection.
  this.getIndex = getIndex;
  this.setIndex = setIndex;
  this.resetIndex = function () {
    _index = -1;
    return _index;
  };

  // This is used to retrieve items from the collection.
  this.getOption = getOption;

  return this;
}

export default MultiselectModel;

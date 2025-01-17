import addClassesToSVGElement from './scripts/svgo-plugin-add-classes-to-svg-element.cjs';

export default {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          cleanupIds: { force: 'true' },
          removeViewBox: false,
        },
      },
    },
    {
      name: 'removeStyleElement',
    },
    {
      name: 'removeAttrs',
      params: {
        attrs: ['fill', 'width', 'height', 'path:class', 'circle:class'],
      },
    },
    {
      name: 'addClassesToSVGElement',
      params: { className: 'cf-icon-svg', suffixPattern: '__$FILENAME' },
      fn: addClassesToSVGElement.fn,
    },
  ],
};

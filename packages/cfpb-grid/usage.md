The grid component is a suite of Less variable and mixins that enables you to
lay out a flexible 12-column grid with fixed-size gutters.
(Column widths will expand and contract with the width of the page,
but the gutter width remains constant.)
The mixins are made to be used within your project's Less code to give grid
layout to your content without needing to use non-semantic grid classes.

For example, when creating a half-and-half layout, instead of applying classes
to your column wrappers, like this:

```
<div class="col-half"> … </div>
<div class="col-half"> … </div>
```

You can give your wrappers semantic class names that describe their content,
and apply the mixins to those semantic classes, like this:

```
<div class="description"> … </div>
<div class="illustration"> … </div>
```

```
.description,
.illustration {
    .grid_column(1, 2);
}
```

Read on for more details on the variables and mixins this component provides.

## Table of contents

- [Variables](#variables)
- [Wrappers](#wrappers)
- [Columns](#columns)
- [Nested columns](#nested-columns)
- [Push and pull mixins for source ordering](#push-and-pull-mixins-for-source-ordering)
- [Example grid layouts](#example-grid-layouts)

## Variables

Component variables are used to theme a component.
They likely will be left as is, but if needed can be overwritten by duplicating
the variable in a `@key: value` format with a different value.
This customized variable would be placed in the same file
where this component's less file is imported.

```
@grid_wrapper-width: 1230px;
```

The grid's maximum width in px.
This value can be overridden in the `grid_wrapper()` mixin.

```
@grid_gutter-width: 30px;
```

The fixed width between columns.

```
@grid_total-columns: 12;
```

The total number of columns used in calculating column widths.
This value can be overridden in the `grid_column()` mixin.

```
@grid_debug: false;
```

Gives column blocks a background color if set to true.

## Wrappers

Wrappers are centered containers with a max-width
and outside left/right padding of ½ the gutter width on each side.

### Less mixin

```
.grid_wrapper( @grid_wrapper-width: @grid_wrapper-width )
```

You can create a wrapper with max-width other than the default
by passing a pixel value into the mixin.

### Example

```
.main-wrapper {
    .grid_wrapper();
}
.wide-wrapper {
    .grid_wrapper( 1900px );
}
```

```
<div class="main-wrapper">
    This container now has left and right padding and a centered max width.
</div>
<div class="wide-wrapper">
    This container is the same except it has a wider max-width.
</div>
```

## Columns

### Less mixin

```
.grid_column( @columns: 1; @total: @grid_total-columns; @prefix: 0; @suffix: 0 )
```

Create a grid column that is `@columns` wide given `@total` total grid columns.

Optionally give the column left or right padding with the
`@prefix` and `@suffix` parameters.

Grid columns use transparent borders to create the gutters of the grid,
so if you want a column to have a background or border, you'll need to
add a wrapper just inside the column to be styled that way.

### Usage

```
.main-wrapper {
    .grid_wrapper();
}
.half {
    .grid_column(1, 2);
}
.styled {
    border: 1px solid #999;
    background: #EEE;
}
```

```
<div class="main-wrapper">
    <div class="half">I am half of my parent.</div>
    <div class="half">
        <div class="styled">
            I am half of my parent. I also have a border and background.
        </div>
    </div>
</div>
```

**NOTE:** @cfpb/grid does not have a "row" concept.
If you have a 12-column grid and place 24 columns inside a wrapper,
@cfpb/grid columns will automatically stack into two rows of 12.

## Nested columns

Since all grid columns have left and right gutters,
you will notice undesirable offsetting when nesting columns.
Normally this is removed with complex selectors
or by adding classes to the first and last column per 'row'.

In @cfpb/grid, the way to get around this is by wrapping your columns
in a container that utilizes the `.grid_nested-col-group()` mixin.
This mixin uses negative left and right margins to
pull the columns back into alignment with parent columns.

Working this way allows you to easily create responsive grids.
You are free to control the number of columns per "row" at different breakpoints
without having to deal with the first and last columns of each row.

### Less mixin

```
.grid_nested-col-group()
```

### Usage

```
.main-wrapper {
    .grid_wrapper();
}
.nested {
    .grid_nested-col-group();
}
.half {
    .grid_column(1, 2);
}
```

```
<div class="main-wrapper">
    <div class="half">
        <div class="nested">
            <div class="half"></div>
            <div class="half"></div>
        </div>
    </div>
    <div class="half">
        <div class="nested">
            <div class="half"></div>
            <div class="half"></div>
        </div>
    </div>
</div>
```

## Push and pull mixins for source ordering

**NOTE:** Using these is not advised, because the disadvantages for users
of assistive technology outweigh the advantages of putting your most important
content first in the source order, but it's here if you absolutely need it.

### Less mixin

```
.push( @offset: 1, @grid_total-columns: @grid_total-columns )
```

```
.pull( @offset: 1, @grid_total-columns: @grid_total-columns )
```

### Usage

```
.first {
    .grid_column(1, 2);
    .grid_pull(1);
}
.second {
    .grid_column(1, 2);
    .grid_push(1);
}
```

```
<div>
    <div class="second">I am first in the markup but appear after .first.</div>
    <div class="first">I am second in the markup but appear before .second.</div>
</div>
```

## Example grid layouts

### 12 columns w/ 1230px max width

<div class="cols-12">
    <section>
        <div class="col col-1"><div>one</div></div>
        <div class="col col-1"><div>one</div></div>
        <div class="col col-1"><div>one</div></div>
        <div class="col col-1"><div>one</div></div>
        <div class="col col-1"><div>one</div></div>
        <div class="col col-1"><div>one</div></div>
        <div class="col col-1"><div>one</div></div>
        <div class="col col-1"><div>one</div></div>
        <div class="col col-1"><div>one</div></div>
        <div class="col col-1"><div>one</div></div>
        <div class="col col-1"><div>one</div></div>
        <div class="col col-1"><div>one</div></div>
    </section>

    <section>
        <div class="col col-2"><div>two</div></div>
        <div class="col col-2"><div>two</div></div>
        <div class="col col-2"><div>two</div></div>
        <div class="col col-2"><div>two</div></div>
        <div class="col col-2"><div>two</div></div>
        <div class="col col-2"><div>two</div></div>
    </section>

    <section>
        <div class="col col-2"><div>two</div></div>
        <div class="col col-3"><div>three</div></div>
        <div class="col col-2"><div>two</div></div>
        <div class="col col-3"><div>three</div></div>
        <div class="col col-2"><div>two</div></div>
    </section>

    <section>
        <div class="col col-3"><div>three</div></div>
        <div class="col col-3"><div>three</div></div>
        <div class="col col-3"><div>three</div></div>
        <div class="col col-3"><div>three</div></div>
    </section>

    <section>
        <div class="col col-4"><div>four</div></div>
        <div class="col col-4"><div>four</div></div>
        <div class="col col-4"><div>four</div></div>
    </section>

    <section>
        <div class="col col-6"><div>six</div></div>
        <div class="col col-6"><div>six</div></div>
    </section>

    <section>
        <div class="col col-12"><div>twelve</div></div>
    </section>

</div>

```
<div class="cols-12">
    <section>
        <div class="col col-1"><div>one</div></div>
        <div class="col col-1"><div>one</div></div>
        <div class="col col-1"><div>one</div></div>
        <div class="col col-1"><div>one</div></div>
        <div class="col col-1"><div>one</div></div>
        <div class="col col-1"><div>one</div></div>
        <div class="col col-1"><div>one</div></div>
        <div class="col col-1"><div>one</div></div>
        <div class="col col-1"><div>one</div></div>
        <div class="col col-1"><div>one</div></div>
        <div class="col col-1"><div>one</div></div>
        <div class="col col-1"><div>one</div></div>
    </section>

    <section>
        <div class="col col-2"><div>two</div></div>
        <div class="col col-2"><div>two</div></div>
        <div class="col col-2"><div>two</div></div>
        <div class="col col-2"><div>two</div></div>
        <div class="col col-2"><div>two</div></div>
        <div class="col col-2"><div>two</div></div>
    </section>

    <section>
        <div class="col col-2"><div>two</div></div>
        <div class="col col-3"><div>three</div></div>
        <div class="col col-2"><div>two</div></div>
        <div class="col col-3"><div>three</div></div>
        <div class="col col-2"><div>two</div></div>
    </section>

    <section>
        <div class="col col-3"><div>three</div></div>
        <div class="col col-3"><div>three</div></div>
        <div class="col col-3"><div>three</div></div>
        <div class="col col-3"><div>three</div></div>
    </section>

    <section>
        <div class="col col-4"><div>four</div></div>
        <div class="col col-4"><div>four</div></div>
        <div class="col col-4"><div>four</div></div>
    </section>

    <section>
        <div class="col col-6"><div>six</div></div>
        <div class="col col-6"><div>six</div></div>
    </section>

    <section>
        <div class="col col-12"><div>twelve</div></div>
    </section>
</div>
```

### Prefixing/Suffixing

<div class="cols-12">
    <section>
        <div class="col col-1 suffix-11"><div>prefix 0, suffix 11</div></div>
        <div class="col col-1 prefix-1 suffix-10"><div>prefix 1, suffix 10</div></div>
        <div class="col col-1 prefix-2 suffix-9"><div>prefix 2, suffix 9</div></div>
        <div class="col col-1 prefix-3 suffix-8"><div>prefix 3, suffix 8</div></div>
        <div class="col col-1 prefix-4 suffix-7"><div>prefix 4, suffix 7</div></div>
        <div class="col col-1 prefix-5 suffix-6"><div>prefix 5, suffix 6</div></div>
        <div class="col col-1 prefix-6 suffix-5"><div>prefix 6, suffix 5</div></div>
        <div class="col col-1 prefix-7 suffix-4"><div>prefix 7, suffix 4</div></div>
        <div class="col col-1 prefix-8 suffix-3"><div>prefix 8, suffix 3</div></div>
        <div class="col col-1 prefix-9 suffix-2"><div>prefix 9, suffix 2</div></div>
        <div class="col col-1 prefix-10 suffix-1"><div>prefix 10, suffix 1</div></div>
        <div class="col col-1 prefix-11"><div>prefix 11, suffix 0</div></div>
    </section>
</div>

```
<div class="cols-12">
    <section>
        <div class="col col-1 suffix-11"><div>prefix 0, suffix 11</div></div>
        <div class="col col-1 prefix-1 suffix-10"><div>prefix 1, suffix 10</div></div>
        <div class="col col-1 prefix-2 suffix-9"><div>prefix 2, suffix 9</div></div>
        <div class="col col-1 prefix-3 suffix-8"><div>prefix 3, suffix 8</div></div>
        <div class="col col-1 prefix-4 suffix-7"><div>prefix 4, suffix 7</div></div>
        <div class="col col-1 prefix-5 suffix-6"><div>prefix 5, suffix 6</div></div>
        <div class="col col-1 prefix-6 suffix-5"><div>prefix 6, suffix 5</div></div>
        <div class="col col-1 prefix-7 suffix-4"><div>prefix 7, suffix 4</div></div>
        <div class="col col-1 prefix-8 suffix-3"><div>prefix 8, suffix 3</div></div>
        <div class="col col-1 prefix-9 suffix-2"><div>prefix 9, suffix 2</div></div>
        <div class="col col-1 prefix-10 suffix-1"><div>prefix 10, suffix 1</div></div>
        <div class="col col-1 prefix-11"><div>prefix 11, suffix 0</div></div>
    </section>
</div>
```

### Nesting

<div class="cols-12">
    <section>
        <div class="col col-6">
            <div>six</div>
            <section class="nested">
                <div class="col col-4"><div>four</div></div>
                <div class="col col-4"><div>four</div></div>
                <div class="col col-4"><div>four</div></div>
            </section>
        </div>

        <div class="col col-6">
            <div>six</div>
            <section class="nested">
                <div class="col col-4"><div>four</div></div>
                <div class="col col-4"><div>four</div></div>
                <div class="col col-4"><div>four</div></div>
            </section>
        </div>
    </section>

    <section>
        <div class="col col-3">
            <div>three</div>
            <section class="nested">
                <div class="col col-6"><div>six</div></div>
                <div class="col col-6"><div>six</div></div>
            </section>
        </div>

        <div class="col col-6">
            <div>six</div>
            <section class="nested">
                <div class="col col-4"><div>four</div></div>
                <div class="col col-4"><div>four</div></div>
                <div class="col col-4"><div>four</div></div>
            </section>
        </div>

        <div class="col col-3">
            <div>three</div>
            <section class="nested">
                <div class="col col-3"><div>three</div></div>
                <div class="col col-3"><div>three</div></div>
                <div class="col col-3"><div>three</div></div>
                <div class="col col-3"><div>three</div></div>
            </section>
        </div>
    </section>

</div>

```
<div class="cols-12">
    <section>
        <div class="col col-6">
            <div>six</div>
            <section class="nested">
                <div class="col col-4"><div>four</div></div>
                <div class="col col-4"><div>four</div></div>
                <div class="col col-4"><div>four</div></div>
            </section>
        </div>

        <div class="col col-6">
            <div>six</div>
            <section class="nested">
                <div class="col col-4"><div>four</div></div>
                <div class="col col-4"><div>four</div></div>
                <div class="col col-4"><div>four</div></div>
            </section>
        </div>
    </section>

    <section>
        <div class="col col-3">
            <div>three</div>
            <section class="nested">
                <div class="col col-6"><div>six</div></div>
                <div class="col col-6"><div>six</div></div>
            </section>
        </div>

        <div class="col col-6">
            <div>six</div>
            <section class="nested">
                <div class="col col-4"><div>four</div></div>
                <div class="col col-4"><div>four</div></div>
                <div class="col col-4"><div>four</div></div>
            </section>
        </div>

        <div class="col col-3">
            <div>three</div>
            <section class="nested">
                <div class="col col-3"><div>three</div></div>
                <div class="col col-3"><div>three</div></div>
                <div class="col col-3"><div>three</div></div>
                <div class="col col-3"><div>three</div></div>
            </section>
        </div>
    </section>
</div>
```

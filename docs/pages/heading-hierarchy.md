---
title: Headings
layout: variation
section: foundation
status: Released
description: A successful type hierarchy establishes the order of importance of
  elements on a page. Consistent scaling, weights, and capitalization are used
  to create distinction between heading levels and provide users with  familiar
  focus points when scanning text.
variation_groups:
  - variations:
      - variation_code_snippet: |-
          <h1 class="superheading">Display heading</h1>
          <h1>Heading level 1</h1>
          <h2>Heading level 2</h2>
          <h3>Heading level 3</h3>
          <h4>Heading level 4</h4>
          <h5>Heading level 5</h5>
          <h6>Heading level 6</h6>

          <!--
          Example of a non heading element:
          <p class="h1">A non-heading element</p>
          -->
        variation_description: ''
        variation_jinja_code_snippet: ''
        variation_name: ''
        variation_specs: "| Heading   |
          Specs                                                            |
          Responsive behavior at < 601px |

          | --------- |
          ---------------------------------------------------------------- |
          ------------------------------ |

          | Display   | Avenir Next Regular, 48px /
          60px\x03                                | Drops to Heading
          1             |

          | Heading 1 | Avenir Next Demi Bold, 34px /
          42px\x03                                | Drops to Heading
          2             |

          | Heading 2 | Avenir Next Demi Bold, 26px /
          32px                                 | Drops to Heading
          3             |

          | Heading 3 | Avenir Next Regular, 22px /
          28px                                 | Drops to Heading
          4             |

          | Heading 4 | Avenir Next Medium, 18px /
          22px                                  | Drops to 16px /
          18px           |

          | Heading 5 | Avenir Next Demi Bold, 14px / 18px, All caps,
          1px letter spacing | No change                      |

          | Heading 6 | Avenir Next Demi Bold, 12px / 15px, All caps,
          1px letter spacing | No change                      |"
    variation_group_name: Web headings
    variation_group_description:
      At screen widths of 600px and below, the Display
      heading and Headings 1-4 drop in size. Headings 5-6 remain consistent at
      all screen widths.
  - variation_group_name: Print headings
    variations:
      - variation_code_snippet: >-
          <h1 style="font-size:60pt; font-weight:500; line-height:66pt">Display
          heading</h1>

          <h1 style="font-size:38pt; font-weight:400; line-height:40pt">Heading level 1</h1>

          <h2 style="font-size:26pt; font-weight:400; line-height:28pt">Heading level 2</h2>

          <h3 style="font-size: 16pt; font-weight:600; line-height: 18pt">Heading level 3</h3>

          <h4 style=font-size:14pt; font-weight:500; line-height:16pt">Heading level 4</h4>

          <h5 style="font-size:10pt; font-weight:600;line-height:12pt">Heading level 5</h5>

          <p style="font-size: 12pt; font-weight: 500; line-height:14pt">Heading level 6</p>
        variation_name: ''
        variation_description: ''
        variation_specs: |-
          | Heading   | Specs                                        |
          | --------- | -------------------------------------------- |
          | Display   | Avenir Next Medium, 60pt / 66pt              |
          | Heading 1 | Avenir Next Regular, 38pt / 40pt             |
          | Heading 2 | Avenir Next Regular, 26pt / 28pt            
          |
          | Heading 3 | Avenir Next Demi Bold, 16pt / 18pt           |
          | Heading 4 | Avenir Next Medium, 14pt / 16pt              |
          | Heading 5 | Avenir Next Demi Bold, 10pt / 12pt, all caps |
          | Heading 6 | Avenir Next Medium, 12pt /14 pt              |
    variation_group_description: >+
      This hierarchy should serve as a basis for 8.5 x 11” documents, but
      appropriate scaling should be explored for content of larger or smaller
      dimensions.

  - variation_group_name: Variations
    variations:
      - variation_name: 'Heading with icon '
        variation_description:
          'The heading with icon is typically used for listing
          categories in a meta header on pages like the [blog
          page](https://www.consumerfinance.gov/about-us/blog/). '
        variation_code_snippet: |-
          <header class="m-meta-header">
              <div class="m-meta-header_right">
                  <span class="a-date">
                      Nov 4, 2013
                  </span>
              </div>
              <div class="m-meta-header_left">
                  <span class="u-visually-hidden">Categories: </span>
                  <a href="#" class="a-heading a-heading__icon">
                      {% include icons/credit-card.svg %}
                      Consumer finance
                  </a>
                  |
                  <a href="#" class="a-heading a-heading__icon">
                      {% include icons/bullhorn.svg %}
                      At the CFPB
                  </a>
              </div>
          </header>
        variation_implementation: This example of a heading with icon shows
          `.m-meta-header_left` using the `.a-heading__icon` pattern and
          `.m-meta-header_right` using the `.a-date` pattern. However, you could
          use other patterns in place of them, or even swap them so that date is
          attached to `.m-meta-header_left` and `.a-heading.a-heading__icon` is
          attached to `.m-meta-header_right`.
        variation_specs: >-
          * Avenir Next Medium, 18px

          * View a [list of icons](https://cfpb.github.io/design-system/foundation/iconography). Icon height is constrained to 19px.
      - variation_name: Eyebrow headings
        variation_description: >-
          The eyebrow heading is an additional label that can be used to support
          the main H1 heading on a page, provide additional context, or
          orientation when necessary. Use the eyebrow heading to label page
          headings that are part of a larger group of related pages, or when
          additional context can help orient the user to the page’s purpose.


          The eyebrow heading is secondary to and serves to support the main page heading. So it should be concise and shorter than the main page heading.


          An example of the eyebrow heading can be found on the [Buying a House journey pages](https://www.consumerfinance.gov/owning-a-home/process/prepare/).
        variation_code_snippet: >
          <!--The code snippet below is only used for display purposes. The
          eyebrow heading should be built using div tags:


          <div class ="eyebrow">


          The text will be styled the same as H5 heading text.

          -->


          <div class="h5">eyebrow heading</div>

          <div class="h1">Heading 1</div>
        variation_specs: |-
          * Avenir Next Demi Bold
          * 14px / 18px, 1px letter spacing
          * All caps
          * <601px wide: No change
      - variation_name: Slug heading
        variation_description:
          Slug headings are used to call attention to and lead
          content on sidebars and prefooters, inset modules, and inset email
          modules.
        variation_code_snippet: |-
          <header class="m-slug-header">
              <h2 class="a-heading">
                  Slug heading
              </h2>
          </header>
        variation_specs: >-
          * Slug title: H5


          * 5px thick CFPB Green top border that spans the length of the title


          * 1px thick Gray 50 top border that spans the width of the module or column
    variation_group_description: The heading variations below have specific use cases.
use_cases: ''
guidelines: >-
  ### Content


  * Headings should be sentence case.

  * Do not include punctuation in headings.

  * Keep headings to one line on desktop when possible.


  ### Spacing


  Refer to the [Guidelines section of the Fonts page](<https://cfpb.github.io/design-system/foundation/fonts#guidelines>) for information about heading spacing.
behavior: ''
accessibility: Since categories can be repetitive, we suggest placing a label
  with `.u-visually-hidden` prior to the headings with icons to add more context
  for screen readers.
research: ''
related_items: "* [Typography
  variables](https://cfpb.github.io/design-system/development/variables#typogra\
  phy)"
last_updated: 2019-10-21T21:54:52.744Z
eyebrow: Typography
---

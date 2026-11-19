// Guia de tags CSS usado pelo botão "CSS Tags".
// Cada item tem: tag (o nome da propriedade), group (o tema),
// summary (resumo curto), details (o que ela faz), values (valores comuns)
// e example (um exemplo de código).
const cssTagsGuide = [
  {
    tag: 'display',
    group: 'Layout',
    summary: 'Chooses how an element is displayed.',
    details: 'Picks the layout model of the element. With <code>display: flex</code> the element becomes a <strong>flex container</strong> and its children become <em>flex items</em>.',
    values: 'block, inline, flex, grid, none',
    example: '.container {\n  display: flex;\n}'
  },
  {
    tag: 'flex-direction',
    group: 'Flexbox',
    summary: 'Sets the direction of the main axis.',
    details: 'Decides whether the items flow in a row (<code>row</code>) or in a column (<code>column</code>). The main axis always follows this direction.',
    values: 'row, row-reverse, column, column-reverse',
    example: '.container {\n  display: flex;\n  flex-direction: column;\n}'
  },
  {
    tag: 'flex-wrap',
    group: 'Flexbox',
    summary: 'Decides if items break into new lines.',
    details: 'By default every item stays on one line and gets squeezed. With <code>wrap</code> the items that do not fit move to a new line instead of shrinking.',
    values: 'nowrap, wrap, wrap-reverse',
    example: '.container {\n  display: flex;\n  flex-wrap: wrap;\n}'
  },
  {
    tag: 'justify-content',
    group: 'Flexbox',
    summary: 'Distributes the items along the main axis.',
    details: 'Moves the items horizontally in a row (or vertically in a column). <code>center</code> centers them, <code>space-between</code> pushes the first to the start and the last to the end.',
    values: 'flex-start, center, flex-end, space-between, space-around, space-evenly',
    example: '.container {\n  display: flex;\n  justify-content: center;\n}'
  },
  {
    tag: 'align-items',
    group: 'Flexbox',
    summary: 'Aligns the items on the cross axis.',
    details: 'Moves the items vertically in a row (or horizontally in a column). It is the pair of <code>justify-content</code>: one handles the main axis, the other handles the cross axis.',
    values: 'flex-start, center, flex-end, stretch, baseline',
    example: '.container {\n  display: flex;\n  align-items: center;\n}'
  },
  {
    tag: 'align-content',
    group: 'Flexbox',
    summary: 'Distributes the lines when the container wraps.',
    details: 'Works only when there are several lines (with <code>flex-wrap: wrap</code>). It distributes those lines along the cross axis.',
    values: 'flex-start, center, flex-end, space-between, stretch',
    example: '.container {\n  display: flex;\n  flex-wrap: wrap;\n  align-content: space-between;\n}'
  },
  {
    tag: 'align-self',
    group: 'Flexbox',
    summary: 'Aligns one single item on the cross axis.',
    details: 'Overrides the <code>align-items</code> of the container for just one item, which is handy to push one box to the top or to the bottom.',
    values: 'auto, flex-start, center, flex-end, stretch',
    example: '.box {\n  align-self: flex-end;\n}'
  },
  {
    tag: 'gap',
    group: 'Flexbox',
    summary: 'Space between the items.',
    details: 'Adds a fixed space between the items (and around them when you use two values). It is easier than adding margins to every item.',
    values: 'any length (px, rem, %), row-gap column-gap',
    example: '.container {\n  display: flex;\n  gap: 1rem 0.5rem;\n}'
  },
  {
    tag: 'row-gap',
    group: 'Flexbox',
    summary: 'Space between the rows of a wrapped container.',
    details: 'Sets the space between lines (rows in a row layout, columns in a column layout). It only does something when the items wrap into several lines.',
    values: 'any length (px, rem, %)',
    example: '.container {\n  display: flex;\n  flex-wrap: wrap;\n  row-gap: 1rem;\n}'
  },
  {
    tag: 'column-gap',
    group: 'Flexbox',
    summary: 'Space between the items of one line.',
    details: 'In a row layout it is the horizontal space between the items. In a column layout it is the space between the wrapped columns. Together with <code>row-gap</code> it forms the <code>gap</code> shorthand.',
    values: 'any length (px, rem, %)',
    example: '.container {\n  display: flex;\n  column-gap: 0.5rem;\n}'
  },
  {
    tag: 'order',
    group: 'Flexbox',
    summary: 'Changes the visual order of an item.',
    details: 'Moves an item without touching the HTML. The default is <code>0</code>, negative values come first and bigger values come last.',
    values: 'any whole number',
    example: '.box {\n  order: 2;\n}'
  },
  {
    tag: 'flex',
    group: 'Flexbox',
    summary: 'Shortcut for grow, shrink and basis.',
    details: 'Shorthand that writes <code>flex-grow</code>, <code>flex-shrink</code> and <code>flex-basis</code> in one line. <code>flex: 1</code> means every item grows the same amount to fill the row.',
    values: 'flex: 1, flex: 1 1 100px, flex: 0 0 auto',
    example: '.box {\n  flex: 1;\n}'
  },
  {
    tag: 'flex-grow',
    group: 'Flexbox',
    summary: 'How much an item grows to fill the space.',
    details: 'A number that defines the share of the free space each item receives. <code>flex-grow: 0</code> means the item never grows.',
    values: '0 (default), 1, 2, 3...',
    example: '.box {\n  flex-grow: 2;\n}'
  },
  {
    tag: 'flex-shrink',
    group: 'Flexbox',
    summary: 'How much an item shrinks when space is missing.',
    details: 'Defines how fast the item gets smaller when the row is too small. <code>flex-shrink: 0</code> keeps the item from shrinking.',
    values: '1 (default), 0, 2, 3...',
    example: '.box {\n  flex-shrink: 0;\n}'
  },
  {
    tag: 'flex-basis',
    group: 'Flexbox',
    summary: 'The starting size of an item on the main axis.',
    details: 'Sets the size the item has before the free space is distributed. It works like <code>width</code> in a row and like <code>height</code> in a column.',
    values: 'auto (default), 100px, 30%, content',
    example: '.box {\n  flex-basis: 120px;\n}'
  },
  {
    tag: 'width',
    group: 'Box model',
    summary: 'The width of an element.',
    details: 'Sets how wide the element is. It only accepts a value, not a number without a unit (except <code>0</code>).',
    values: 'auto, 100px, 50%, 100vw',
    example: '.box {\n  width: 120px;\n}'
  },
  {
    tag: 'height',
    group: 'Box model',
    summary: 'The height of an element.',
    details: 'Sets how tall the element is. Without it the height follows the content inside the element.',
    values: 'auto, 100px, 50vh',
    example: '.box {\n  height: 60px;\n}'
  },
  {
    tag: 'max-width',
    group: 'Box model',
    summary: 'The maximum width allowed.',
    details: 'The element can be smaller, but never bigger than this limit. It is the classic trick to keep a layout readable on big screens.',
    values: 'none (default), 600px, 90%',
    example: '.container {\n  max-width: 600px;\n}'
  },
  {
    tag: 'padding',
    group: 'Box model',
    summary: 'The space inside the element.',
    details: 'Space between the content and the border. It is part of the element, so it makes the element bigger. One value applies to all sides, two values apply to top/bottom and left/right.',
    values: '0, 10px, 1rem, 10px 20px',
    example: '.box {\n  padding: 16px;\n}'
  },
  {
    tag: 'margin',
    group: 'Box model',
    summary: 'The space outside the element.',
    details: 'Space between the element and the other elements around it. Unlike padding, the margin is not painted with the background of the element.',
    values: '0, auto, 10px, 0 auto',
    example: '.box {\n  margin: 0 auto;\n}'
  },
  {
    tag: 'border',
    group: 'Box model',
    summary: 'The border around the element.',
    details: 'Draws a line around the edge of the element, outside the padding and inside the margin. The shorthand writes the width, the style and the color.',
    values: '1px solid #44475A, 2px dashed red, none',
    example: '.box {\n  border: 2px solid #6272A4;\n}'
  },
  {
    tag: 'border-radius',
    group: 'Box model',
    summary: 'Rounds the corners of the element.',
    details: 'Makes the corners round. With <code>50%</code> the element becomes a circle when its width and height are the same.',
    values: '0, 8px, 50%',
    example: '.box {\n  border-radius: 50%;\n}'
  },
  {
    tag: 'box-sizing',
    group: 'Box model',
    summary: 'How width and height are calculated.',
    details: 'With <code>border-box</code> the padding and the border are included inside the width you set, which makes the sizes much easier to predict.',
    values: 'content-box (default), border-box',
    example: '* {\n  box-sizing: border-box;\n}'
  },
  {
    tag: 'background',
    group: 'Color and text',
    summary: 'The background of an element.',
    details: 'Sets the background color, image, position and size all at once. A color alone is enough to fill the element.',
    values: '#3b82f6, red, linear-gradient(...), url(image.png)',
    example: '.box {\n  background: #3b82f6;\n}'
  },
  {
    tag: 'color',
    group: 'Color and text',
    summary: 'The color of the text.',
    details: 'Changes the color of the text and of the icons that use the current color.',
    values: '#282A36, red, white, currentColor',
    example: '.box {\n  color: white;\n}'
  },
  {
    tag: 'font-size',
    group: 'Color and text',
    summary: 'The size of the text.',
    details: 'Defines how big the text is. <code>rem</code> is better than <code>px</code> because it follows the size chosen by the user in the browser.',
    values: '16px, 1rem, 120%, larger',
    example: 'h1 {\n  font-size: 2rem;\n}'
  },
  {
    tag: 'font-weight',
    group: 'Color and text',
    summary: 'How thick the text is.',
    details: 'Controls the thickness of the letters. The normal keywords are enough for almost every case: <code>normal</code>, <code>bold</code> and <code>lighter</code>.',
    values: 'normal, bold, 100 to 900',
    example: 'h1 {\n  font-weight: bold;\n}'
  },
  {
    tag: 'text-align',
    group: 'Color and text',
    summary: 'The horizontal alignment of the text.',
    details: 'Aligns the text inside the element: to the left, to the right or centered. It does not move the element itself, only the text inside it.',
    values: 'left, center, right, justify',
    example: '.box {\n  text-align: center;\n}'
  }
]

// Cada solução tem: css (o código), explanation (o que cada elemento faz)
// e tip (a ideia principal do nível).
// Todos os itens dos níveis são tags com texto: o tamanho deles vem do
// conteúdo, nunca de uma largura ou altura fixa em pixels.
const levels = [
  {
    id: 1,
    title: 'Flexbox Centering',
    description: 'The container is already a flex container. Center the blue box perfectly inside it using flexbox.',
    hint: 'The container is already a flex container. Flexbox aligns the items on two axes at the same time: one moves them sideways, the other moves them up and down. Your box needs both.',
    html: `<div class="container">
  <div class="box">Centered!</div>
</div>`,
    starterCSS: `.container {
  min-height: 12rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;

  /* ?? center the box ?? */
}

.box {
  padding: 1rem 1.5rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}`,
    themeCSS: `.container {
  background:
    radial-gradient(circle at 50% 45%, rgba(139, 233, 253, 0.18), transparent 55%),
    linear-gradient(135deg, #1e1b2e, #282a36 60%, #2d2a3e);
  border: 1px solid #44475a;
  border-radius: 1.25rem;
  box-shadow: inset 0 0 0 1px rgba(248, 248, 242, 0.04), 0 18px 40px rgba(0, 0, 0, 0.25);
}

.box {
  background: linear-gradient(135deg, #8be9fd, #60a5fa 55%, #bd93f9);
  color: #14121f;
  border: 1px solid rgba(248, 248, 242, 0.35);
  border-radius: 999px;
  box-shadow: 0 10px 24px rgba(139, 233, 253, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.4);
  font-family: ui-monospace, 'JetBrains Mono', monospace;
  font-weight: 700;
  letter-spacing: 0.04em;
}`,
    solutions: [
      {
        css: `.container {
  min-height: 12rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box {
  padding: 1rem 1.5rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}`,
        explanation: [
          {
            label: 'div.container',
            text: 'The <strong>parent</strong> element. When you put <code>display: flex</code> on it, it becomes the <em>flex container</em>: the element that decides how its children are arranged.'
          },
          {
            label: 'div.box',
            text: 'The <strong>child</strong> element. Inside a flex container every child becomes a <em>flex item</em>, and the flexbox properties are what move it around.'
          },
          {
            label: 'display: flex',
            text: 'Turns the container into a flex container. Its children stop stacking like normal block boxes and start following the flexbox rules: main axis, cross axis, gaps and ordering.'
          },
          {
            label: 'justify-content: center',
            text: 'Distributes the items along the <strong>main axis</strong>. The main axis is horizontal here (the default direction is <code>row</code>), so this centers the blue box from left to right.'
          },
          {
            label: 'align-items: center',
            text: 'Aligns the items along the <strong>cross axis</strong>. The cross axis is vertical in a row layout, so this centers the blue box from top to bottom.'
          },
          {
            label: 'padding',
            text: 'The space inside the box, around the text. The box grows with its own content, so it never needs a fixed width or height to look right.'
          },
          {
            label: 'border-radius',
            text: 'Rounds the corners. It changes only the appearance and never the layout, a good example of a property you can add without breaking the puzzle.'
          }
        ],
        tip: 'Main axis vs cross axis: the main axis is the direction chosen by <code>flex-direction</code> (<code>row</code> = horizontal, <code>column</code> = vertical). <code>justify-content</code> works on the main axis and <code>align-items</code> works on the cross axis. That is why the same two properties can center a box in both directions.'
      }
    ],
    validate(iframe) {
      const doc = iframe.contentDocument
      const box = doc.querySelector('.box')
      const container = doc.querySelector('.container')
      if (!box || !container) return false
      if (!box.textContent.trim()) return false
      const cRect = container.getBoundingClientRect()
      const bRect = box.getBoundingClientRect()
      if (cRect.width === 0 || cRect.height === 0) return false
      const centeredX = Math.abs((bRect.left + bRect.right) / 2 - (cRect.left + cRect.right) / 2) < 20
      const centeredY = Math.abs((bRect.top + bRect.bottom) / 2 - (cRect.top + cRect.bottom) / 2) < 20
      return centeredX && centeredY
    }
  },
  {
    id: 2,
    title: 'Flexbox Column Layout',
    description: 'Stack the three boxes vertically, with the same space before, between and after them, and centered horizontally.',
    hint: 'The three boxes have to go one below the other instead of side by side, spread along the height of the container. Flexbox has one property that changes the direction of the flow and another one that spreads the items inside it.',
    html: `<div class="container">
  <div class="box box-1">One</div>
  <div class="box box-2">Two</div>
  <div class="box box-3">Three</div>
</div>`,
    starterCSS: `.container {
  width: 100%;
  max-width: 14rem;
  min-height: 18rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;

  /* ?? stack vertically, space evenly, center ?? */
}

.box {
  padding: 0.75rem 1.25rem;
  border-radius: 0.5rem;
  color: white;
  font-weight: bold;
  text-align: center;
}

.box-1 { background: #3b82f6; }
.box-2 { background: #8b5cf6; }
.box-3 { background: #ec4899; }`,
    themeCSS: `.container {
  background:
    repeating-linear-gradient(180deg, transparent 0 23px, rgba(139, 92, 246, 0.09) 23px 24px),
    linear-gradient(180deg, #f5f3ff, #ede9fe);
  border: 1px solid #ddd6fe;
  border-radius: 1rem;
  box-shadow: 0 14px 30px rgba(76, 29, 149, 0.08);
}

.box {
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 0.75rem;
  box-shadow: 0 8px 16px rgba(30, 27, 46, 0.16);
  font-family: ui-monospace, 'JetBrains Mono', monospace;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.box-1 { background: linear-gradient(135deg, #1d4ed8, #2563eb); }
.box-2 { background: linear-gradient(135deg, #6d28d9, #7c3aed); }
.box-3 { background: linear-gradient(135deg, #be185d, #db2777); }`,
    solutions: [
      {
        css: `.container {
  width: 100%;
  max-width: 14rem;
  min-height: 18rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.box {
  padding: 0.75rem 1.25rem;
  border-radius: 0.5rem;
  color: white;
  font-weight: bold;
  text-align: center;
}
.box-1 { background: #3b82f6; }
.box-2 { background: #8b5cf6; }
.box-3 { background: #ec4899; }`,
        explanation: [
          {
            label: 'div.container',
            text: 'The flex container. Its height comes from <code>min-height</code>, so there is free space to distribute vertically between the boxes.'
          },
          {
            label: 'div.box.box-1 / 2 / 3',
            text: 'Three flex items. The extra classes only give each one a different color, and the words One, Two and Three are just text inside the boxes.'
          },
          {
            label: 'display: flex',
            text: 'Already in the starter code. It makes the container a flex container, so the three boxes become flex items.'
          },
          {
            label: 'flex-direction: column',
            text: 'Changes the main axis to the vertical direction, so the boxes stack from top to bottom. Notice that <code>justify-content</code> and <code>align-items</code> did not change: only the axis they work on changed.'
          },
          {
            label: 'justify-content: space-evenly',
            text: 'Distributes the free space along the main axis (now vertical) with the <em>same</em> amount of space before the first box, between the boxes and after the last one. Other options: <code>space-between</code> (space only between the boxes) and <code>space-around</code> (half-size space at the edges).'
          },
          {
            label: 'align-items: center',
            text: 'Aligns the items on the cross axis, which is horizontal in column mode, so the three boxes are centered from left to right.'
          },
          {
            label: 'padding',
            text: 'Each box has space around its text, so the boxes grow with the content instead of depending on a fixed size.'
          }
        ],
        tip: 'The value names describe exactly what they do: <code>space</code> means space between the items and <code>evenly</code> means equal amounts everywhere, including the edges. Because the direction changed but the properties did not, you can reuse the same mental model for rows and for columns.'
      }
    ],
    validate(iframe) {
      const doc = iframe.contentDocument
      const boxes = doc.querySelectorAll('.box')
      const container = doc.querySelector('.container')
      if (!container || boxes.length !== 3) return false
      const style = iframe.contentWindow.getComputedStyle(container)
      if (style.display !== 'flex' || style.flexDirection !== 'column') return false
      const cRect = container.getBoundingClientRect()
      const centerX = (cRect.left + cRect.right) / 2
      const rects = [...boxes].map(box => box.getBoundingClientRect())
      for (const r of rects) {
        if (Math.abs((r.left + r.right) / 2 - centerX) > 25) return false
      }
      const contentTop = cRect.top + parseFloat(style.paddingTop)
      const contentBottom = cRect.bottom - parseFloat(style.paddingBottom)
      const gaps = [
        rects[0].top - contentTop,
        rects[1].top - rects[0].bottom,
        rects[2].top - rects[1].bottom,
        contentBottom - rects[2].bottom
      ]
      const biggest = Math.max(...gaps)
      const smallest = Math.min(...gaps)
      return smallest > 0 && biggest - smallest < 20
    }
  },
  {
    id: 3,
    title: 'Flexbox Spacing with gap',
    description: 'Arrange the three tags in a horizontal row, centered, with the same space between each pair of them.',
    hint: 'The three tags have to stay in a row, centered as a group, with the same space between each pair. Flexbox has one property for the space between the items and another one to center the group.',
    html: `<div class="container">
  <div class="box">HTML</div>
  <div class="box">CSS</div>
  <div class="box">JS</div>
</div>`,
    starterCSS: `.container {
  width: 100%;
  max-width: 20rem;
  min-height: 8rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;

  /* ?? center the row and add space between the items ?? */
}

.box {
  padding: 0.75rem 1.25rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}`,
    themeCSS: `.container {
  background:
    radial-gradient(rgba(139, 233, 253, 0.16) 1px, transparent 1px),
    linear-gradient(135deg, #1f2937, #111827);
  background-size: 16px 16px, auto;
  border: 1px solid #374151;
  border-radius: 1rem;
  box-shadow: inset 0 0 0 1px rgba(248, 248, 242, 0.04), 0 16px 32px rgba(0, 0, 0, 0.2);
}

.box {
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 999px;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.25);
  font-family: ui-monospace, 'JetBrains Mono', monospace;
  font-weight: 700;
  letter-spacing: 0.05em;
}

.box:nth-child(1) { background: linear-gradient(135deg, #0e7490, #1d4ed8); }
.box:nth-child(2) { background: linear-gradient(135deg, #6d28d9, #7c3aed); }
.box:nth-child(3) { background: linear-gradient(135deg, #be185d, #db2777); }`,
    solutions: [
      {
        css: `.container {
  width: 100%;
  max-width: 20rem;
  min-height: 8rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.box {
  padding: 0.75rem 1.25rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}`,
        explanation: [
          {
            label: 'div.container',
            text: 'The flex container. The three tags already have their own size, taken from the text and the padding, so the rest of the width is free space.'
          },
          {
            label: 'div.box',
            text: 'Three flex items with the words HTML, CSS and JS. Their size follows the content, so they stay readable at any width.'
          },
          {
            label: 'display: flex',
            text: 'Already in the starter code. It puts the three tags in a horizontal row, because <code>row</code> is the default flex direction.'
          },
          {
            label: 'justify-content: center',
            text: 'Centers the row along the main axis (horizontal). The free space that is left is split into two equal parts, one on the left and one on the right.'
          },
          {
            label: 'align-items: center',
            text: 'Centers the tags on the cross axis (vertical), so they sit in the middle of the container height.'
          },
          {
            label: 'gap',
            text: 'Puts the same space between every pair of items on the main axis. Nothing is added before the first tag or after the last one, and no margin is needed.'
          }
        ],
        tip: 'The <code>gap</code> property is the modern way to space flex items. The old trick was a margin on every box plus a negative margin on the container to remove the extra space at the end. With <code>gap</code> you never have to undo anything, and <code>row-gap</code> / <code>column-gap</code> let you control each axis separately.'
      }
    ],
    validate(iframe) {
      const doc = iframe.contentDocument
      const boxes = doc.querySelectorAll('.box')
      const container = doc.querySelector('.container')
      if (!container || boxes.length !== 3) return false
      const style = iframe.contentWindow.getComputedStyle(container)
      if (style.display !== 'flex') return false
      if (style.justifyContent !== 'center') return false
      if (!(parseFloat(style.columnGap) > 0)) return false
      const rects = [...boxes].map(box => box.getBoundingClientRect())
      const gapOne = rects[1].left - rects[0].right
      const gapTwo = rects[2].left - rects[1].right
      if (gapOne < 4 || gapTwo < 4) return false
      if (Math.abs(gapOne - gapTwo) > 8) return false
      const cRect = container.getBoundingClientRect()
      const contentLeft = cRect.left + parseFloat(style.paddingLeft)
      const contentRight = cRect.right - parseFloat(style.paddingRight)
      const leftSpace = rects[0].left - contentLeft
      const rightSpace = contentRight - rects[2].right
      if (leftSpace < 4 || rightSpace < 4) return false
      if (Math.abs(leftSpace - rightSpace) > 20) return false
      const contentCenterY = (cRect.top + parseFloat(style.paddingTop) + cRect.bottom - parseFloat(style.paddingBottom)) / 2
      const rowCenterY = (rects[0].top + rects[0].bottom) / 2
      return Math.abs(rowCenterY - contentCenterY) < 15
    }
  },
  {
    id: 4,
    title: 'Boss: The Quest Board',
    description: 'Six quest badges must form two centered columns of three. Stack them in a column, let them wrap into two columns, center every column vertically and every badge inside its column, and keep an equal gap.',
    hint: 'This boss uses every idea from World 1. Change the direction so the main axis is vertical, allow wrapping so the badges make two columns, then use one alignment property for the whole column and one for the items inside each column.',
    html: `<div class="board">
  <div class="badge">Quest 1</div>
  <div class="badge">Quest 2</div>
  <div class="badge">Quest 3</div>
  <div class="badge">Quest 4</div>
  <div class="badge">Quest 5</div>
  <div class="badge">Quest 6</div>
</div>`,
    starterCSS: `.board {
  width: 100%;
  max-width: 16rem;
  height: 11rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  gap: 0.75rem;

  /* ?? stack in two centered columns ?? */
}

.badge {
  padding: 0.6rem 0.8rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  text-align: center;
}`,
    themeCSS: `.container {
  background:
    linear-gradient(rgba(16, 185, 129, 0.09) 1px, transparent 1px),
    linear-gradient(90deg, rgba(16, 185, 129, 0.09) 1px, transparent 1px),
    linear-gradient(135deg, #ecfdf5, #d1fae5);
  background-size: 18px 18px, 18px 18px, auto;
  border: 1px solid #a7f3d0;
  border-radius: 1.25rem;
  box-shadow: 0 14px 30px rgba(6, 78, 59, 0.08);
}

.box {
  color: #123;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 0.5rem;
  box-shadow: 0 4px 10px rgba(6, 78, 59, 0.1);
  font-family: ui-monospace, 'JetBrains Mono', monospace;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.box:nth-child(1) { background: linear-gradient(135deg, #a5f3fc, #67e8f9); }
.box:nth-child(2) { background: linear-gradient(135deg, #ddd6fe, #c4b5fd); }
.box:nth-child(3) { background: linear-gradient(135deg, #fbcfe8, #f9a8d4); }
.box:nth-child(4) { background: linear-gradient(135deg, #bbf7d0, #86efac); }
.box:nth-child(5) { background: linear-gradient(135deg, #fed7aa, #fdba74); }
.box:nth-child(6) { background: linear-gradient(135deg, #fef08a, #fde047); }`,
    solutions: [
      {
        css: `.board {
  width: 100%;
  max-width: 16rem;
  height: 11rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
}
.badge {
  padding: 0.6rem 0.8rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  text-align: center;
}`,
        explanation: [
          { label: 'display: flex', text: 'Already in the starter. It turns the board into a flex container and the six badges into flex items.' },
          { label: 'flex-direction: column', text: 'From level 2: the main axis becomes vertical, so the badges try to stack from top to bottom.' },
          { label: 'flex-wrap: wrap', text: 'From level 4: the six badges do not fit in the fixed height, so they form a second column instead of overflowing.' },
          { label: 'justify-content: center', text: 'From level 1: it centers the badges inside each column along the main axis, which is now vertical.' },
          { label: 'align-items: center', text: 'From level 1: it centers each badge inside its column along the cross axis, which is now horizontal.' },
          { label: 'gap', text: 'From level 3: the same fixed space between the badges of a column and between the two columns.' }
        ],
        tip: 'A boss is several small puzzles at once: direction from level 2, wrapping from level 4 and the two alignments from level 1. Ask yourself which way the main axis points, then choose the property that works on it.'
      }
    ],
    validate(iframe) {
      const doc = iframe.contentDocument
            const win = iframe.contentWindow
            const board = doc.querySelector('.board')
            const badges = [...doc.querySelectorAll('.badge')]
            if (!board || badges.length !== 6) return false
            const style = win.getComputedStyle(board)
            if (style.display !== 'flex' || style.flexDirection !== 'column' || style.flexWrap !== 'wrap') return false
            if (style.justifyContent !== 'center' || style.alignItems !== 'center') return false
            if (!(parseFloat(style.rowGap) > 0)) return false
            if (board.scrollWidth > board.clientWidth + 3 || board.scrollHeight > board.clientHeight + 3) return false
      
            const rects = badges.map(badge => badge.getBoundingClientRect())
            const columns = []
            for (const rect of rects) {
              const last = columns[columns.length - 1]
              if (last && Math.abs(rect.left - last[0].left) < 8) last.push(rect)
              else columns.push([rect])
            }
            if (columns.length !== 2 || columns.some(column => column.length !== 3)) return false
      
            const boardRect = board.getBoundingClientRect()
            const contentTop = boardRect.top + board.clientTop + parseFloat(style.paddingTop)
            const contentBottom = boardRect.bottom - board.clientTop - parseFloat(style.paddingBottom)
            const contentLeft = boardRect.left + board.clientLeft + parseFloat(style.paddingLeft)
            const contentRight = boardRect.right - board.clientLeft - parseFloat(style.paddingRight)
            const centers = []
            for (const column of columns) {
              const top = Math.min(...column.map(rect => rect.top))
              const bottom = Math.max(...column.map(rect => rect.bottom))
              if (Math.abs(top - contentTop - (contentBottom - bottom)) > 14) return false
              centers.push((Math.min(...column.map(rect => rect.left)) + Math.max(...column.map(rect => rect.right))) / 2)
            }
            centers.sort((a, b) => a - b)
            const contentWidth = contentRight - contentLeft
            return Math.abs(centers[0] - (contentLeft + contentWidth * 0.25)) < 18 &&
              Math.abs(centers[1] - (contentLeft + contentWidth * 0.75)) < 18
    }
  },
  {
    id: 5,
    title: 'Flexbox Order Property',
    description: 'The boxes are displayed in HTML order First-Second-Third. Using the CSS order property, reverse them to display as Third-Second-First without changing the HTML.',
    hint: 'The final position of an item does not have to be the position of its code. The order property can rearrange the items without touching the HTML.',
    html: `<div class="container">
  <div class="box box-1">First</div>
  <div class="box box-2">Second</div>
  <div class="box box-3">Third</div>
</div>`,
    starterCSS: `.container {
  width: 100%;
  max-width: 20rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.box {
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  color: white;
  font-weight: bold;
}

.box-1 { background: #3b82f6; /* ?? reverse order ?? */ }
.box-2 { background: #8b5cf6; /* ?? reverse order ?? */ }
.box-3 { background: #ec4899; /* ?? reverse order ?? */ }`,
    themeCSS: `.container {
  background:
    repeating-linear-gradient(135deg, rgba(189, 147, 249, 0.08) 0 2px, transparent 2px 14px),
    linear-gradient(135deg, #1e1b2e, #2d2a3e);
  border: 1px solid #44475a;
  border-radius: 0.75rem;
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.24);
}

.box {
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  box-shadow: 0 5px 0 rgba(0, 0, 0, 0.22), 0 10px 20px rgba(0, 0, 0, 0.22);
  font-family: ui-monospace, 'JetBrains Mono', monospace;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.box-1 { background: linear-gradient(135deg, #1d4ed8, #2563eb); }
.box-2 { background: linear-gradient(135deg, #6d28d9, #7c3aed); }
.box-3 { background: linear-gradient(135deg, #be185d, #db2777); }`,
    solutions: [
      {
        css: `.container {
  width: 100%;
  max-width: 20rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.box {
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  color: white;
  font-weight: bold;
}
.box-1 { background: #3b82f6; order: 3; }
.box-2 { background: #8b5cf6; order: 2; }
.box-3 { background: #ec4899; order: 1; }`,
        explanation: [
          {
            label: 'div.container',
            text: 'The flex container. It already uses <code>align-items: center</code>, <code>gap</code> and <code>padding</code>, so you only have to worry about the order.'
          },
          {
            label: 'div.box.box-1 / 2 / 3',
            text: 'Three flex items with the words First, Second and Third. In the HTML they appear in that order; on the screen they will appear as Third, Second, First.'
          },
          {
            label: 'display: flex',
            text: 'Already given. Reordering with the <code>order</code> property only exists in flexbox: in the normal block flow the position of an element always follows the HTML.'
          },
          {
            label: 'order: 3 (.box-1)',
            text: 'Defines the visual order of this item. Items are placed from the <strong>lowest</strong> order value to the <strong>highest</strong>, so the box with <code>order: 3</code> is the last one on the screen.'
          },
          {
            label: 'order: 2 (.box-2) and order: 1 (.box-3)',
            text: 'Every item needs its own value. The default is <code>0</code>, so an item without <code>order</code> would appear before these three.'
          },
          {
            label: 'gap',
            text: 'The space between the boxes stays the same no matter in which order they are shown, because the gap is measured between the items, not between the tags.'
          }
        ],
        tip: 'The <code>order</code> property changes only what you <em>see</em>, never the HTML. The DOM order is still First, Second, Third, and that is the order used by screen readers and by the Tab key, so when possible keep the HTML order the same as the visual order.'
      }
    ],
    validate(iframe) {
      const doc = iframe.contentDocument
      const boxes = doc.querySelectorAll('.box')
      if (boxes.length !== 3) return false
      const container = doc.querySelector('.container')
      if (!container) return false
      const style = iframe.contentWindow.getComputedStyle(container)
      if (style.display !== 'flex') return false
      const order = [...boxes].map(box => parseInt(iframe.contentWindow.getComputedStyle(box).order, 10))
      if (!(order[0] > order[1] && order[1] > order[2])) return false
      const r1 = boxes[0].getBoundingClientRect()
      const r2 = boxes[1].getBoundingClientRect()
      const r3 = boxes[2].getBoundingClientRect()
      return r3.left < r2.left && r2.left < r1.left
    }
  },
  {
    id: 6,
    title: 'Responsive Flexbox Wrapping',
    description: 'Make the six cards fill the container responsively, wrapping onto new lines so they always fit no matter the width.',
    hint: 'Each card should be as wide as it can be, with a minimum readable width, and the cards should move to the next line when there is no room. Flexbox decides the size of the items and also if they break into new lines.',
    html: `<div class="grid">
  <div class="card">Card one</div>
  <div class="card">Card two</div>
  <div class="card">Card three</div>
  <div class="card">Card four</div>
  <div class="card">Card five</div>
  <div class="card">Card six</div>
</div>`,
    starterCSS: `.grid {
  width: 100%;
  max-width: 22rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;

  /* ?? responsive flexbox layout ?? */
}

.card {
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
  font-weight: bold;
}`,
    themeCSS: `.grid {
  background:
    radial-gradient(circle at 20% 0%, rgba(189, 147, 249, 0.18), transparent 45%),
    linear-gradient(135deg, #1e1b2e, #2a1f3d);
  border: 1px solid #4c1d95;
  border-radius: 1.25rem;
  box-shadow: 0 18px 38px rgba(0, 0, 0, 0.28);
}

.card {
  background: linear-gradient(135deg, #312e81, #1e1b4b);
  color: #f8f8f2;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-top: 3px solid #8be9fd;
  border-radius: 0.75rem;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.24);
  font-weight: 600;
  letter-spacing: 0.02em;
}

.card:nth-child(2) { border-top-color: #bd93f9; }
.card:nth-child(3) { border-top-color: #ff79c6; }
.card:nth-child(4) { border-top-color: #50fa7b; }
.card:nth-child(5) { border-top-color: #ffb86c; }
.card:nth-child(6) { border-top-color: #f1fa8c; }`,
    solutions: [
      {
        css: `.grid {
  width: 100%;
  max-width: 22rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
.card {
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
  font-weight: bold;
  min-width: 7rem;
  flex: 1;
}`,
        explanation: [
          {
            label: 'div.grid',
            text: 'The flex container. The cards share the available width. The class is called <code>grid</code>, but the layout is made with flexbox.'
          },
          {
            label: 'div.card',
            text: 'Six flex items with text. Each card has padding, so its height follows the content and the layout stays comfortable.'
          },
          {
            label: 'display: flex',
            text: 'Already given. The container becomes a flex container and each card becomes a flex item.'
          },
          {
            label: 'flex-wrap: wrap',
            text: 'When the cards no longer fit in the available width, they move to the next line instead of being crushed.'
          },
          {
            label: 'gap',
            text: 'The same space between the cards, both horizontally and vertically.'
          },
          {
            label: 'min-width',
            text: 'The smallest width a card can have. The cards never shrink below that minimum, which keeps the text readable without a fixed width.'
          },
          {
            label: 'flex: 1',
            text: 'Short for <code>flex: 1 1 0%</code>: <code>grow: 1</code> (the card grows to share the free space), <code>shrink: 1</code> (it can shrink) and <code>basis: 0%</code> (it starts from zero and the growth decides the final size).'
          },
          {
            label: 'padding / text-align',
            text: 'Padding is the space inside the card around the text, and <code>text-align: center</code> centers the text horizontally.'
          }
        ],
        tip: 'This layout is responsive because nothing has a fixed width: the cards have a minimum (<code>min-width</code>) and share whatever space is left (<code>flex: 1</code>), while <code>flex-wrap</code> sends them to the next line. Change the container width in the editor and the number of cards per row changes automatically.'
      },
      {
        css: `.grid {
  width: 100%;
  max-width: 22rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(7rem, 1fr));
  gap: 0.75rem;
}
.card {
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
  font-weight: bold;
}`,
        explanation: [
          {
            label: 'display: grid',
            text: 'Turns the container into a <em>Grid</em> container. Grid places the items in rows and columns at the same time, while flexbox works on one axis at a time.'
          },
          {
            label: 'grid-template-columns',
            text: 'Describes the columns of the grid. The <code>repeat()</code> function repeats a pattern and <code>auto-fill</code> decides how many times the pattern is repeated to fill the available space.'
          },
          {
            label: 'minmax(7rem, 1fr)',
            text: 'Each column has a minimum readable width (<code>min</code>) and takes one equal share of the free space (<code>1fr</code>, one <em>fraction</em>).'
          },
          {
            label: 'auto-fill',
            text: 'Keeps the empty columns when there is leftover space, so the cards keep their minimum size instead of stretching too much.'
          },
          {
            label: 'gap',
            text: 'The same spacing between the tracks (the rows and columns) and the cards.'
          },
          {
            label: '.card { padding }',
            text: 'The cards keep their internal spacing, and the grid takes care of the outer layout for them.'
          }
        ],
        tip: 'Both answers give the same visual result, but flexbox is the focus of this game. Grid shines in two-dimensional layouts (rows and columns together), while flexbox is perfect for one-dimensional ones (a row or a column of items).'
      }
    ],
    validate(iframe) {
      const doc = iframe.contentDocument
      const grid = doc.querySelector('.grid')
      if (!grid) return false
      const style = iframe.contentWindow.getComputedStyle(grid)
      const isGrid = style.display === 'grid'
      const isFlex = style.display === 'flex'
      if (!isGrid && !isFlex) return false
      const cards = doc.querySelectorAll('.card')
      if (cards.length !== 6) return false
      const rows = new Map()
      for (const card of cards) {
        const rect = card.getBoundingClientRect()
        const key = Math.round(rect.top)
        if (!rows.has(key)) rows.set(key, [])
        rows.get(key).push(rect)
      }
      if (rows.size < 2 || rows.size > 4) return false
      const gridRect = grid.getBoundingClientRect()
      const contentLeft = gridRect.left + parseFloat(style.paddingLeft)
      const contentRight = gridRect.right - parseFloat(style.paddingRight)
      const contentWidth = contentRight - contentLeft
      for (const row of rows.values()) {
        const sorted = row.slice().sort((a, b) => a.left - b.left)
        if (Math.abs(sorted[0].left - contentLeft) > 10) return false
        if (Math.abs(sorted[sorted.length - 1].right - contentRight) > 10) return false
        const widths = sorted.map(rect => rect.width)
        if (Math.max(...widths) - Math.min(...widths) > 10) return false
        const usedWidth = widths.reduce((total, width) => total + width, 0)
        if (usedWidth < contentWidth * 0.8) return false
      }
      return true
    }
  },
  {
    id: 7,
    title: 'Proportional Widths with flex-grow',
    description: 'Three bars share the same row. Make the purple bar twice as wide as the blue and the pink ones.',
    hint: 'The free space can be shared in different proportions between the items. There is a flexbox property that decides how many parts of the free space each item receives.',
    html: `<div class="container">
  <div class="bar bar-1">One</div>
  <div class="bar bar-2">Two</div>
  <div class="bar bar-3">Three</div>
</div>`,
    starterCSS: `.container {
  width: 100%;
  max-width: 22rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  gap: 0.5rem;
}

.bar {
  flex: 1;
  min-width: 0;
  padding: 0.75rem 0;
  border-radius: 0.5rem;
  color: white;
  font-weight: bold;
  text-align: center;
  overflow: hidden;
}

.bar-1 { background: #3b82f6; }
.bar-2 { background: #8b5cf6; /* ?? make this bar twice as wide ?? */ }
.bar-3 { background: #ec4899; }`,
    solutions: [
      {
        css: `.container {
  width: 100%;
  max-width: 22rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  gap: 0.5rem;
}
.bar {
  flex: 1;
  min-width: 0;
  padding: 0.75rem 0;
  border-radius: 0.5rem;
  color: white;
  font-weight: bold;
  text-align: center;
  overflow: hidden;
}
.bar-1 { background: #3b82f6; }
.bar-2 { background: #8b5cf6; flex: 2; }
.bar-3 { background: #ec4899; }`,
        explanation: [
          {
            label: 'div.container',
            text: 'The flex container. The gap takes its space first, and everything that is left becomes free space for the bars.'
          },
          {
            label: 'div.bar',
            text: 'Three flex items with text. They have no fixed width, so their size comes only from the flex property.'
          },
          {
            label: 'display: flex',
            text: 'Already in the starter code. It turns the container into a flex container and the bars into flex items.'
          },
          {
            label: 'flex: 1',
            text: 'Already in the starter code. Each bar with <code>flex: 1</code> takes one share of the free space, so all three start with the same width. The 0% basis means the size is decided by the shares only.'
          },
          {
            label: 'flex: 2',
            text: 'Only the purple bar changes to two shares. With the other two bars taking one share each, the purple bar ends up twice as wide as them.'
          },
          {
            label: 'flex-grow',
            text: 'The number that defines the share of free space each item receives. It only matters when there is free space to share.'
          },
          {
            label: 'gap',
            text: 'The space between the bars is not part of the free space: the gap stays fixed and the bars share what remains.'
          }
        ],
        tip: 'flex-grow works like a share of the leftover space: the bigger the number, the bigger the piece. Because every bar starts with <code>flex: 1</code>, they all have the same width; changing only the purple bar to 2 makes it exactly twice as wide as the others.'
      }
    ],
    validate(iframe) {
      const doc = iframe.contentDocument
      const container = doc.querySelector('.container')
      const bars = doc.querySelectorAll('.bar')
      if (!container || bars.length !== 3) return false
      const style = iframe.contentWindow.getComputedStyle(container)
      if (style.display !== 'flex') return false
      const grow = [...bars].map(bar => parseFloat(iframe.contentWindow.getComputedStyle(bar).flexGrow))
      if (!(grow[1] === grow[0] * 2 && grow[1] === grow[2] * 2)) return false
      const widths = [...bars].map(bar => bar.getBoundingClientRect().width)
      if (widths.some(width => width < 20)) return false
      return Math.abs(widths[1] / widths[0] - 2) < 0.1 && Math.abs(widths[1] / widths[2] - 2) < 0.1
    }
  },
  {
    id: 8,
    title: 'Boss: The Control Panel',
    description: 'Combine the four ideas of World 2 in one panel. The three steps must be spread to both edges but shown in reverse order, and the three bars below must wrap, keep a minimum readable width, with the middle bar receiving twice the growth share.',
    hint: 'The upper row needs a distribution value and an order value. The lower row needs wrapping, a minimum width on every bar and a growing number that gives the middle bar two shares instead of one.',
    html: `<div class="container">
  <div class="steps">
    <div class="step step-1">Plan</div>
    <div class="step step-2">Build</div>
    <div class="step step-3">Ship</div>
  </div>
  <div class="bars">
    <div class="bar bar-1">HTML</div>
    <div class="bar bar-2">CSS</div>
    <div class="bar bar-3">JS</div>
  </div>
</div>`,
    starterCSS: `.container {
  width: 100%;
  max-width: 24rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  gap: 0.75rem;

  /* ?? stack the two rows ?? */
}

.steps {
  gap: 0.5rem;

  /* ?? spread the steps but reverse their order ?? */
}

.step {
  padding: 0.6rem 0.8rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}

.bars {
  gap: 0.5rem;

  /* ?? wrap the bars and set their minimum width ?? */
}

.bar {
  padding: 0.6rem 0.4rem;
  background: #8b5cf6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  text-align: center;
}`,
    solutions: [
      {
        css: `.container {
  width: 100%;
  max-width: 24rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.steps {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
}
.step {
  padding: 0.6rem 0.8rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}
.step-1 { order: 3; }
.step-2 { order: 2; }
.step-3 { order: 1; }
.bars {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.bar {
  flex: 1 1 0;
  min-width: 4rem;
  padding: 0.6rem 0.4rem;
  background: #8b5cf6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  text-align: center;
}
.bar-2 { flex-grow: 2; }`,
        explanation: [
          { label: 'div.container', text: 'The outer flex container, in column direction. It stacks the two rows and keeps a gap between them.' },
          { label: 'justify-content: space-between (.steps)', text: 'From level 8: the first step touches the left edge and the last one touches the right edge, with equal space between them.' },
          { label: 'order: 3 / 2 / 1', text: 'From level 5: the visual order becomes Ship, Build, Plan while the HTML stays Plan, Build, Ship.' },
          { label: 'flex-wrap: wrap (.bars)', text: 'From level 6: the bars are allowed to move to a new line instead of being squeezed forever.' },
          { label: 'min-width: 4rem (.bar)', text: 'From level 6: a bar never becomes narrower than this, so the text stays readable.' },
          { label: 'flex-grow: 2 (.bar-2)', text: 'From level 7: the middle bar receives two shares of the free space while the other two receive one each.' }
        ],
        tip: 'Read the target as two separate puzzles: ordering and distribution on the first row, sizing and wrapping on the second. A boss is easier when you solve one flex container at a time.'
      }
    ],
    validate(iframe) {
      const doc = iframe.contentDocument
            const win = iframe.contentWindow
            const container = doc.querySelector('.container')
            const steps = doc.querySelector('.steps')
            const stepEls = [...doc.querySelectorAll('.step')]
            const bars = doc.querySelector('.bars')
            const barEls = [...doc.querySelectorAll('.bar')]
            if (!container || !steps || stepEls.length !== 3 || !bars || barEls.length !== 3) return false
      
            const containerStyle = win.getComputedStyle(container)
            const stepsStyle = win.getComputedStyle(steps)
            const barsStyle = win.getComputedStyle(bars)
            if (containerStyle.display !== 'flex' || containerStyle.flexDirection !== 'column') return false
            if (stepsStyle.display !== 'flex' || stepsStyle.justifyContent !== 'space-between') return false
            if (barsStyle.display !== 'flex' || barsStyle.flexWrap !== 'wrap') return false
      
            const orders = stepEls.map(step => parseInt(win.getComputedStyle(step).order, 10))
            if (!(orders[0] > orders[1] && orders[1] > orders[2])) return false
            const stepRects = stepEls.map(step => step.getBoundingClientRect())
            if (!(stepRects[2].left < stepRects[1].left && stepRects[1].left < stepRects[0].left)) return false
      
            const stepsRect = steps.getBoundingClientRect()
            const contentLeft = stepsRect.left + steps.clientLeft + parseFloat(stepsStyle.paddingLeft)
            const contentRight = stepsRect.right - steps.clientLeft - parseFloat(stepsStyle.paddingRight)
            if (Math.abs(stepRects[2].left - contentLeft) > 12) return false
            if (Math.abs(contentRight - stepRects[0].right) > 12) return false
            const stepGaps = [stepRects[1].right - stepRects[2].left, stepRects[0].right - stepRects[1].left]
            if (stepGaps.some(gap => gap <= 0) || Math.abs(stepGaps[0] - stepGaps[1]) > 10) return false
      
            const grows = barEls.map(bar => parseFloat(win.getComputedStyle(bar).flexGrow))
            if (!(grows[1] === grows[0] * 2 && grows[1] === grows[2] * 2)) return false
            if (!(parseFloat(win.getComputedStyle(barEls[0]).minWidth) > 0)) return false
            const widths = barEls.map(bar => bar.getBoundingClientRect().width)
            if (widths.some(width => width < 20)) return false
            return Math.abs(widths[1] / widths[0] - 2) < 0.3 && Math.abs(widths[1] / widths[2] - 2) < 0.3
    }
  },
  {
    id: 9,
    title: 'Aligning a Single Item with align-self',
    description: 'All the boxes are centered in the row. Move only the purple box to the bottom of the container.',
    hint: 'The rule that centers every item is set on the container, but one single item can decide not to follow it. The property that does this lives on the item, not on the container.',
    html: `<div class="container">
  <div class="box box-1">One</div>
  <div class="box box-2">Two</div>
  <div class="box box-3">Three</div>
</div>`,
    starterCSS: `.container {
  width: 100%;
  max-width: 20rem;
  min-height: 14rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  /* ?? move only the purple box to the bottom ?? */
}

.box {
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  color: white;
  font-weight: bold;
}

.box-1 { background: #3b82f6; }
.box-2 { background: #8b5cf6; }
.box-3 { background: #ec4899; }`,
    solutions: [
      {
        css: `.container {
  width: 100%;
  max-width: 20rem;
  min-height: 14rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}
.box {
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  color: white;
  font-weight: bold;
}
.box-1 { background: #3b82f6; }
.box-2 { background: #8b5cf6; align-self: flex-end; }
.box-3 { background: #ec4899; }`,
        explanation: [
          {
            label: 'div.container',
            text: 'The flex container. Its height comes from <code>min-height</code>, so there is room to move the boxes up and down.'
          },
          {
            label: 'div.box',
            text: 'Three flex items with text. All of them grow from their content, so what changes is the vertical position, never the size.'
          },
          {
            label: 'display: flex',
            text: 'Already in the starter code. It puts the three boxes in a single row.'
          },
          {
            label: 'align-items: center',
            text: 'Already in the starter code. It centers every item on the cross axis, which is the vertical axis inside a row.'
          },
          {
            label: 'align-self: flex-end',
            text: 'Overrides <code>align-items</code> for this item only. <code>flex-end</code> pushes the purple box to the end of the cross axis, which is the bottom of the container.'
          },
          {
            label: 'align-self: flex-start',
            text: 'The opposite: it would push the box to the top of the container.'
          },
          {
            label: 'align-self: center',
            text: 'Would keep the purple box centered, exactly like the other two.'
          }
        ],
        tip: 'align-items is the rule for the whole container and align-self is the exception for one item. It is the same relationship as a class and an inline style: the container decides the rule and the item can break it.'
      }
    ],
    validate(iframe) {
      const doc = iframe.contentDocument
      const container = doc.querySelector('.container')
      if (!container) return false
      const style = iframe.contentWindow.getComputedStyle(container)
      if (style.display !== 'flex') return false
      if (style.alignItems !== 'center') return false
      const boxes = doc.querySelectorAll('.box')
      if (boxes.length !== 3) return false
      const rects = [...boxes].map(box => box.getBoundingClientRect())
      const cRect = container.getBoundingClientRect()
      const contentBottom = cRect.bottom - parseFloat(style.paddingBottom)
      if (Math.abs(contentBottom - rects[1].bottom) > 10) return false
      const contentCenterY = (cRect.top + parseFloat(style.paddingTop) + contentBottom) / 2
      const firstCenter = (rects[0].top + rects[0].bottom) / 2
      const lastCenter = (rects[2].top + rects[2].bottom) / 2
      if (Math.abs(firstCenter - contentCenterY) > 8) return false
      if (Math.abs(lastCenter - contentCenterY) > 8) return false
      return true
    }
  },
  {
    id: 10,
    title: 'Pushing the Footer to the Bottom',
    description: 'The footer should stay at the bottom of the card and all the empty space should be above it.',
    hint: 'The footer should stay at the bottom of the card even if the content changes. Margins can be auto, and an automatic margin inside a flex container eats all the free space of the axis.',
    html: `<div class="page">
  <div class="content">This is the content area.</div>
  <div class="footer">Footer</div>
</div>`,
    starterCSS: `.page {
  width: 100%;
  max-width: 22rem;
  min-height: 16rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  /* ?? push the footer to the bottom ?? */
}

.content {
  padding: 1rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
}

.footer {
  padding: 0.75rem 1rem;
  background: #8b5cf6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}`,
    solutions: [
      {
        css: `.page {
  width: 100%;
  max-width: 22rem;
  min-height: 16rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.content {
  padding: 1rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
}
.footer {
  padding: 0.75rem 1rem;
  background: #8b5cf6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  margin-top: auto;
}`,
        explanation: [
          {
            label: 'div.page',
            text: 'The flex container, in column direction. Its height comes from <code>min-height</code>, so there is free space to push the footer down.'
          },
          {
            label: 'div.content',
            text: 'The first flex item. It stays at the top of the column, and its height follows its text and padding.'
          },
          {
            label: 'div.footer',
            text: 'The second flex item. It should stay at the bottom of the column, no matter how much content exists above it.'
          },
          {
            label: 'flex-direction: column',
            text: 'Already in the starter code. The column direction is what makes the free space appear between the content and the footer.'
          },
          {
            label: 'margin-top: auto',
            text: 'An auto margin eats all the free space of the container. On the footer it pushes it to the bottom, and the content stays at the top.'
          },
          {
            label: 'justify-content: space-between',
            text: 'Another way to reach the same result: it distributes the free space between the items, so the footer ends up at the bottom.'
          },
          {
            label: 'gap',
            text: 'The minimum space between the items. The auto margin does not remove the gap, it adds all the extra space on top of it.'
          }
        ],
        tip: 'The auto margin is the flexbox trick for pushing an element to the end of a column. It is the same idea behind the "footer at the bottom of the page" recipe that every CSS framework uses.'
      }
    ],
    validate(iframe) {
      const doc = iframe.contentDocument
      const page = doc.querySelector('.page')
      const content = doc.querySelector('.content')
      const footer = doc.querySelector('.footer')
      if (!page || !content || !footer) return false
      const style = iframe.contentWindow.getComputedStyle(page)
      if (style.display !== 'flex' || style.flexDirection !== 'column') return false
      const pageRect = page.getBoundingClientRect()
      const footerRect = footer.getBoundingClientRect()
      const contentRect = content.getBoundingClientRect()
      const innerBottom = pageRect.bottom - parseFloat(style.paddingBottom)
      if (Math.abs(footerRect.bottom - innerBottom) > 10) return false
      return footerRect.top - contentRect.bottom > 30
    }
  },
  {
    id: 11,
    title: 'Keeping a Size with flex-shrink',
    description: 'The purple button is being squeezed. Protect it so it keeps the size of its text while the long blue label shrinks to fit.',
    hint: 'When there is not enough room, flexbox shrinks the items to make everything fit. One item has to keep its natural size anyway, and flexbox has a property that protects it from shrinking.',
    html: `<div class="container">
  <div class="bar">A long label that needs room to fit</div>
  <div class="button">Keep me</div>
</div>`,
    starterCSS: `.container {
  width: 100%;
  max-width: 18rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  /* ?? keep the button from shrinking ?? */
}

.bar {
  flex: 1 1 auto;
  min-width: 0;
  padding: 0.75rem 1rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.button {
  min-width: 0;
  padding: 0.75rem 1rem;
  background: #8b5cf6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  white-space: nowrap;
}`,
    solutions: [
      {
        css: `.container {
  width: 100%;
  max-width: 18rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.bar {
  flex: 1 1 auto;
  min-width: 0;
  padding: 0.75rem 1rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.button {
  min-width: 0;
  padding: 0.75rem 1rem;
  background: #8b5cf6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  white-space: nowrap;
  flex-shrink: 0;
}`,
        explanation: [
          {
            label: 'div.container',
            text: 'The flex container. The two items together ask for more room than the container has, so something has to give.'
          },
          {
            label: 'div.bar',
            text: 'The first flex item. It has a long text, so it wants its natural width, but it has to shrink to make everything fit.'
          },
          {
            label: 'div.button',
            text: 'The second flex item. It has a short text and must keep the width of that text, even when space is missing.'
          },
          {
            label: 'display: flex',
            text: 'Already in the starter code. It puts the bar and the button in a single row.'
          },
          {
            label: 'flex-shrink: 0',
            text: 'Tells the browser that this item refuses to shrink. The default is 1, which means "shrink me if you need to".'
          },
          {
            label: 'flex-shrink: 1',
            text: 'The default value. When there is not enough space, every item with <code>flex-shrink: 1</code> gives up part of its size.'
          },
          {
            label: 'gap',
            text: 'The space between the items is never flexible: it does not shrink, it is always there.'
          }
        ],
        tip: 'Shrink and grow are two sides of the same coin: flex-grow takes the free space when there is extra space, and flex-shrink gives space back when there is not enough. Setting <code>flex-shrink: 0</code> is the way to protect a size that cannot be negotiated.'
      }
    ],
    validate(iframe) {
      const doc = iframe.contentDocument
      const container = doc.querySelector('.container')
      const bar = doc.querySelector('.bar')
      const button = doc.querySelector('.button')
      if (!container || !bar || !button) return false
      const style = iframe.contentWindow.getComputedStyle(container)
      if (style.display !== 'flex') return false
      const buttonStyle = iframe.contentWindow.getComputedStyle(button)
      if (buttonStyle.flexShrink !== '0') return false
      const buttonWidth = button.getBoundingClientRect().width
      const buttonContent = button.scrollWidth
      if (buttonWidth < buttonContent - 2) return false
      const barWidth = bar.getBoundingClientRect().width
      const barContent = bar.scrollWidth
      return barWidth < barContent - 10
    }
  },
  {
    id: 12,
    title: 'Boss: The Dashboard Card',
    description: 'Finish the card. The header must be a flex row where the badge breaks the centering rule and drops to the bottom on the right. The footer keeps a long label on the left and a button that refuses to shrink.',
    hint: 'Four fixes from World 3: give the header display:flex, use a self alignment on the badge, give that badge an automatic left margin, and protect the button from shrinking in the nested footer row.',
    html: `<div class="card">
  <div class="header">
    <div class="avatar">A</div>
    <h2 class="title">Card title</h2>
    <div class="badge">New</div>
  </div>
  <p class="body">This is the card body. It takes the space that is left.</p>
  <div class="footer">
    <div class="label">A long label that needs room to fit</div>
    <div class="button">Keep me</div>
  </div>
</div>`,
    starterCSS: `.card {
  width: 100%;
  max-width: 22rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.header {
  align-items: center;
  gap: 0.75rem;

  /* ?? row, badge right and at the bottom ?? */
}

.avatar {
  padding: 1.25rem 1rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}

.title {
  margin: 0;
  font-size: 1.25rem;
}

.badge {
  padding: 0.35rem 0.6rem;
  background: #ec4899;
  color: white;
  border-radius: 999px;
  font-weight: bold;

  /* ?? break the centering rule and go right ?? */
}

.body {
  flex: 1;
  margin: 0;
  padding: 0.75rem;
  background: #f1f5f9;
  border-radius: 0.5rem;
}

.footer {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.label {
  flex: 1;
  min-width: 0;
  padding: 0.6rem 0.75rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.button {
  padding: 0.6rem 0.8rem;
  background: #8b5cf6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  white-space: nowrap;

  /* ?? keep the button from shrinking ?? */
}`,
    solutions: [
      {
        css: `.card {
  width: 100%;
  max-width: 22rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.avatar {
  padding: 1.25rem 1rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}
.title { margin: 0; font-size: 1.25rem; }
.badge {
  margin-left: auto;
  align-self: flex-end;
  padding: 0.35rem 0.6rem;
  background: #ec4899;
  color: white;
  border-radius: 999px;
  font-weight: bold;
}
.body { flex: 1; margin: 0; padding: 0.75rem; background: #f1f5f9; border-radius: 0.5rem; }
.footer { display: flex; align-items: center; gap: 0.75rem; }
.label {
  flex: 1;
  min-width: 0;
  padding: 0.6rem 0.75rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.button {
  flex-shrink: 0;
  padding: 0.6rem 0.8rem;
  background: #8b5cf6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  white-space: nowrap;
}`,
        explanation: [
          { label: 'div.card', text: 'The outer column, already in the starter. It stacks the header, the body and the footer.' },
          { label: 'display: flex (.header)', text: 'From level 12: without it the gap and align-items do nothing and the avatar, title and badge stay stacked.' },
          { label: 'align-items: center (.header)', text: 'The rule for the whole header: avatar and title stay centered on the cross axis.' },
          { label: 'align-self: flex-end (.badge)', text: 'From level 9: one item breaks the rule and moves to the end of the cross axis, which is the bottom of the row.' },
          { label: 'margin-left: auto (.badge)', text: 'From level 10: the automatic margin eats the free space on the left, pushing the badge to the right edge.' },
          { label: 'flex-shrink: 0 (.button)', text: 'From level 11: the button keeps the width of its text while the long label in the footer shrinks.' }
        ],
        tip: 'The container sets the rule, the item can break it with align-self, and an automatic margin decides who gets the free space. Combine those with a protected size and you can build almost any toolbar.'
      }
    ],
    validate(iframe) {
      const doc = iframe.contentDocument
            const win = iframe.contentWindow
            const card = doc.querySelector('.card')
            const header = doc.querySelector('.header')
            const avatar = doc.querySelector('.avatar')
            const title = doc.querySelector('.title')
            const badge = doc.querySelector('.badge')
            const footer = doc.querySelector('.footer')
            const label = doc.querySelector('.label')
            const button = doc.querySelector('.button')
            if (!card || !header || !avatar || !title || !badge || !footer || !label || !button) return false
      
            const cardStyle = win.getComputedStyle(card)
            const headerStyle = win.getComputedStyle(header)
            const badgeStyle = win.getComputedStyle(badge)
            const footerStyle = win.getComputedStyle(footer)
            if (cardStyle.display !== 'flex' || cardStyle.flexDirection !== 'column') return false
            if (headerStyle.display !== 'flex' || headerStyle.alignItems !== 'center') return false
            if (footerStyle.display !== 'flex') return false
            if (parseFloat(badgeStyle.marginLeft) <= 0 || badgeStyle.alignSelf !== 'flex-end') return false
      
            const headerRect = header.getBoundingClientRect()
            const headerRight = headerRect.right - header.clientLeft - parseFloat(headerStyle.paddingRight)
            const avatarRect = avatar.getBoundingClientRect()
            const titleRect = title.getBoundingClientRect()
            const badgeRect = badge.getBoundingClientRect()
            if (Math.abs(headerRight - badgeRect.right) > 12) return false
            if (Math.abs(badgeRect.bottom - avatarRect.bottom) > 8) return false
            const avatarCenter = (avatarRect.top + avatarRect.bottom) / 2
            const titleCenter = (titleRect.top + titleRect.bottom) / 2
            if (Math.abs(avatarCenter - titleCenter) > 8) return false
      
            if (win.getComputedStyle(button).flexShrink !== '0') return false
            if (button.getBoundingClientRect().width < button.scrollWidth - 2) return false
            return label.getBoundingClientRect().width < label.scrollWidth - 10
    }
  },
  {
    id: 13,
    title: 'Aligning Wrapped Rows',
    description: 'The tiles are already wrapping into several rows, but the rows are glued to the top. Spread the rows across the height of the board, keeping the first row at the top and the last one at the bottom.',
    hint: 'When items wrap, they create several lines. There is a property that distributes those lines on the cross axis. Without it, the lines always stay together at the start.',
    html: `<div class="board">
  <div class="tile">Tile A</div>
  <div class="tile">Tile B</div>
  <div class="tile">Tile C</div>
  <div class="tile">Tile D</div>
  <div class="tile">Tile E</div>
  <div class="tile">Tile F</div>
</div>`,
    starterCSS: `.board {
  width: 100%;
  max-width: 22rem;
  min-height: 15rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  /* ?? spread the wrapped rows across the height ?? */
}

.tile {
  padding: 0.75rem 1rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}`,
    themeCSS: `.board {
  background:
    radial-gradient(circle at 50% 40%, rgba(139, 233, 253, 0.16), transparent 55%),
    linear-gradient(135deg, #1e1b2e, #282a36 60%, #2d2a3e);
  border: 1px solid #44475a;
  border-radius: 1rem;
  box-shadow: inset 0 0 0 1px rgba(248, 248, 242, 0.04), 0 18px 40px rgba(0, 0, 0, 0.25);
}

.tile {
  background: linear-gradient(135deg, #8be9fd, #60a5fa 55%, #bd93f9);
  color: #14121f;
  border: 1px solid rgba(248, 248, 242, 0.35);
  border-radius: 0.5rem;
  font-family: ui-monospace, 'JetBrains Mono', monospace;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-align: center;
}

.tile:nth-child(2n) {
  background: linear-gradient(135deg, #bd93f9, #7c3aed);
  color: #f8f8f2;
}

.tile:nth-child(3n) {
  background: linear-gradient(135deg, #ff79c6, #db2777);
  color: #f8f8f2;
}`,
    solutions: [
      {
        css: `.board {
  width: 100%;
  max-width: 22rem;
  min-height: 15rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-content: space-between;
}
.tile {
  padding: 0.75rem 1rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}`,
        explanation: [
          {
            label: 'div.board',
            text: 'The flex container. It keeps the default direction (<code>row</code>), so the tiles flow sideways and wrap into new <strong>lines</strong> when there is no more room.'
          },
          {
            label: 'div.tile',
            text: 'Six flex items. They are all similar, so the wrapping depends on the width of the board, not on the content of one special item.'
          },
          {
            label: 'flex-wrap: wrap',
            text: 'Already in the starter. It allows the items to move to a new line instead of shrinking forever. Without it there would be only one line and nothing to distribute.'
          },
          {
            label: 'align-content: space-between',
            text: 'Distributes the <strong>lines</strong> along the cross axis. The first line goes to the top, the last line goes to the bottom and the free space is shared between the lines in the middle.'
          },
          {
            label: 'align-items vs align-content',
            text: 'They sound similar but act on different things: <code>align-items</code> aligns the items inside one line, while <code>align-content</code> distributes the lines themselves. That is why this level needed the second one.'
          },
          {
            label: 'gap',
            text: 'The gap is the space between the tiles inside a line. The space between the lines is controlled by <code>align-content</code>, not by <code>gap</code>.'
          }
        ],
        tip: 'Use <code>flex-wrap: wrap</code> to create several lines and <code>align-content</code> to distribute those lines. <code>justify-content</code> still distributes each line horizontally, and <code>align-items</code> still aligns the items inside each line.'
      }
    ],
    validate(iframe) {
      const doc = iframe.contentDocument
      const win = iframe.contentWindow
      const board = doc.querySelector('.board')
      const tiles = [...doc.querySelectorAll('.tile')]
      if (!board || tiles.length < 6) return false

      const style = win.getComputedStyle(board)
      if (style.display !== 'flex' || style.flexWrap !== 'wrap') return false

      const boardRect = board.getBoundingClientRect()
      const contentTop = boardRect.top + board.clientTop + parseFloat(style.paddingTop)
      const contentBottom = boardRect.bottom - board.clientTop - parseFloat(style.paddingBottom)
      const rects = tiles.map(tile => tile.getBoundingClientRect())

      const tops = [...new Set(rects.map(rect => Math.round(rect.top)))].sort((a, b) => a - b)
      if (tops.length < 2) return false

      const firstTop = Math.min(...rects.map(rect => rect.top))
      const lastBottom = Math.max(...rects.map(rect => rect.bottom))
      const rowsAreSpread =
        Math.abs(firstTop - contentTop) < 12 &&
        Math.abs(lastBottom - contentBottom) < 12

      const rowGaps = []
      for (let i = 1; i < tops.length; i++) {
        rowGaps.push(tops[i] - tops[i - 1])
      }
      const rowsHaveSpace = rowGaps.every(gap => gap > 12)

      return rowsAreSpread && rowsHaveSpace
    }
  },
  {
    id: 14,
    title: 'Starting Size with flex-basis',
    description: 'Give the two side panels the same starting size and make the main panel exactly twice as wide as each side. Do not let the panels grow or shrink; their size should come from flex-basis.',
    hint: 'flex-grow shares the space that is left. Before that, you can give each item a starting size on the main axis. That starting size is the flex-basis, and the shorthand flex can write it together with grow and shrink.',
    html: `<div class="layout">
  <div class="panel side">Menu</div>
  <div class="panel main">Content</div>
  <div class="panel side">Info</div>
</div>`,
    starterCSS: `.layout {
  width: 100%;
  max-width: 24rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
}

.panel {
  padding: 1rem;
  color: white;
  font-weight: bold;
  text-align: center;
  border-radius: 0.5rem;
}

.side {
  background: #3b82f6;
  /* ?? starting size: 1 part ?? */
}

.main {
  background: #8b5cf6;
  /* ?? starting size: 2 parts ?? */
}`,
    themeCSS: `.layout {
  background:
    repeating-linear-gradient(90deg, rgba(139, 233, 253, 0.06) 0 1px, transparent 1px 32px),
    linear-gradient(135deg, #1e1b2e, #282a36 60%, #2d2a3e);
  border: 1px solid #44475a;
  border-radius: 1rem;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.25);
}

.panel {
  border: 1px solid rgba(248, 248, 242, 0.28);
  border-radius: 0.5rem;
  font-family: ui-monospace, 'JetBrains Mono', monospace;
  font-weight: 700;
  letter-spacing: 0.03em;
}

.side {
  background: linear-gradient(180deg, #2563eb, #1d4ed8);
}

.main {
  background: linear-gradient(180deg, #8b5cf6, #6d28d9);
}`,
    solutions: [
      {
        css: `.layout {
  width: 100%;
  max-width: 24rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
}
.panel {
  padding: 1rem;
  color: white;
  font-weight: bold;
  text-align: center;
  border-radius: 0.5rem;
}
.side {
  background: #3b82f6;
  flex: 0 0 25%;
}
.main {
  background: #8b5cf6;
  flex: 0 0 50%;
}`,
        explanation: [
          {
            label: 'div.layout',
            text: 'The flex container. It has no gaps here, so the items can divide the whole width with their percentages.'
          },
          {
            label: 'flex: 0 0 25% (.side)',
            text: 'The shorthand means <code>flex-grow: 0</code>, <code>flex-shrink: 0</code> and <code>flex-basis: 25%</code>. The side panel starts at one quarter of the row and refuses to change that size.'
          },
          {
            label: 'flex: 0 0 50% (.main)',
            text: 'The main panel starts at half of the row. Because it does not grow or shrink, it stays exactly twice as wide as each side panel.'
          },
          {
            label: 'flex-basis',
            text: 'It is the starting size on the main axis, before any free space is shared. In a row it works like a width; in a column it would work like a height.'
          },
          {
            label: 'flex-grow: 0 and flex-shrink: 0',
            text: 'They freeze the starting size. With the defaults the panels could grow into free space or shrink when the row is too small, and the proportions would change.'
          },
          {
            label: 'box-sizing: border-box',
            text: 'The preview already uses it, so the padding and the border stay inside the percentage. Without it the panels would be wider than 25% and 50% together.'
          }
        ],
        tip: 'Think in this order: <code>flex-basis</code> sets the starting size, <code>flex-grow</code> shares the extra space and <code>flex-shrink</code> removes space when the container is too small. The shorthand <code>flex: 0 0 25%</code> is a compact way to freeze a starting size.'
      }
    ],
    validate(iframe) {
      const doc = iframe.contentDocument
      const win = iframe.contentWindow
      const layout = doc.querySelector('.layout')
      const sides = [...doc.querySelectorAll('.side')]
      const main = doc.querySelector('.main')
      if (!layout || sides.length !== 2 || !main) return false

      const style = win.getComputedStyle(layout)
      if (style.display !== 'flex') return false

      const sideStyle = win.getComputedStyle(sides[0])
      const mainStyle = win.getComputedStyle(main)
      if (sideStyle.flexBasis === 'auto' || mainStyle.flexBasis === 'auto') return false

      const sideOne = sides[0].getBoundingClientRect()
      const sideTwo = sides[1].getBoundingClientRect()
      const mainRect = main.getBoundingClientRect()
      if (sideOne.width <= 0 || mainRect.width <= 0) return false

      const sidesAreEqual = Math.abs(sideOne.width - sideTwo.width) < 10
      const ratio = mainRect.width / sideOne.width
      const hasDoubleSize = ratio > 1.8 && ratio < 2.2
      const totalWidth = sideOne.width + sideTwo.width + mainRect.width
      const fits = totalWidth <= layout.clientWidth + 3

      return sidesAreEqual && hasDoubleSize && fits
    }
  },
  {
    id: 15,
    title: 'Space Around vs Evenly',
    description: 'The tags are spread with equal gaps, including the edges. Change the distribution so the outer gaps become half the size of the gaps between the tags.',
    hint: 'Three spacing values look almost the same. One leaves no space at the edges, one leaves the same space everywhere, and one leaves half of the inner space at the edges. You need the last one.',
    html: `<div class="row">
  <div class="tag">HTML</div>
  <div class="tag">CSS</div>
  <div class="tag">Flexbox</div>
  <div class="tag">Layout</div>
</div>`,
    starterCSS: `.row {
  width: 100%;
  max-width: 22rem;
  padding: 0.75rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-evenly;

  /* ?? make the outer gaps half of the inner gaps ?? */
}

.tag {
  padding: 0.5rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  font-size: 0.85rem;
}`,
    themeCSS: `.row {
  background:
    radial-gradient(circle at 50% 0%, rgba(255, 121, 198, 0.12), transparent 60%),
    linear-gradient(135deg, #1e1b2e, #282a36 60%, #2d2a3e);
  border: 1px solid #44475a;
  border-radius: 1rem;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.25);
}

.tag {
  background: linear-gradient(135deg, #ff79c6, #bd93f9 60%, #8be9fd);
  color: #14121f;
  border: 1px solid rgba(248, 248, 242, 0.35);
  border-radius: 999px;
  font-family: ui-monospace, 'JetBrains Mono', monospace;
  font-weight: 700;
  letter-spacing: 0.03em;
}`,
    solutions: [
      {
        css: `.row {
  width: 100%;
  max-width: 22rem;
  padding: 0.75rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-around;
}
.tag {
  padding: 0.5rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  font-size: 0.85rem;
}`,
        explanation: [
          {
            label: 'div.row',
            text: 'The flex container. The four tags are on one line, so <code>justify-content</code> distributes them along the main axis.'
          },
          {
            label: 'justify-content: space-around',
            text: 'Each item receives the same amount of space on both sides. The first and last items end up with half of that space at the edges, because only one item is next to each edge.'
          },
          {
            label: 'space-evenly',
            text: 'The value in the starter. It gives the same size to every gap, including the two edges. That is why the outer gaps looked as big as the inner ones.'
          },
          {
            label: 'space-between',
            text: 'The other common value. It puts the first item against the start and the last item against the end, so the outer gaps become zero.'
          },
          {
            label: 'gap',
            text: 'The <code>justify-content</code> values distribute the free space. If you also add a <code>gap</code>, that fixed space is added between the items before the free space is shared.'
          }
        ],
        tip: '<code>space-between</code> has no edge space, <code>space-evenly</code> has equal edge and inner space, and <code>space-around</code> has half of the inner space at the edges. Reading the target carefully tells you which one to use.'
      }
    ],
    validate(iframe) {
      const doc = iframe.contentDocument
      const win = iframe.contentWindow
      const row = doc.querySelector('.row')
      const tags = [...doc.querySelectorAll('.tag')]
      if (!row || tags.length !== 4) return false

      const style = win.getComputedStyle(row)
      if (style.display !== 'flex') return false

      const rowRect = row.getBoundingClientRect()
      const contentLeft = rowRect.left + row.clientLeft + parseFloat(style.paddingLeft)
      const contentRight = rowRect.right - row.clientLeft - parseFloat(style.paddingRight)
      const rects = tags.map(tag => tag.getBoundingClientRect())

      const tops = rects.map(rect => Math.round(rect.top))
      if (Math.max(...tops) - Math.min(...tops) > 4) return false

      const innerGaps = []
      for (let i = 1; i < rects.length; i++) {
        innerGaps.push(rects[i].left - rects[i - 1].right)
      }
      const edgeLeft = rects[0].left - contentLeft
      const edgeRight = contentRight - rects[rects.length - 1].right
      const innerAverage = innerGaps.reduce((sum, gap) => sum + gap, 0) / innerGaps.length
      const innerBalanced = Math.max(...innerGaps) - Math.min(...innerGaps) < 12

      return (
        innerBalanced &&
        Math.abs(edgeLeft - edgeRight) < 12 &&
        Math.abs(innerAverage / 2 - edgeLeft) < 14
      )
    }
  },
  {
    id: 16,
    title: 'Boss: Responsive Gallery',
    description: 'Six cards wrap into two rows of three. Give every card the same starting width, subtract the gap from that width, spread the rows across the height, and make the outer gaps half of the gaps between the cards.',
    hint: 'This boss mixes levels 13 to 15: wrapping and align-content for the lines, flex-basis with calc() for the card width, and the space value whose edge gaps are half of the inner gaps.',
    html: `<div class="gallery">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
  <div class="card">Card 4</div>
  <div class="card">Card 5</div>
  <div class="card">Card 6</div>
</div>`,
    starterCSS: `.gallery {
  width: 100%;
  max-width: 26rem;
  min-height: 16rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  /* ?? spread the lines and the cards inside them ?? */
}

.card {
  padding: 0.75rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  text-align: center;

  /* ?? equal starting width, gap already subtracted ?? */
}`,
    themeCSS: `.gallery {
  background:
    radial-gradient(circle at 50% 35%, rgba(189, 147, 249, 0.18), transparent 58%),
    linear-gradient(135deg, #1e1b2e, #282a36 60%, #2d2a3e);
  border: 1px solid rgba(255, 121, 198, 0.45);
  border-radius: 1rem;
  box-shadow: 0 0 40px rgba(255, 121, 198, 0.12), 0 20px 44px rgba(0, 0, 0, 0.3);
}

.card {
  background: linear-gradient(135deg, #8be9fd, #bd93f9 55%, #ff79c6);
  color: #14121f;
  border: 1px solid rgba(248, 248, 242, 0.4);
  border-radius: 0.5rem;
  font-family: ui-monospace, 'JetBrains Mono', monospace;
  font-weight: 700;
  letter-spacing: 0.03em;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.22);
}

.card:nth-child(2n) {
  background: linear-gradient(135deg, #ff79c6, #bd93f9 55%, #8be9fd);
}

.card:nth-child(3n) {
  background: linear-gradient(135deg, #bd93f9, #8be9fd 55%, #50fa7b);
}`,
    solutions: [
      {
        css: `.gallery {
  width: 100%;
  max-width: 26rem;
  min-height: 16rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-between;
  gap: 0.5rem;
}
.card {
  flex: 0 0 calc(30% - 0.5rem);
  padding: 0.75rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  text-align: center;
}`,
        explanation: [
          { label: 'flex-wrap: wrap', text: 'From level 13: six cards cannot fit in one line, so they form two rows.' },
          { label: 'align-content: space-between', text: 'From level 13: the first row goes to the top and the last row to the bottom of the gallery.' },
          { label: 'flex: 0 0 calc(30% - 0.5rem)', text: 'From level 14: each card starts below one third, so three cards fit and free space remains for the distribution. The gap is subtracted so nothing overflows.' },
          { label: 'justify-content: space-around', text: 'From level 15: the extra space inside a row is shared so the outer gaps are half of the gaps between the cards.' },
          { label: 'gap', text: 'The fixed space between cards. The distribution adds free space on top of it, which is why the inner gap is bigger than the edge gap.' }
        ],
        tip: 'One property for the lines, one for the items inside each line, and a basis that leaves room for both. That is the whole World 4 recipe in a single gallery.'
      }
    ],
    validate(iframe) {
      const doc = iframe.contentDocument
            const win = iframe.contentWindow
            const gallery = doc.querySelector('.gallery')
            const cards = [...doc.querySelectorAll('.card')]
            if (!gallery || cards.length !== 6) return false
            const style = win.getComputedStyle(gallery)
            if (style.display !== 'flex' || style.flexWrap !== 'wrap') return false
            if (style.alignContent !== 'space-between' || style.justifyContent !== 'space-around') return false
            const columnGap = parseFloat(style.columnGap)
            if (!(columnGap > 4)) return false
            if (gallery.scrollWidth > gallery.clientWidth + 3) return false
      
            const galleryRect = gallery.getBoundingClientRect()
            const contentTop = galleryRect.top + gallery.clientTop + parseFloat(style.paddingTop)
            const contentBottom = galleryRect.bottom - gallery.clientTop - parseFloat(style.paddingBottom)
            const contentLeft = galleryRect.left + gallery.clientLeft + parseFloat(style.paddingLeft)
            const contentRight = galleryRect.right - gallery.clientLeft - parseFloat(style.paddingRight)
            const rects = cards.map(card => card.getBoundingClientRect())
            const widths = rects.map(rect => rect.width)
            if (Math.max(...widths) - Math.min(...widths) > 10) return false
      
            const tops = [...new Set(rects.map(rect => Math.round(rect.top)))].sort((a, b) => a - b)
            if (tops.length !== 2) return false
            for (const top of tops) {
              const row = rects.filter(rect => Math.abs(rect.top - top) < 4).sort((a, b) => a.left - b.left)
              if (row.length !== 3) return false
              const inner = row[1].left - row[0].right
              const leftEdge = row[0].left - contentLeft
              const rightEdge = contentRight - row[2].right
              if (inner <= columnGap + 4) return false
              if (Math.abs(leftEdge - rightEdge) > 12) return false
              if (Math.abs((inner - columnGap) - leftEdge * 2) > 16) return false
            }
            return Math.abs(Math.min(...rects.map(rect => rect.top)) - contentTop) < 12 &&
              Math.abs(Math.max(...rects.map(rect => rect.bottom)) - contentBottom) < 12
    }
  },
  {
    id: 17,
    title: 'Pushing with Auto Margins',
    description: 'The logo and the action buttons are glued together on the left. Keep the logo on the left and move the whole actions group to the right edge.',
    hint: 'An automatic margin absorbs all the free space on the side where it is applied. You do not need to change the order or the HTML, only the amount of free space on one side of the actions.',
    html: `<div class="navbar">
  <div class="logo">CSS Quest</div>
  <div class="actions">
    <div class="nav-btn">Tags</div>
    <div class="nav-btn">Play</div>
  </div>
</div>`,
    starterCSS: `.navbar {
  width: 100%;
  max-width: 24rem;
  padding: 0.75rem 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  /* ?? keep the logo left and push the actions right ?? */
}

.logo {
  color: #1e293b;
  font-weight: bold;
}

.actions {
  display: flex;
  gap: 0.5rem;

  /* ?? eat the free space on the left side ?? */
}

.nav-btn {
  padding: 0.5rem 0.75rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}`,
    themeCSS: `.navbar {
  background:
    linear-gradient(90deg, rgba(139, 233, 253, 0.08), transparent 40%),
    linear-gradient(135deg, #1e1b2e, #282a36 60%, #2d2a3e);
  border: 1px solid #44475a;
  border-radius: 0.75rem;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.25);
}

.logo {
  color: #8be9fd;
  font-family: 'Space Grotesk', sans-serif;
  letter-spacing: 0.01em;
}

.nav-btn {
  background: transparent;
  color: #f8f8f2;
  border: 1px solid #6272a4;
  border-radius: 0.5rem;
  font-family: ui-monospace, 'JetBrains Mono', monospace;
  font-size: 0.82rem;
}

.nav-btn:last-child {
  background: linear-gradient(135deg, #bd93f9, #8be9fd);
  color: #14121f;
  border-color: transparent;
}`,
    solutions: [
      {
        css: `.navbar {
  width: 100%;
  max-width: 24rem;
  padding: 0.75rem 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.logo {
  color: #1e293b;
  font-weight: bold;
}
.actions {
  display: flex;
  gap: 0.5rem;
  margin-left: auto;
}
.nav-btn {
  padding: 0.5rem 0.75rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}`,
        explanation: [
          {
            label: 'div.navbar',
            text: 'The flex container. The logo and the actions group are its two children, and the actions group is itself a flex container for the two buttons.'
          },
          {
            label: 'margin-left: auto (.actions)',
            text: 'An automatic margin is greedy: it takes all the free space available on its side. Here it eats the empty space between the logo and the actions, pushing the actions to the right edge.'
          },
          {
            label: 'justify-content: space-between',
            text: 'An alternative solution. It would also push the two children to the opposite edges, without changing the margin. The game accepts any CSS that produces the same layout.'
          },
          {
            label: 'div.actions',
            text: 'A nested flex container. Its own <code>gap</code> keeps the two buttons together, so moving the group does not separate them.'
          },
          {
            label: 'gap on the navbar',
            text: 'The container gap still adds a minimum distance between the two groups. The automatic margin works with the space that remains after that gap.'
          }
        ],
        tip: 'An automatic margin is the simplest way to push one single item away from the others. <code>margin-left: auto</code> pushes it right, <code>margin-right: auto</code> pushes it left, and <code>margin-top: auto</code> pushes it down. It is the same idea you used for the footer.'
      }
    ],
    validate(iframe) {
      const doc = iframe.contentDocument
      const win = iframe.contentWindow
      const navbar = doc.querySelector('.navbar')
      const logo = doc.querySelector('.logo')
      const actions = doc.querySelector('.actions')
      if (!navbar || !logo || !actions) return false

      const style = win.getComputedStyle(navbar)
      if (style.display !== 'flex') return false

      const navbarRect = navbar.getBoundingClientRect()
      const contentLeft = navbarRect.left + navbar.clientLeft + parseFloat(style.paddingLeft)
      const contentRight = navbarRect.right - navbar.clientLeft - parseFloat(style.paddingRight)
      const logoRect = logo.getBoundingClientRect()
      const actionsRect = actions.getBoundingClientRect()

      const logoIsLeft = logoRect.left - contentLeft < 12
      const actionsAreRight = contentRight - actionsRect.right < 12
      const hasLargeGap = actionsRect.left - logoRect.right > 24

      return logoIsLeft && actionsAreRight && hasLargeGap
    }
  },
  {
    id: 18,
    title: 'Reverse Direction',
    description: 'The steps are written as Start, Build and Ship in the HTML, but they should appear as Ship, Build and Start on the screen. Reverse the direction of the whole row without changing the HTML or using order.',
    hint: 'There is a container property that flips the main axis. It is not the same as the order property: instead of changing one item, it changes where the row starts and where it ends.',
    html: `<div class="steps">
  <div class="step">Start</div>
  <div class="step">Build</div>
  <div class="step">Ship</div>
</div>`,
    starterCSS: `.steps {
  width: 100%;
  max-width: 20rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  gap: 0.5rem;

  /* ?? reverse the visual order of the row ?? */
}

.step {
  padding: 0.75rem 1rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  text-align: center;
}`,
    themeCSS: `.steps {
  background:
    repeating-linear-gradient(135deg, rgba(139, 233, 253, 0.07) 0 2px, transparent 2px 16px),
    linear-gradient(135deg, #1e1b2e, #282a36 60%, #2d2a3e);
  border: 1px solid #44475a;
  border-radius: 1rem;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.25);
}

.step {
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  border: 1px solid rgba(248, 248, 242, 0.28);
  border-radius: 0.5rem;
  font-family: ui-monospace, 'JetBrains Mono', monospace;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.step:nth-child(2) {
  background: linear-gradient(135deg, #7c3aed, #6d28d9);
}

.step:nth-child(3) {
  background: linear-gradient(135deg, #db2777, #be185d);
}`,
    solutions: [
      {
        css: `.steps {
  width: 100%;
  max-width: 20rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  gap: 0.5rem;
  flex-direction: row-reverse;
}
.step {
  padding: 0.75rem 1rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  text-align: center;
}`,
        explanation: [
          {
            label: 'div.steps',
            text: 'The flex container. The three steps are flex items, and their DOM order stays Start, Build, Ship.'
          },
          {
            label: 'flex-direction: row-reverse',
            text: 'Flips the main axis. The row still lays items out horizontally, but the start is now on the right and the end is on the left, so the first HTML item appears on the right.'
          },
          {
            label: 'Why not order?',
            text: '<code>order</code> changes the position of individual items. <code>row-reverse</code> changes the whole flow at once, which is useful for timelines, chat messages and any layout that reads from the end to the start.'
          },
          {
            label: 'gap',
            text: 'The gap is measured between the items in the visual order, so the spacing stays the same even after the direction is reversed.'
          },
          {
            label: 'Accessibility',
            text: 'The HTML is still Start, Build, Ship. Screen readers and the Tab key follow the DOM, not the visual direction, so use this property when the visual reversal matches the meaning.'
          }
        ],
        tip: '<code>flex-direction: row-reverse</code> reverses the whole main axis. <code>order</code> reorganizes individual items. Both change only the visual presentation; the HTML and the keyboard order stay untouched.'
      }
    ],
    validate(iframe) {
      const doc = iframe.contentDocument
      const win = iframe.contentWindow
      const steps = doc.querySelector('.steps')
      const items = [...doc.querySelectorAll('.step')]
      if (!steps || items.length !== 3) return false

      const style = win.getComputedStyle(steps)
      if (style.display !== 'flex' || style.flexDirection !== 'row-reverse') return false

      const first = items[0].getBoundingClientRect()
      const second = items[1].getBoundingClientRect()
      const third = items[2].getBoundingClientRect()

      return third.left < second.left && second.left < first.left
    }
  },
  {
    id: 19,
    title: 'Text That Fits',
    description: 'The long label is pushing the counter outside the card. Keep the avatar and the counter visible, and let the label shrink and show an ellipsis instead of overflowing.',
    hint: 'A flex item has a minimum size equal to its content by default, so it refuses to shrink below the text. There is a property whose default value is auto that controls this minimum; set it to zero on the label.',
    html: `<div class="list-item">
  <div class="avatar">A</div>
  <div class="label">A very long file name that should not push the counter outside the card</div>
  <div class="count">12</div>
</div>`,
    starterCSS: `.list-item {
  width: 100%;
  max-width: 20rem;
  padding: 0.75rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.avatar {
  flex: 0 0 auto;
  padding: 0.5rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}

.label {
  flex: 1;

  /* ?? allow the text to shrink below its natural width ?? */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.count {
  flex: 0 0 auto;
  padding: 0.35rem 0.6rem;
  background: #8b5cf6;
  color: white;
  border-radius: 999px;
  font-weight: bold;
}`,
    themeCSS: `.list-item {
  background:
    linear-gradient(90deg, rgba(80, 250, 123, 0.06), transparent 45%),
    linear-gradient(135deg, #1e1b2e, #282a36 60%, #2d2a3e);
  border: 1px solid #44475a;
  border-radius: 0.75rem;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.25);
}

.avatar {
  background: linear-gradient(135deg, #8be9fd, #60a5fa);
  color: #14121f;
  border: 1px solid rgba(248, 248, 242, 0.35);
  border-radius: 0.5rem;
  font-family: ui-monospace, 'JetBrains Mono', monospace;
  font-weight: 700;
}

.label {
  color: #f8f8f2;
  font-family: ui-monospace, 'JetBrains Mono', monospace;
  font-size: 0.82rem;
}

.count {
  background: linear-gradient(135deg, #50fa7b, #2d8b4e);
  color: #14121f;
  border-radius: 999px;
  font-family: ui-monospace, 'JetBrains Mono', monospace;
  font-weight: 700;
}`,
    solutions: [
      {
        css: `.list-item {
  width: 100%;
  max-width: 20rem;
  padding: 0.75rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.avatar {
  flex: 0 0 auto;
  padding: 0.5rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}
.label {
  flex: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.count {
  flex: 0 0 auto;
  padding: 0.35rem 0.6rem;
  background: #8b5cf6;
  color: white;
  border-radius: 999px;
  font-weight: bold;
}`,
        explanation: [
          {
            label: 'div.list-item',
            text: 'A flex container in a row. The avatar, the label and the counter are the three items, and the row must fit inside the card.'
          },
          {
            label: 'min-width: 0 (.label)',
            text: 'A flex item defaults to <code>min-width: auto</code>, which means it refuses to become smaller than its content. Setting it to <code>0</code> gives the browser permission to shrink the label below the natural width of the text.'
          },
          {
            label: 'flex: 1 (.label)',
            text: 'Already in the starter. It makes the label take the free space that the avatar and the counter do not use.'
          },
          {
            label: 'overflow: hidden and text-overflow: ellipsis',
            text: 'They decide what happens to the text after the label is allowed to shrink: the extra text is hidden and replaced by <code>…</code> at the end.'
          },
          {
            label: 'flex: 0 0 auto (.avatar and .count)',
            text: 'These two items protect their own size. Without that, the browser could shrink them too and the avatar or the counter would disappear.'
          },
          {
            label: 'min-width and flex-shrink',
            text: 'They work together: <code>flex-shrink</code> says the item may shrink, and <code>min-width</code> says how far it may go. With the default <code>auto</code>, the text is the limit.'
          }
        ],
        tip: 'When a flex item contains long text and refuses to shrink, remember the pair: <code>min-width: 0</code> on the item, plus <code>overflow: hidden</code> and <code>text-overflow: ellipsis</code> to show the truncation. This is one of the most common real-world flexbox fixes.'
      }
    ],
    validate(iframe) {
      const doc = iframe.contentDocument
      const win = iframe.contentWindow
      const list = doc.querySelector('.list-item')
      const label = doc.querySelector('.label')
      const count = doc.querySelector('.count')
      if (!list || !label || !count) return false

      const style = win.getComputedStyle(list)
      if (style.display !== 'flex') return false

      const labelStyle = win.getComputedStyle(label)
      const minWidth = parseFloat(labelStyle.minWidth)
      if (minWidth !== 0) return false

      const listRect = list.getBoundingClientRect()
      const contentRight = listRect.right - list.clientLeft - parseFloat(style.paddingRight)
      const countRect = count.getBoundingClientRect()

      const noOverflow = list.scrollWidth <= list.clientWidth + 2
      const textIsClipped = label.scrollWidth > label.clientWidth + 1
      const counterIsInside = countRect.right <= contentRight + 2 && countRect.width > 0

      return noOverflow && textIsClipped && counterIsInside
    }
  },
  {
    id: 20,
    title: 'Boss: The Whole Interface',
    description: 'Build the app shell from World 5. The topbar pushes the user to the right with an automatic margin and draws the menu in reverse. Inside the content area a long file name shrinks with an ellipsis while its counter stays visible.',
    hint: 'Work from the outside in: the app is a column, the topbar and layout are rows, the menu flips its direction, the user uses an automatic left margin, and the file name needs permission to shrink below its text.',
    html: `<div class="app">
  <header class="topbar">
    <div class="brand">CSS Quest</div>
    <nav class="menu">
      <div class="menu-item">Levels</div>
      <div class="menu-item">Tags</div>
    </nav>
    <div class="user">A</div>
  </header>
  <div class="layout">
    <aside class="sidebar">Sidebar</aside>
    <main class="content">
      <div class="file">A very long file name that should not push the counter outside the card</div>
      <div class="count">12</div>
    </main>
  </div>
  <footer class="footer">Footer</footer>
</div>`,
    starterCSS: `.app {
  width: 100%;
  max-width: 24rem;
  min-height: 20rem;
  padding: 0.75rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.topbar {
  gap: 0.5rem;
  align-items: center;
  padding: 0.5rem;
  background: white;
  border-radius: 0.5rem;

  /* ?? make this a row ?? */
}

.brand { font-weight: bold; }

.menu {
  display: flex;
  gap: 0.5rem;

  /* ?? show the items in reverse ?? */
}

.menu-item {
  color: #475569;
  font-weight: bold;
}

.user {
  padding: 0.4rem 0.55rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;

  /* ?? push the user to the right ?? */
}

.layout {
  display: flex;
  gap: 0.5rem;

  /* ?? fill the free height of the app ?? */
}

.sidebar {
  flex: 0 0 30%;
  padding: 0.75rem;
  background: #8b5cf6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}

.content {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;

  /* ?? take the width that is left ?? */
}

.file {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  /* ?? allow the text to shrink ?? */
}

.count {
  flex: 0 0 auto;
  padding: 0.3rem 0.5rem;
  background: #ec4899;
  color: white;
  border-radius: 999px;
  font-weight: bold;
}

.footer {
  padding: 0.6rem 0.75rem;
  background: #1e293b;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}`,
    themeCSS: `.app {
  background:
    radial-gradient(circle at 50% 0%, rgba(189, 147, 249, 0.16), transparent 50%),
    linear-gradient(135deg, #1e1b2e, #282a36 60%, #2d2a3e);
  border: 1px solid rgba(255, 121, 198, 0.45);
  border-radius: 1rem;
  box-shadow: 0 0 46px rgba(255, 121, 198, 0.12), 0 22px 48px rgba(0, 0, 0, 0.32);
}

.topbar {
  background: rgba(248, 248, 242, 0.06);
  border: 1px solid #44475a;
  border-radius: 0.75rem;
}

.brand {
  color: #8be9fd;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.9rem;
}

.menu-item {
  color: #f8f8f2;
  font-family: ui-monospace, 'JetBrains Mono', monospace;
  font-size: 0.78rem;
}

.user {
  background: linear-gradient(135deg, #50fa7b, #8be9fd);
  color: #14121f;
  border: 1px solid rgba(248, 248, 242, 0.35);
  border-radius: 0.5rem;
  font-family: ui-monospace, 'JetBrains Mono', monospace;
}

.sidebar {
  background: linear-gradient(160deg, #6d28d9, #4c1d95);
  border: 1px solid rgba(248, 248, 242, 0.2);
  border-radius: 0.5rem;
  font-family: ui-monospace, 'JetBrains Mono', monospace;
  font-size: 0.8rem;
}

.content {
  background: linear-gradient(160deg, #1d4ed8, #1e3a8a);
  border: 1px solid rgba(248, 248, 242, 0.2);
  border-radius: 0.5rem;
  font-family: ui-monospace, 'JetBrains Mono', monospace;
  font-size: 0.8rem;
}

.footer {
  background: rgba(80, 250, 123, 0.12);
  color: #50fa7b;
  border: 1px solid rgba(80, 250, 123, 0.35);
  border-radius: 0.5rem;
  font-family: ui-monospace, 'JetBrains Mono', monospace;
  font-size: 0.78rem;
  text-align: center;
}`,
    solutions: [
      {
        css: `.app {
  width: 100%;
  max-width: 24rem;
  min-height: 20rem;
  padding: 0.75rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.topbar {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0.5rem;
  background: white;
  border-radius: 0.5rem;
}
.brand { font-weight: bold; }
.menu {
  display: flex;
  flex-direction: row-reverse;
  gap: 0.5rem;
}
.menu-item { color: #475569; font-weight: bold; }
.user {
  margin-left: auto;
  padding: 0.4rem 0.55rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}
.layout {
  display: flex;
  flex: 1;
  gap: 0.5rem;
}
.sidebar {
  flex: 0 0 30%;
  padding: 0.75rem;
  background: #8b5cf6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}
.content {
  display: flex;
  flex: 1;
  min-width: 0;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
}
.file {
  flex: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.count {
  flex: 0 0 auto;
  padding: 0.3rem 0.5rem;
  background: #ec4899;
  color: white;
  border-radius: 999px;
  font-weight: bold;
}
.footer {
  padding: 0.6rem 0.75rem;
  background: #1e293b;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}`,
        explanation: [
          { label: 'div.app', text: 'The outer column. Every section inside it is another flex container, which is the main idea of nested flexbox.' },
          { label: 'display: flex (.topbar)', text: 'From level 12: the brand, menu and user finally become flex items in a row.' },
          { label: 'flex-direction: row-reverse (.menu)', text: 'From level 18: the whole menu flips, so Tags appears before Levels without changing the HTML.' },
          { label: 'margin-left: auto (.user)', text: 'From level 17: the automatic margin eats the free space after the menu and pushes the user to the right edge.' },
          { label: 'display: flex (.content)', text: 'The main area is a nested row: the file name and the counter live side by side.' },
          { label: 'min-width: 0 (.file)', text: 'From level 19: the long name may shrink below its natural width, and the ellipsis replaces the hidden text.' },
          { label: 'flex: 1 (.layout and .content)', text: 'The layout eats the free height of the app and the content eats the free width next to the sidebar, so the footer sits at the bottom.' }
        ],
        tip: 'This boss is the whole World 5: reverse a row, push one item with an automatic margin, let long text shrink, and keep every level of the interface as a flex container.'
      }
    ],
    validate(iframe) {
      const doc = iframe.contentDocument
            const win = iframe.contentWindow
            const app = doc.querySelector('.app')
            const topbar = doc.querySelector('.topbar')
            const brand = doc.querySelector('.brand')
            const menu = doc.querySelector('.menu')
            const menuItems = [...doc.querySelectorAll('.menu-item')]
            const user = doc.querySelector('.user')
            const layout = doc.querySelector('.layout')
            const sidebar = doc.querySelector('.sidebar')
            const content = doc.querySelector('.content')
            const file = doc.querySelector('.file')
            const count = doc.querySelector('.count')
            const footer = doc.querySelector('.footer')
            if (!app || !topbar || !brand || !menu || menuItems.length !== 2 || !user || !layout || !sidebar || !content || !file || !count || !footer) return false
      
            const appStyle = win.getComputedStyle(app)
            const topbarStyle = win.getComputedStyle(topbar)
            const menuStyle = win.getComputedStyle(menu)
            const layoutStyle = win.getComputedStyle(layout)
            const contentStyle = win.getComputedStyle(content)
            if (appStyle.display !== 'flex' || appStyle.flexDirection !== 'column') return false
            if (topbarStyle.display !== 'flex' || menuStyle.display !== 'flex') return false
            if (menuStyle.flexDirection !== 'row-reverse') return false
            if (parseFloat(win.getComputedStyle(user).marginLeft) <= 0) return false
            if (layoutStyle.display !== 'flex' || parseFloat(layoutStyle.flexGrow) < 1) return false
            if (contentStyle.display !== 'flex' || parseFloat(contentStyle.flexGrow) < 1) return false
            if (parseFloat(win.getComputedStyle(file).minWidth) !== 0) return false
      
            const menuRects = menuItems.map(item => item.getBoundingClientRect())
            if (!(menuRects[1].right < menuRects[0].left)) return false
            const topbarRect = topbar.getBoundingClientRect()
            const contentRight = topbarRect.right - topbar.clientLeft - parseFloat(topbarStyle.paddingRight)
            if (Math.abs(contentRight - user.getBoundingClientRect().right) > 12) return false
            if (user.getBoundingClientRect().left - menuRects[1].right < 24) return false
      
            const fileRect = file.getBoundingClientRect()
            const countRect = count.getBoundingClientRect()
            if (!(fileRect.width < file.scrollWidth - 10)) return false
            if (!(countRect.left >= fileRect.right - 2)) return false
            if (countRect.right > content.getBoundingClientRect().right + 2) return false
      
            const sidebarRect = sidebar.getBoundingClientRect()
            const contentRect = content.getBoundingClientRect()
            if (!(contentRect.left >= sidebarRect.right - 2)) return false
            if (Math.abs(contentRect.right - layout.getBoundingClientRect().right) > 12) return false
            const appRect = app.getBoundingClientRect()
            const appBottom = appRect.bottom - app.clientTop - parseFloat(appStyle.paddingBottom)
            if (Math.abs(appBottom - footer.getBoundingClientRect().bottom) > 12) return false
            return app.scrollHeight <= app.clientHeight + 3
    }
  },
  {
    id: 21,
    title: 'Different Gaps on Each Axis',
    description: 'The tiles wrap into two rows of three. Keep that layout, but make the space between the rows twice as big as the space between the tiles.',
    hint: 'The gap shorthand accepts two values: the first one is for rows and the second one is for columns. There are also separate row-gap and column-gap properties if you prefer to write them out.',
    html: `<div class="gallery">
   <div class="tile">Tile 1</div>
   <div class="tile">Tile 2</div>
   <div class="tile">Tile 3</div>
   <div class="tile">Tile 4</div>
   <div class="tile">Tile 5</div>
   <div class="tile">Tile 6</div>
 </div>`,
    starterCSS: `.gallery {
  width: 100%;
  max-width: 24rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  /* ?? rows need twice the space of columns ?? */
}

.tile {
  flex: 0 0 calc(33.333% - 0.5rem);
  padding: 0.75rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  text-align: center;
}`,
    themeCSS: `.gallery {
  background: linear-gradient(135deg, #1e1b2e, #282a36 60%, #2d2a3e);
  border: 1px solid #44475a;
  border-radius: 1rem;
}
.tile {
  background: linear-gradient(135deg, #8be9fd, #bd93f9);
  color: #14121f;
  border: 1px solid rgba(248, 248, 242, 0.3);
  border-radius: 0.5rem;
  font-family: ui-monospace, 'JetBrains Mono', monospace;
}`,
    solutions: [
      {
        css: `.gallery {
  width: 100%;
  max-width: 24rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 0.5rem;
}
.tile {
  flex: 0 0 calc(33.333% - 0.5rem);
  padding: 0.75rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  text-align: center;
}`,
        explanation: [
          {
            label: 'div.gallery',
            text: 'The flex container. It already wraps the tiles into two rows, so it has both a horizontal gap (between the tiles of a row) and a vertical gap (between the rows).'
          },
          {
            label: 'gap: 1rem 0.5rem',
            text: 'The two-value shorthand: the first value is <code>row-gap</code> (vertical here) and the second one is <code>column-gap</code> (horizontal here). The rows get twice the space of the columns.'
          },
          {
            label: 'row-gap / column-gap',
            text: 'The long way to write the same thing. <code>row-gap: 1rem; column-gap: 0.5rem;</code> produces exactly the same layout as the shorthand.'
          },
          {
            label: 'flex: 0 0 calc(33.333% - 0.5rem) (.tile)',
            text: 'Already in the starter. Three tiles plus two column gaps must fit exactly in the row, so each tile takes one third of the width minus one gap. The gap value did not change, so the tiles still fit.'
          }
        ],
        tip: 'A single <code>gap</code> value is used on both axes. Two values mean <code>row-gap</code> first and <code>column-gap</code> second. This is the same shortcut pattern as <code>padding: 1rem 2rem</code>, where the first number is vertical and the second is horizontal.'
      }
    ],
    validate(iframe) {
      const doc = iframe.contentDocument
      const win = iframe.contentWindow
      const gallery = doc.querySelector('.gallery')
      const tiles = [...doc.querySelectorAll('.tile')]
      if (!gallery || tiles.length !== 6) return false
      const style = win.getComputedStyle(gallery)
      if (style.display !== 'flex' || style.flexWrap !== 'wrap') return false
      const rowGap = parseFloat(style.rowGap)
      const columnGap = parseFloat(style.columnGap)
      if (!(columnGap > 4 && Math.abs(rowGap - columnGap * 2) < 2)) return false
      if (gallery.scrollWidth > gallery.clientWidth + 3) return false
      const rects = tiles.map(tile => tile.getBoundingClientRect())
      const widths = rects.map(rect => rect.width)
      if (Math.max(...widths) - Math.min(...widths) > 8) return false
      const tops = [...new Set(rects.map(rect => Math.round(rect.top)))].sort((a, b) => a - b)
      if (tops.length !== 2) return false
      const firstRow = rects.filter(rect => Math.abs(rect.top - tops[0]) < 4)
      const secondRow = rects.filter(rect => Math.abs(rect.top - tops[1]) < 4)
      if (firstRow.length !== 3 || secondRow.length !== 3) return false
      const actualGap = Math.min(...secondRow.map(rect => rect.top)) - Math.max(...firstRow.map(rect => rect.bottom))
      return Math.abs(actualGap - rowGap) < 12
    }
  },
  {
    id: 22,
    title: 'Aligning Text Baselines',
    description: 'The three price chips have different text sizes. Line up the bottom of the text instead of the center of the chips.',
    hint: 'Aligning the boxes is not the same as aligning the text inside them. One value of align-items uses the invisible line that the letters sit on.',
    html: `<div class="prices">
   <div class="price price-small"><span class="amount">$5</span></div>
   <div class="price price-medium"><span class="amount">$15</span></div>
   <div class="price price-large"><span class="amount">$30</span></div>
 </div>`,
    starterCSS: `.prices {
  width: 100%;
  max-width: 22rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  /* ?? align the text, not the boxes ?? */
}

.price {
  padding: 0.75rem 1rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
}

.amount { font-weight: bold; line-height: 1; }
.price-small .amount { font-size: 0.9rem; }
.price-medium .amount { font-size: 1.3rem; }
.price-large .amount { font-size: 1.8rem; }`,
    themeCSS: `.prices {
  background: linear-gradient(135deg, #1e1b2e, #282a36 60%, #2d2a3e);
  border: 1px solid #44475a;
  border-radius: 1rem;
}
.price {
  background: linear-gradient(135deg, #8be9fd, #60a5fa 55%, #bd93f9);
  color: #14121f;
  border: 1px solid rgba(248, 248, 242, 0.35);
  border-radius: 0.5rem;
  font-family: ui-monospace, 'JetBrains Mono', monospace;
}`,
    solutions: [
      {
        css: `.prices {
  width: 100%;
  max-width: 22rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
}
.price {
  padding: 0.75rem 1rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
}
.amount { font-weight: bold; line-height: 1; }
.price-small .amount { font-size: 0.9rem; }
.price-medium .amount { font-size: 1.3rem; }
.price-large .amount { font-size: 1.8rem; }`,
        explanation: [
          {
            label: 'div.prices',
            text: 'The flex container. The three chips are flex items, and their texts have deliberately different sizes to make the alignment easy to see.'
          },
          {
            label: 'align-items: center',
            text: 'The value in the starter. It centers the chip boxes on the cross axis, so the small text and the large text end up at different heights.'
          },
          {
            label: 'align-items: baseline',
            text: 'Aligns the invisible line where the letters sit. The chip boxes get different top positions, but the three prices read as one straight line of text.'
          },
          {
            label: 'span.amount',
            text: 'The text inside each chip. The font sizes are different, which is why aligning the boxes and aligning the text give two different results.'
          },
          {
            label: 'gap',
            text: 'Keeps the same distance between the chips. It works the same way no matter which alignment value you choose.'
          }
        ],
        tip: '<code>baseline</code> is the alignment value for text. Use it when items contain text of different sizes, like a price next to a label or a heading next to a small caption. It is a cross-axis value, so it still belongs to <code>align-items</code>.'
      }
    ],
    validate(iframe) {
      const doc = iframe.contentDocument
      const win = iframe.contentWindow
      const prices = doc.querySelector('.prices')
      const chips = [...doc.querySelectorAll('.price')]
      const amounts = [...doc.querySelectorAll('.amount')]
      if (!prices || chips.length !== 3 || amounts.length !== 3) return false
      const style = win.getComputedStyle(prices)
      if (style.display !== 'flex' || style.alignItems !== 'baseline') return false
      const chipRects = chips.map(chip => chip.getBoundingClientRect())
      const chipHeights = chipRects.map(rect => rect.height)
      if (Math.max(...chipHeights) - Math.min(...chipHeights) < 8) return false
      const bottoms = amounts.map(amount => amount.getBoundingClientRect().bottom)
      if (Math.max(...bottoms) - Math.min(...bottoms) > 10) return false
      return chipRects[0].left < chipRects[1].left && chipRects[1].left < chipRects[2].left &&
        chipRects[1].left - chipRects[0].right > 4 && chipRects[2].left - chipRects[1].right > 4
    }
  },
  {
    id: 23,
    title: 'Cards That Stretch',
    description: 'The three cards have different amounts of text, but they must be the same height and each button must sit at the bottom of its card.',
    hint: 'The default cross-axis alignment makes the items fill the height, but the starter overrides it. Then each card needs to become its own column so an automatic margin can push the button down.',
    html: `<div class="cards">
   <div class="card">
     <div class="card-title">Starter</div>
     <div class="card-text">A short description.</div>
     <div class="action">Choose</div>
   </div>
   <div class="card">
     <div class="card-title">Pro</div>
     <div class="card-text">A longer description with two lines of text so this card asks for more room.</div>
     <div class="action">Choose</div>
   </div>
   <div class="card">
     <div class="card-title">Team</div>
     <div class="card-text">Medium description.</div>
     <div class="action">Choose</div>
   </div>
 </div>`,
    starterCSS: `.cards {
  width: 100%;
  max-width: 26rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;

  /* ?? same height for all cards ?? */
}

.card {
  padding: 0.75rem;
  background: white;
  border-radius: 0.5rem;

  /* ?? make the button go to the bottom ?? */
}

.card-title { font-weight: bold; }
.card-text { margin-top: 0.5rem; font-size: 0.85rem; }
.action {
  margin-top: 0.75rem;
  padding: 0.5rem 0.75rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}`,
    themeCSS: `.cards {
  background: linear-gradient(135deg, #1e1b2e, #282a36 60%, #2d2a3e);
  border: 1px solid #44475a;
  border-radius: 1rem;
}
.card {
  background: rgba(248, 248, 242, 0.06);
  border: 1px solid #44475a;
  border-radius: 0.75rem;
}
.card-title { color: #8be9fd; font-family: 'Space Grotesk', sans-serif; }
.card-text { color: #f8f8f2; font-family: ui-monospace, 'JetBrains Mono', monospace; }
.action {
  background: linear-gradient(135deg, #bd93f9, #8be9fd);
  color: #14121f;
  border-radius: 0.5rem;
  font-family: ui-monospace, 'JetBrains Mono', monospace;
}`,
    solutions: [
      {
        css: `.cards {
  width: 100%;
  max-width: 26rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  align-items: stretch;
  gap: 0.75rem;
}
.card {
  padding: 0.75rem;
  background: white;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.card-title { font-weight: bold; }
.card-text { font-size: 0.85rem; }
.action {
  margin-top: auto;
  padding: 0.5rem 0.75rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}`,
        explanation: [
          {
            label: 'div.cards',
            text: 'The flex container. With <code>align-items: flex-start</code> each card had its own natural height, so the row looked uneven.'
          },
          {
            label: 'align-items: stretch',
            text: 'The default flexbox value. Without <code>flex-start</code>, every card fills the height of the tallest one, so all three cards become equal.'
          },
          {
            label: '.card { display: flex; flex-direction: column }',
            text: 'A card is now a flex container too. Its title, text and button stack vertically, which lets flexbox properties work inside the card.'
          },
          {
            label: 'margin-top: auto (.action)',
            text: 'The automatic margin eats all the free space above the button inside the column card. The button is pushed to the bottom, even when the text above it is short.'
          },
          {
            label: 'gap on the card',
            text: 'A fixed minimum space between the title, the text and the button. The automatic margin adds its free space on top of that gap.'
          }
        ],
        tip: 'This is a pattern used by almost every card UI: stretch the cards on the outside, make each card a column on the inside, then use <code>margin-top: auto</code> on the last element. The result looks like a grid, but it is only nested flexbox.'
      }
    ],
    validate(iframe) {
      const doc = iframe.contentDocument
      const win = iframe.contentWindow
      const cardsRow = doc.querySelector('.cards')
      const cards = [...doc.querySelectorAll('.card')]
      if (!cardsRow || cards.length !== 3) return false
      const rowStyle = win.getComputedStyle(cardsRow)
      if (rowStyle.display !== 'flex' || rowStyle.alignItems !== 'stretch') return false
      const cardStyle = win.getComputedStyle(cards[0])
      if (cardStyle.display !== 'flex' || cardStyle.flexDirection !== 'column') return false
      const heights = cards.map(card => card.getBoundingClientRect().height)
      if (Math.max(...heights) - Math.min(...heights) > 6) return false
      for (const card of cards) {
        const action = card.querySelector('.action')
        if (!action) return false
        const cardRect = card.getBoundingClientRect()
        const style = win.getComputedStyle(card)
        const innerBottom = cardRect.bottom - card.clientTop - parseFloat(style.paddingBottom)
        if (Math.abs(action.getBoundingClientRect().bottom - innerBottom) > 10) return false
      }
      return true
    }
  },
  {
    id: 24,
    title: 'Boss: The Profile Widget',
    description: 'Assemble the profile card with four World 6 ideas: the header lines up text baselines, the tags wrap into two rows with twice as much row gap as column gap, the two stats stretch to equal height, and the status is pushed right inside the nested header.',
    hint: 'The header needs a text alignment instead of a box alignment and an automatic margin on the status. The tags need wrapping and two gap values. The stats need the default stretch value instead of flex-start.',
    html: `<div class="profile">
  <div class="header">
    <div class="avatar">A</div>
    <div class="name">Ada Lovelace</div>
    <div class="status">Online</div>
  </div>
  <div class="bio">Writes about layouts, flexbox and accessible interfaces. This text makes the card taller.</div>
  <div class="stats">
    <div class="stat">12 quests</div>
    <div class="stat">A longer statistic that asks for more room than the other one</div>
  </div>
  <div class="footer">
    <div class="tags"><span>CSS</span><span>Flex</span><span>Grid</span><span>HTML</span></div>
    <div class="edit">Edit</div>
  </div>
</div>`,
    starterCSS: `.profile {
  width: 100%;
  max-width: 24rem;
  min-height: 17rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.header {
  align-items: center;
  gap: 0.75rem;

  /* ?? make a row, align the text and push the status right ?? */
}

.avatar {
  padding: 0.75rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}

.name { font-weight: bold; font-size: 1.05rem; }
.status {
  padding: 0.35rem 0.6rem;
  font-size: 0.75rem;
  background: #50fa7b;
  color: #14121f;
  border-radius: 999px;
  font-weight: bold;

  /* ?? push the status to the right ?? */
}

.bio {
  flex: 1;
  padding: 0.75rem;
  background: white;
  border-radius: 0.5rem;
}

.stats {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  /* ?? give both boxes the same height ?? */
}

.stat {
  flex: 1;
  padding: 0.6rem;
  background: white;
  border-radius: 0.5rem;
  font-weight: bold;
}

.footer {
  gap: 0.5rem;
  align-items: center;

  /* ?? tags left, edit right ?? */
}

.tags {
  display: flex;
  flex-wrap: wrap;
  max-width: 9rem;
  gap: 0.35rem;

  /* ?? rows need twice the column space ?? */
}

.tags span {
  padding: 0.25rem 0.5rem;
  background: #e2e8f0;
  border-radius: 999px;
  font-weight: bold;
}

.edit {
  padding: 0.35rem 0.6rem;
  background: #8b5cf6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}`,
    themeCSS: `.profile {
  background: linear-gradient(135deg, #1e1b2e, #282a36 60%, #2d2a3e);
  border: 1px solid rgba(255, 121, 198, 0.45);
  border-radius: 1rem;
  box-shadow: 0 0 36px rgba(255, 121, 198, 0.12);
}
.header, .footer {
  background: rgba(248, 248, 242, 0.06);
  border: 1px solid #44475a;
  border-radius: 0.75rem;
}
.avatar { background: linear-gradient(135deg, #8be9fd, #60a5fa); color: #14121f; }
.name, .bio { color: #f8f8f2; font-family: ui-monospace, 'JetBrains Mono', monospace; }
.bio { background: rgba(139, 233, 253, 0.06); border: 1px solid #44475a; }
.tags span { background: rgba(189, 147, 249, 0.18); color: #f8f8f2; }
.edit { background: linear-gradient(135deg, #bd93f9, #8be9fd); color: #14121f; }`,
    solutions: [
      {
        css: `.profile {
  width: 100%;
  max-width: 24rem;
  min-height: 17rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.header {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
}
.avatar { padding: 0.75rem; background: #3b82f6; color: white; border-radius: 0.5rem; font-weight: bold; }
.name { font-weight: bold; font-size: 1.05rem; }
.status {
  margin-left: auto;
  padding: 0.35rem 0.6rem;
  font-size: 0.75rem;
  background: #50fa7b;
  color: #14121f;
  border-radius: 999px;
  font-weight: bold;
}
.bio { flex: 1; padding: 0.75rem; background: white; border-radius: 0.5rem; }
.stats { display: flex; align-items: stretch; gap: 0.5rem; }
.stat { flex: 1; padding: 0.6rem; background: white; border-radius: 0.5rem; font-weight: bold; }
.footer {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  align-items: center;
}
.tags { display: flex; flex-wrap: wrap; max-width: 9rem; gap: 0.7rem 0.35rem; }
.tags span { padding: 0.25rem 0.5rem; background: #e2e8f0; border-radius: 999px; font-weight: bold; }
.edit { padding: 0.35rem 0.6rem; background: #8b5cf6; color: white; border-radius: 0.5rem; font-weight: bold; }`,
        explanation: [
          { label: 'display: flex (.header and .footer)', text: 'From level 12: both sections become flex containers, so their gap and alignment values finally work.' },
          { label: 'align-items: baseline (.header)', text: 'From level 22: the name and the status have different font sizes, so aligning the text baselines looks correct instead of centering the boxes.' },
          { label: 'margin-left: auto (.status)', text: 'From level 17: the automatic margin eats the free space and keeps the status at the right edge.' },
          { label: 'align-items: stretch (.stats)', text: 'From level 23: the default value makes both stat boxes as tall as the taller one.' },
          { label: 'flex-wrap: wrap + gap: 0.7rem 0.35rem (.tags)', text: 'From levels 21 and 13: the four pills wrap into two rows and the row gap is twice the column gap.' },
          { label: 'justify-content: space-between (.footer)', text: 'The tags stay on the left and the edit button on the right in this nested row.' }
        ],
        tip: 'Bosses reuse small tricks: baseline for text, two gap values for wrapped items, stretch for equal heights and an automatic margin for the one item that belongs at the edge.'
      }
    ],
    validate(iframe) {
      const doc = iframe.contentDocument
            const win = iframe.contentWindow
            const profile = doc.querySelector('.profile')
            const header = doc.querySelector('.header')
            const name = doc.querySelector('.name')
            const status = doc.querySelector('.status')
            const stats = doc.querySelector('.stats')
            const statEls = [...doc.querySelectorAll('.stat')]
            const footer = doc.querySelector('.footer')
            const tags = doc.querySelector('.tags')
            const edit = doc.querySelector('.edit')
            if (!profile || !header || !name || !status || !stats || statEls.length !== 2 || !footer || !tags || !edit) return false
      
            const profileStyle = win.getComputedStyle(profile)
            const headerStyle = win.getComputedStyle(header)
            const tagsStyle = win.getComputedStyle(tags)
            const statsStyle = win.getComputedStyle(stats)
            const footerStyle = win.getComputedStyle(footer)
            if (profileStyle.display !== 'flex' || profileStyle.flexDirection !== 'column') return false
            if (headerStyle.display !== 'flex' || headerStyle.alignItems !== 'baseline') return false
            if (statsStyle.display !== 'flex' || statsStyle.alignItems !== 'stretch') return false
            if (footerStyle.display !== 'flex' || footerStyle.justifyContent !== 'space-between') return false
            if (tagsStyle.display !== 'flex' || tagsStyle.flexWrap !== 'wrap') return false
            const rowGap = parseFloat(tagsStyle.rowGap)
            const columnGap = parseFloat(tagsStyle.columnGap)
            if (!(columnGap > 4 && Math.abs(rowGap - columnGap * 2) < 2)) return false
            if (parseFloat(win.getComputedStyle(status).marginLeft) <= 0) return false
      
            const nameRect = name.getBoundingClientRect()
            const statusRect = status.getBoundingClientRect()
            const headerRight = header.getBoundingClientRect().right - header.clientLeft - parseFloat(headerStyle.paddingRight)
            if (Math.abs(headerRight - statusRect.right) > 12) return false
      
            const statRects = statEls.map(stat => stat.getBoundingClientRect())
            if (Math.abs(statRects[0].height - statRects[1].height) > 6) return false
            const tagRects = [...tags.querySelectorAll('span')].map(tag => tag.getBoundingClientRect())
            const rows = new Set(tagRects.map(rect => Math.round(rect.top)))
            if (rows.size !== 2) return false
      
            const footerRect = footer.getBoundingClientRect()
            const footerRight = footerRect.right - footer.clientLeft - parseFloat(footerStyle.paddingRight)
            if (tags.getBoundingClientRect().left - footerRect.left > 20) return false
            if (Math.abs(footerRight - edit.getBoundingClientRect().right) > 12) return false
            const profileRect = profile.getBoundingClientRect()
            const profileBottom = profileRect.bottom - profile.clientTop - parseFloat(profileStyle.paddingBottom)
            if (Math.abs(profileBottom - footerRect.bottom) > 12) return false
            return profile.scrollHeight <= profile.clientHeight + 3
      
    }
  },
  {
    id: 25,
    title: 'Wrapping into Columns',
    description: 'The six items are stacked in one tall column and overflow the panel. Make them flow into two columns and spread those columns from the left edge to the right edge.',
    hint: 'The main axis can be vertical. If you wrap a column, the items form new columns instead of new rows, and align-content distributes those columns.',
    html: `<div class="panel">
   <div class="item">Item 1</div>
   <div class="item">Item 2</div>
   <div class="item">Item 3</div>
   <div class="item">Item 4</div>
   <div class="item">Item 5</div>
   <div class="item">Item 6</div>
 </div>`,
    starterCSS: `.panel {
  width: 100%;
  max-width: 26rem;
  height: 11rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  /* ?? wrap into columns and spread them ?? */
}

.item {
  padding: 0.6rem 0.75rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}`,
    themeCSS: `.panel {
  background: linear-gradient(135deg, #1e1b2e, #282a36 60%, #2d2a3e);
  border: 1px solid #44475a;
  border-radius: 1rem;
}
.item {
  background: linear-gradient(135deg, #50fa7b, #8be9fd);
  color: #14121f;
  border-radius: 0.5rem;
  font-family: ui-monospace, 'JetBrains Mono', monospace;
}`,
    solutions: [
      {
        css: `.panel {
  width: 100%;
  max-width: 26rem;
  height: 11rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: space-between;
  gap: 0.5rem;
}
.item {
  padding: 0.6rem 0.75rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}`,
        explanation: [
          {
            label: 'div.panel',
            text: 'The flex container. Its direction is <code>column</code>, so the main axis is vertical and the six items do not fit in the fixed height.'
          },
          {
            label: 'flex-wrap: wrap',
            text: 'In a column the items wrap into <strong>columns</strong> instead of rows. The first three fill the left column and the next three start a new one.'
          },
          {
            label: 'align-content: space-between',
            text: 'After wrapping, there are two lines (two columns). <code>align-content</code> distributes those lines on the cross axis, which is horizontal here, so the first column goes left and the last one goes right.'
          },
          {
            label: 'height vs min-height',
            text: 'A fixed <code>height</code> is what forces the wrap: the items have nowhere else to go. With <code>min-height</code> the panel would simply grow and no wrap would happen.'
          }
        ],
        tip: 'Wrapping follows the main axis: a row wraps into rows, a column wraps into columns. The properties keep their names but change their visual direction, so always ask first: which way is the main axis pointing?'
      }
    ],
    validate(iframe) {
      const doc = iframe.contentDocument
      const win = iframe.contentWindow
      const panel = doc.querySelector('.panel')
      const items = [...doc.querySelectorAll('.item')]
      if (!panel || items.length !== 6) return false
      const style = win.getComputedStyle(panel)
      if (style.display !== 'flex' || style.flexDirection !== 'column' || style.flexWrap !== 'wrap') return false
      if (style.alignContent !== 'space-between') return false
      if (panel.scrollHeight > panel.clientHeight + 3) return false
      const rects = items.map(item => item.getBoundingClientRect()).sort((a, b) => a.left - b.left)
      const columns = []
      for (const rect of rects) {
        const last = columns[columns.length - 1]
        if (last && Math.abs(rect.left - last.left) < 8) last.rects.push(rect)
        else columns.push({ left: rect.left, rects: [rect] })
      }
      if (columns.length !== 2) return false
      if (columns[0].rects.length !== 3 || columns[1].rects.length !== 3) return false
      const panelRect = panel.getBoundingClientRect()
      const contentLeft = panelRect.left + panel.clientLeft + parseFloat(style.paddingLeft)
      const contentRight = panelRect.right - panel.clientLeft - parseFloat(style.paddingRight)
      const rightEdge = Math.max(...columns[1].rects.map(rect => rect.right))
      return Math.abs(columns[0].left - contentLeft) < 12 && Math.abs(contentRight - rightEdge) < 12
    }
  },
  {
    id: 26,
    title: 'The Modal That Fits',
    description: 'The modal body is too tall and pushes the footer out of the card. Make the body take the remaining height, scroll inside it, and keep the header and the footer visible.',
    hint: 'In a column flex container a child can grow with flex: 1. To let it actually become smaller than its content, its minimum size on that axis also has to be zero: the vertical version of the long-label trick.',
    html: `<div class="modal">
   <div class="modal-header">Terms of use</div>
   <div class="modal-body">A very long paragraph that keeps going and going. Flexbox items refuse to be smaller than their content by default, so this text needs permission to be clipped into a scroll area. Here is another sentence to make sure the content is taller than the modal.</div>
   <div class="modal-footer">Close</div>
 </div>`,
    starterCSS: `.modal {
  width: 100%;
  max-width: 22rem;
  height: 14rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.modal-header {
  padding: 0.5rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}

.modal-body {
  padding: 0.75rem;
  background: white;
  border-radius: 0.5rem;

  /* ?? grow, allow shrinking and scroll inside ?? */
}

.modal-footer {
  padding: 0.5rem;
  background: #8b5cf6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  text-align: center;
}`,
    themeCSS: `.modal {
  background: linear-gradient(135deg, #1e1b2e, #282a36 60%, #2d2a3e);
  border: 1px solid #44475a;
  border-radius: 1rem;
}
.modal-header { background: linear-gradient(135deg, #8be9fd, #60a5fa); color: #14121f; }
.modal-body { background: rgba(248, 248, 242, 0.06); color: #f8f8f2; border: 1px solid #44475a; font-family: ui-monospace, 'JetBrains Mono', monospace; font-size: 0.8rem; }
.modal-footer { background: linear-gradient(135deg, #bd93f9, #8be9fd); color: #14121f; }`,
    solutions: [
      {
        css: `.modal {
  width: 100%;
  max-width: 22rem;
  height: 14rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.modal-header {
  padding: 0.5rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}
.modal-body {
  flex: 1;
  min-height: 0;
  overflow: auto;
  padding: 0.75rem;
  background: white;
  border-radius: 0.5rem;
}
.modal-footer {
  padding: 0.5rem;
  background: #8b5cf6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  text-align: center;
}`,
        explanation: [
          {
            label: 'div.modal',
            text: 'A column flex container with a fixed height. The header and the footer have their natural size, so the body has to live with whatever height is left.'
          },
          {
            label: 'flex: 1 (.modal-body)',
            text: 'Makes the body grow into the free space of the column. This gives the middle section all the height that the header and footer do not use.'
          },
          {
            label: 'min-height: 0 (.modal-body)',
            text: 'A flex item has <code>min-height: auto</code> by default, which means it refuses to become shorter than its content. Setting it to zero lets the body be smaller than the long paragraph.'
          },
          {
            label: 'overflow: auto',
            text: 'Once the body is smaller than its content, the extra text needs somewhere to go. <code>auto</code> adds a scrollbar only when it is needed.'
          },
          {
            label: 'modal footer',
            text: 'Because the body stops growing at the available height, the footer stays inside the modal and keeps its own natural size.'
          }
        ],
        tip: 'This is the vertical version of the long-label fix: <code>flex: 1</code> to take the space, <code>min-height: 0</code> to allow shrinking below the content, and <code>overflow: auto</code> to scroll. You will see this exact trio in real modals and sidebars.'
      }
    ],
    validate(iframe) {
      const doc = iframe.contentDocument
      const win = iframe.contentWindow
      const modal = doc.querySelector('.modal')
      const body = doc.querySelector('.modal-body')
      const footer = doc.querySelector('.modal-footer')
      if (!modal || !body || !footer) return false
      const modalStyle = win.getComputedStyle(modal)
      const bodyStyle = win.getComputedStyle(body)
      if (modalStyle.display !== 'flex' || modalStyle.flexDirection !== 'column') return false
      if (parseFloat(bodyStyle.minHeight) !== 0) return false
      if (bodyStyle.overflowY !== 'auto') return false
      if (body.scrollHeight <= body.clientHeight + 5) return false
      const modalRect = modal.getBoundingClientRect()
      const modalBottom = modalRect.bottom - modal.clientTop - parseFloat(modalStyle.paddingBottom)
      if (Math.abs(footer.getBoundingClientRect().bottom - modalBottom) > 12) return false
      return modal.scrollHeight <= modal.clientHeight + 3 && body.getBoundingClientRect().height > 40
    }
  },
  {
    id: 27,
    title: 'Newest Message on Top',
    description: 'The messages are stored in chronological order in the HTML, but the chat should show the newest one at the top and keep every message aligned to the right.',
    hint: 'You can flip the main axis of a column. The first HTML item then goes to the bottom and the last one to the top; align-items still controls the other axis.',
    html: `<div class="chat">
   <div class="message">Message 1</div>
   <div class="message">Message 2</div>
   <div class="message">Message 3</div>
   <div class="message">Message 4 (newest)</div>
 </div>`,
    starterCSS: `.chat {
  width: 100%;
  max-width: 20rem;
  min-height: 14rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  gap: 0.5rem;

  /* ?? newest first, messages on the right ?? */
}

.message {
  padding: 0.5rem 0.75rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}`,
    themeCSS: `.chat {
  background: linear-gradient(135deg, #1e1b2e, #282a36 60%, #2d2a3e);
  border: 1px solid #44475a;
  border-radius: 1rem;
}
.message {
  background: linear-gradient(135deg, #8be9fd, #60a5fa);
  color: #14121f;
  border-radius: 0.5rem;
  font-family: ui-monospace, 'JetBrains Mono', monospace;
}
.message:last-child { background: linear-gradient(135deg, #bd93f9, #ff79c6); color: #f8f8f2; }`,
    solutions: [
      {
        css: `.chat {
  width: 100%;
  max-width: 20rem;
  min-height: 14rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  gap: 0.5rem;
}
.message {
  padding: 0.5rem 0.75rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}`,
        explanation: [
          {
            label: 'div.chat',
            text: 'The flex container. The HTML order is the real time order: Message 1 is the oldest and Message 4 is the newest.'
          },
          {
            label: 'flex-direction: column-reverse',
            text: 'Flips the main axis vertically. The start of the column is now at the bottom, so the first HTML item is drawn at the bottom and the last one at the top.'
          },
          {
            label: 'align-items: flex-end',
            text: 'The cross axis of a column is horizontal. <code>flex-end</code> sends every message to the right side of the chat.'
          },
          {
            label: 'gap',
            text: 'The gap is still measured in visual order, so the messages keep an even distance even though the column is reversed.'
          },
          {
            label: 'justify-content',
            text: 'The default <code>flex-start</code> now means the bottom of the chat, so all messages stay together at the bottom instead of floating apart.'
          }
        ],
        tip: '<code>column-reverse</code> and <code>row-reverse</code> flip the whole main axis; <code>order</code> moves single items. Both change only the picture: the HTML and the screen-reader order are still the original chronological order.'
      }
    ],
    validate(iframe) {
      const doc = iframe.contentDocument
      const win = iframe.contentWindow
      const chat = doc.querySelector('.chat')
      const messages = [...doc.querySelectorAll('.message')]
      if (!chat || messages.length !== 4) return false
      const style = win.getComputedStyle(chat)
      if (style.display !== 'flex' || style.flexDirection !== 'column-reverse' || style.alignItems !== 'flex-end') return false
      const rects = messages.map(message => message.getBoundingClientRect())
      if (!(rects[3].bottom < rects[0].top)) return false
      const chatRect = chat.getBoundingClientRect()
      const contentRight = chatRect.right - chat.clientLeft - parseFloat(style.paddingRight)
      return rects.every(rect => Math.abs(contentRight - rect.right) < 12)
    }
  },
  {
    id: 28,
    title: 'Boss: The Pricing Table',
    description: 'World 7 finale. The featured plan fills the first row and the other four form two columns with a larger row gap. Inside it, six perks wrap into two vertical columns spread apart, and below the plans a chat-like update list shows the newest message on top, right aligned.',
    hint: 'Keep the row wrapping, order and calc() from earlier worlds. Then add a fixed-height column with flex-wrap for the perks, and a reversed column with end alignment for the updates.',
    html: `<div class="catalog">
  <div class="plans">
    <div class="plan plan-featured">
      <div class="plan-name">Pro (featured)</div>
      <div class="perks">
        <div class="perk">One</div>
        <div class="perk">Two</div>
        <div class="perk">Three</div>
        <div class="perk">Four</div>
        <div class="perk">Five</div>
        <div class="perk">Six</div>
      </div>
    </div>
    <div class="plan">Basic</div>
    <div class="plan">Team</div>
    <div class="plan">Plus</div>
    <div class="plan">Max</div>
  </div>
  <div class="updates">
    <div class="update">Update 1</div>
    <div class="update">Update 2</div>
    <div class="update">Update 3 (newest)</div>
  </div>
</div>`,
    starterCSS: `.catalog {
  width: 100%;
  max-width: 26rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.plans {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  /* ?? larger row gap and spread the rows ?? */
}

.plan {
  padding: 0.75rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  text-align: center;

  /* ?? two plans per row ?? */
}

.plan-featured {
  background: #8b5cf6;

  /* ?? first row, full width, then stack its content ?? */
}

.plan-name { font-weight: bold; }

.perks {
  height: 8rem;
  gap: 0.35rem;

  /* ?? wrap into two vertical columns spread apart ?? */
}

.perk {
  padding: 0.4rem 0.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.35rem;
  font-weight: bold;
}

.updates {
  min-height: 6rem;
  gap: 0.35rem;

  /* ?? newest first, messages on the right ?? */
}

.update {
  padding: 0.4rem 0.6rem;
  background: #8b5cf6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}`,
    themeCSS: `.plans {
  background: radial-gradient(circle at 50% 30%, rgba(189, 147, 249, 0.18), transparent 60%), linear-gradient(135deg, #1e1b2e, #282a36 60%, #2d2a3e);
  border: 1px solid rgba(255, 121, 198, 0.45);
  border-radius: 1rem;
  box-shadow: 0 0 40px rgba(255, 121, 198, 0.12);
}
.plan {
  background: linear-gradient(135deg, #8be9fd, #60a5fa);
  color: #14121f;
  border: 1px solid rgba(248, 248, 242, 0.3);
  border-radius: 0.5rem;
  font-family: ui-monospace, 'JetBrains Mono', monospace;
}
.plan-featured { background: linear-gradient(135deg, #ff79c6, #bd93f9); color: #f8f8f2; }`,
    solutions: [
      {
        css: `.catalog {
  width: 100%;
  max-width: 26rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.plans {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 0.5rem;
  align-content: space-between;
}
.plan {
  flex: 0 0 calc(50% - 0.25rem);
  padding: 0.75rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  text-align: center;
}
.plan-featured {
  order: -1;
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: #8b5cf6;
}
.plan-name { font-weight: bold; }
.perks {
  height: 8rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: space-between;
  gap: 0.35rem;
}
.perk {
  padding: 0.4rem 0.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.35rem;
  font-weight: bold;
}
.updates {
  min-height: 6rem;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  gap: 0.35rem;
}
.update {
  padding: 0.4rem 0.6rem;
  background: #8b5cf6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}`,
        explanation: [
          { label: 'display: flex (.plans)', text: 'The plan cards wrap into rows: one full-width featured row and two rows of two cards.' },
          { label: 'gap: 1rem 0.5rem + align-content: space-between', text: 'The rows are farther apart than the columns and spread across the available height.' },
          { label: 'order: -1 and flex-basis: 100% (.plan-featured)', text: 'The featured card owns the whole first row, and order guarantees it stays first.' },
          { label: 'display: flex (.plan-featured)', text: 'The featured card is a nested column, so the name and the perks stack inside it.' },
          { label: 'flex-direction: column + flex-wrap: wrap (.perks)', text: 'From level 25: the fixed height forces six perks to wrap into two vertical columns.' },
          { label: 'align-content: space-between (.perks)', text: 'The two perk columns are pushed to the left and right edges of the featured card.' },
          { label: 'flex-direction: column-reverse + align-items: flex-end (.updates)', text: 'From level 27: the newest update is drawn on top and every message is aligned to the right.' }
        ],
        tip: 'Wrapping follows the main axis: rows for a row container, columns for a column container. Reverse a column when the newest item has to be on top.'
      }
    ],
    validate(iframe) {
      const doc = iframe.contentDocument
            const win = iframe.contentWindow
            const catalog = doc.querySelector('.catalog')
            const plans = doc.querySelector('.plans')
            const all = [...doc.querySelectorAll('.plan')]
            const featured = doc.querySelector('.plan-featured')
            const perks = doc.querySelector('.perks')
            const perkEls = [...doc.querySelectorAll('.perk')]
            const updates = doc.querySelector('.updates')
            const updateEls = [...doc.querySelectorAll('.update')]
            if (!catalog || !plans || all.length !== 5 || !featured || !perks || perkEls.length !== 6 || !updates || updateEls.length !== 3) return false
      
            const plansStyle = win.getComputedStyle(plans)
            const featuredStyle = win.getComputedStyle(featured)
            const perksStyle = win.getComputedStyle(perks)
            const updatesStyle = win.getComputedStyle(updates)
            if (plansStyle.display !== 'flex' || plansStyle.flexWrap !== 'wrap') return false
            if (plansStyle.alignContent !== 'space-between') return false
            const rowGap = parseFloat(plansStyle.rowGap)
            const columnGap = parseFloat(plansStyle.columnGap)
            if (!(columnGap > 4 && rowGap > columnGap + 4)) return false
            if (plans.scrollWidth > plans.clientWidth + 3) return false
            if (featuredStyle.display !== 'flex' || featuredStyle.flexDirection !== 'column') return false
            if (perksStyle.display !== 'flex' || perksStyle.flexDirection !== 'column' || perksStyle.flexWrap !== 'wrap') return false
            if (perksStyle.alignContent !== 'space-between') return false
            if (updatesStyle.display !== 'flex' || updatesStyle.flexDirection !== 'column-reverse' || updatesStyle.alignItems !== 'flex-end') return false
      
            const planRect = plans.getBoundingClientRect()
            const contentLeft = planRect.left + plans.clientLeft + parseFloat(plansStyle.paddingLeft)
            const contentRight = planRect.right - plans.clientLeft - parseFloat(plansStyle.paddingRight)
            const contentTop = planRect.top + plans.clientTop + parseFloat(plansStyle.paddingTop)
            const featuredRect = featured.getBoundingClientRect()
            if (Math.abs(featuredRect.width - (contentRight - contentLeft)) > 12) return false
            if (Math.abs(featuredRect.top - contentTop) > 12) return false
            const others = all.filter(plan => plan !== featured).map(plan => plan.getBoundingClientRect())
            const widths = others.map(rect => rect.width)
            if (Math.max(...widths) - Math.min(...widths) > 8) return false
            if (Math.abs(widths[0] - (contentRight - contentLeft - columnGap) / 2) > 12) return false
            const tops = [...new Set(others.map(rect => Math.round(rect.top)))].sort((a, b) => a - b)
            if (tops.length !== 2) return false
            if (others.filter(rect => Math.abs(rect.top - tops[0]) < 4).length !== 2) return false
            if (others.filter(rect => Math.abs(rect.top - tops[1]) < 4).length !== 2) return false
      
            const perkRects = perkEls.map(perk => perk.getBoundingClientRect())
            const perkColumns = []
            for (const rect of perkRects) {
              const last = perkColumns[perkColumns.length - 1]
              if (last && Math.abs(rect.left - last[0].left) < 8) last.push(rect)
              else perkColumns.push([rect])
            }
            if (perkColumns.length !== 2 || perkColumns.some(column => column.length !== 3)) return false
            const perksRect = perks.getBoundingClientRect()
            const perksLeft = perksRect.left + perks.clientLeft + parseFloat(perksStyle.paddingLeft)
            const perksRight = perksRect.right - perks.clientLeft - parseFloat(perksStyle.paddingRight)
            const perkLefts = perkColumns.map(column => column[0].left).sort((a, b) => a - b)
            if (Math.abs(perkLefts[0] - perksLeft) > 12) return false
            if (Math.abs(perksRight - Math.max(...perkRects.map(rect => rect.right))) > 12) return false
      
            const updateRects = updateEls.map(update => update.getBoundingClientRect())
            if (!(updateRects[2].bottom < updateRects[0].top)) return false
            const updatesRight = updates.getBoundingClientRect().right - updates.clientLeft - parseFloat(updatesStyle.paddingRight)
            return updateRects.every(rect => Math.abs(updatesRight - rect.right) < 12)
    }
  },
  {
    id: 29,
    title: 'The Editor Workspace',
    description: 'Build the editor workspace: a header with the title on the left and the buttons on the right, a fixed file rail, a code area that grows once, a preview area that grows twice as much, and a status bar at the bottom.',
    hint: 'Four layers again: the page is a column, the header is a row, the middle row has to eat the free height, and inside that row the two panes share the remaining width in a 1 to 2 ratio.',
    html: `<div class="workspace">
   <header class="bar">
     <div class="title">CSS Quest Editor</div>
     <div class="tools"><span>Save</span><span>Run</span></div>
   </header>
   <div class="main">
     <aside class="rail">Files</aside>
     <div class="code">Code editor</div>
     <div class="preview">Live preview</div>
   </div>
   <footer class="status">Ready</footer>
 </div>`,
    starterCSS: `.workspace {
  width: 100%;
  max-width: 26rem;
  min-height: 20rem;
  padding: 0.75rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.bar {
  gap: 0.5rem;
  align-items: center;
  padding: 0.5rem;
  background: white;
  border-radius: 0.5rem;

  /* ?? title left, tools right ?? */
}

.title { font-weight: bold; }
.tools { display: flex; gap: 0.35rem; }
.tools span { padding: 0.25rem 0.5rem; background: #e2e8f0; border-radius: 0.35rem; font-weight: bold; }

.main {
  display: flex;
  gap: 0.5rem;

  /* ?? fill the free height of the workspace ?? */
}

.rail {
  flex: 0 0 25%;
  padding: 0.75rem;
  background: #8b5cf6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}

.code {
  padding: 0.75rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;

  /* ?? one share of the remaining width ?? */
}

.preview {
  padding: 0.75rem;
  background: #10b981;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;

  /* ?? two shares of the remaining width ?? */
}

.status {
  padding: 0.5rem;
  background: #1e293b;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}`,
    themeCSS: `.workspace {
  background: linear-gradient(135deg, #1e1b2e, #282a36 60%, #2d2a3e);
  border: 1px solid #44475a;
  border-radius: 1rem;
}
.bar { background: rgba(248, 248, 242, 0.06); border: 1px solid #44475a; border-radius: 0.75rem; }
.title { color: #8be9fd; font-family: 'Space Grotesk', sans-serif; }
.tools span { background: rgba(189, 147, 249, 0.18); color: #f8f8f2; font-family: ui-monospace, 'JetBrains Mono', monospace; }
.rail { background: linear-gradient(160deg, #6d28d9, #4c1d95); border-radius: 0.5rem; font-family: ui-monospace, 'JetBrains Mono', monospace; }
.code { background: linear-gradient(160deg, #1d4ed8, #1e3a8a); border-radius: 0.5rem; font-family: ui-monospace, 'JetBrains Mono', monospace; }
.preview { background: linear-gradient(160deg, #0f766e, #115e59); border-radius: 0.5rem; font-family: ui-monospace, 'JetBrains Mono', monospace; }
.status { background: rgba(80, 250, 123, 0.12); color: #50fa7b; border: 1px solid rgba(80, 250, 123, 0.35); border-radius: 0.5rem; font-family: ui-monospace, 'JetBrains Mono', monospace; }`,
    solutions: [
      {
        css: `.workspace {
  width: 100%;
  max-width: 26rem;
  min-height: 20rem;
  padding: 0.75rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.bar {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  align-items: center;
  padding: 0.5rem;
  background: white;
  border-radius: 0.5rem;
}
.title { font-weight: bold; }
.tools { display: flex; gap: 0.35rem; }
.tools span { padding: 0.25rem 0.5rem; background: #e2e8f0; border-radius: 0.35rem; font-weight: bold; }
.main {
  display: flex;
  flex: 1;
  gap: 0.5rem;
}
.rail { flex: 0 0 25%; padding: 0.75rem; background: #8b5cf6; color: white; border-radius: 0.5rem; font-weight: bold; }
.code { flex: 1; padding: 0.75rem; background: #3b82f6; color: white; border-radius: 0.5rem; font-weight: bold; }
.preview { flex: 2; padding: 0.75rem; background: #10b981; color: white; border-radius: 0.5rem; font-weight: bold; }
.status { padding: 0.5rem; background: #1e293b; color: white; border-radius: 0.5rem; font-weight: bold; }`,
        explanation: [
          {
            label: '.bar { display: flex; justify-content: space-between }',
            text: 'The header is a row. <code>space-between</code> keeps the title at the left content edge and the tools group at the right content edge.'
          },
          {
            label: '.main { flex: 1 }',
            text: 'Inside the page column this makes the middle row grow into all the free height. The status bar is then pushed down to the bottom.'
          },
          {
            label: '.rail { flex: 0 0 25% }',
            text: 'Already in the starter. The file rail keeps a quarter of the main row and does not grow or shrink with the two panes.'
          },
          {
            label: 'flex: 1 and flex: 2',
            text: 'After the rail and the two gaps, the remaining width is split into three equal shares. The code pane gets one and the preview gets two, so the preview is twice as wide.'
          },
          {
            label: 'div.tools',
            text: 'A nested flex container. Its own gap keeps Save and Run together while the header moves the whole group to the right.'
          }
        ],
        tip: 'This is the app shell from level 20 plus proportional widths. Use <code>flex: 0 0 &lt;size&gt;</code> for parts that must keep their size and growing numbers like <code>1</code> and <code>2</code> for the parts that share what is left.'
      }
    ],
    validate(iframe) {
      const doc = iframe.contentDocument
      const win = iframe.contentWindow
      const workspace = doc.querySelector('.workspace')
      const bar = doc.querySelector('.bar')
      const title = doc.querySelector('.title')
      const tools = doc.querySelector('.tools')
      const main = doc.querySelector('.main')
      const rail = doc.querySelector('.rail')
      const code = doc.querySelector('.code')
      const preview = doc.querySelector('.preview')
      const status = doc.querySelector('.status')
      if (!workspace || !bar || !title || !tools || !main || !rail || !code || !preview || !status) return false
      const workspaceStyle = win.getComputedStyle(workspace)
      const barStyle = win.getComputedStyle(bar)
      const mainStyle = win.getComputedStyle(main)
      if (workspaceStyle.display !== 'flex' || workspaceStyle.flexDirection !== 'column') return false
      if (barStyle.display !== 'flex' || barStyle.justifyContent !== 'space-between') return false
      if (mainStyle.display !== 'flex' || parseFloat(mainStyle.flexGrow) < 1) return false
      const barRect = bar.getBoundingClientRect()
      const barRight = barRect.right - bar.clientLeft - parseFloat(barStyle.paddingRight)
      const titleRect = title.getBoundingClientRect()
      const toolsRect = tools.getBoundingClientRect()
      if (titleRect.left - barRect.left > 20) return false
      if (Math.abs(barRight - toolsRect.right) > 12) return false
      const mainRect = main.getBoundingClientRect()
      const contentWidth = main.clientWidth - parseFloat(mainStyle.paddingLeft) - parseFloat(mainStyle.paddingRight)
      const railRect = rail.getBoundingClientRect()
      const codeRect = code.getBoundingClientRect()
      const previewRect = preview.getBoundingClientRect()
      if (Math.abs(railRect.width - contentWidth * 0.25) > 12) return false
      if (!(previewRect.width > codeRect.width * 1.7 && previewRect.width < codeRect.width * 2.3)) return false
      if (codeRect.left < railRect.right - 2 || previewRect.left < codeRect.right - 2) return false
      const workspaceRect = workspace.getBoundingClientRect()
      const workspaceBottom = workspaceRect.bottom - workspace.clientTop - parseFloat(workspaceStyle.paddingBottom)
      if (Math.abs(workspaceBottom - status.getBoundingClientRect().bottom) > 12) return false
      return workspace.scrollHeight <= workspace.clientHeight + 3
    }
  },
  {
    id: 30,
    title: 'Boss: The Complete Page',
    description: 'Final boss. Build one page that uses the whole game: a reversed nav in a spread topbar, a growing hero with a fixed file rail and code and preview panes in a 1 to 2 ratio, four wrapped cards with half-sized edge gaps, and a footer with a note left and a link right.',
    hint: 'Draw the boxes first. The page is a column, the hero grows, the topbar and footer are rows, the nav is reversed, the workspace keeps one fixed rail and two growing panes, and the cards wrap with a larger row gap.',
    html: `<div class="page">
  <header class="topbar">
    <div class="brand">CSS Quest</div>
    <nav class="nav"><span>Learn</span><span>Play</span></nav>
    <div class="actions">Start</div>
  </header>
  <main class="hero">
    <div class="intro">Master Flexbox</div>
    <div class="workspace">
      <aside class="rail">Files</aside>
      <div class="code">Code editor</div>
      <div class="preview">Live preview</div>
    </div>
    <div class="cards">
      <div class="card">Centering</div>
      <div class="card">Wrapping</div>
      <div class="card">Order</div>
      <div class="card">Spacing</div>
    </div>
  </main>
  <footer class="bottom">
    <div class="note">Made for students</div>
    <div class="link">Docs</div>
  </footer>
</div>`,
    starterCSS: `.page {
  width: 100%;
  max-width: 26rem;
  min-height: 28rem;
  padding: 0.75rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.topbar {
  gap: 0.5rem;
  align-items: center;
  padding: 0.5rem;
  background: white;
  border-radius: 0.5rem;

  /* ?? brand left, actions right ?? */
}

.brand { font-weight: bold; }
.nav {
  display: flex;
  gap: 0.5rem;

  /* ?? show the nav links in reverse ?? */
}
.nav span { color: #475569; font-weight: bold; }
.actions { padding: 0.35rem 0.6rem; background: #3b82f6; color: white; border-radius: 0.5rem; font-weight: bold; }

.hero {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  /* ?? fill the free height of the page ?? */
}

.intro { padding: 0.5rem; background: #8b5cf6; color: white; border-radius: 0.5rem; font-weight: bold; }

.workspace {
  min-height: 6rem;
  gap: 0.5rem;

  /* ?? make this a row ?? */
}

.rail {
  flex: 0 0 20%;
  padding: 0.6rem;
  background: #8b5cf6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}

.code {
  padding: 0.6rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;

  /* ?? one share of the remaining width ?? */
}

.preview {
  padding: 0.6rem;
  background: #10b981;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;

  /* ?? two shares of the remaining width ?? */
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  /* ?? bigger row gap, half-sized edge gaps, fill the hero ?? */
}

.card {
  padding: 0.6rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  text-align: center;

  /* ?? two cards per row with room to distribute ?? */
}

.bottom {
  gap: 0.5rem;
  align-items: center;
  padding: 0.5rem;
  background: #1e293b;
  color: white;
  border-radius: 0.5rem;

  /* ?? note left, link right ?? */
}`,
    themeCSS: `.page {
  background: radial-gradient(circle at 50% 0%, rgba(189, 147, 249, 0.18), transparent 55%), linear-gradient(135deg, #1e1b2e, #282a36 60%, #2d2a3e);
  border: 1px solid rgba(255, 121, 198, 0.5);
  border-radius: 1rem;
  box-shadow: 0 0 50px rgba(255, 121, 198, 0.14);
}
.topbar, .bottom {
  background: rgba(248, 248, 242, 0.06);
  border: 1px solid #44475a;
  border-radius: 0.75rem;
}
.brand, .intro { color: #8be9fd; font-family: 'Space Grotesk', sans-serif; }
.nav span { color: #f8f8f2; font-family: ui-monospace, 'JetBrains Mono', monospace; font-size: 0.8rem; }
.actions { background: linear-gradient(135deg, #50fa7b, #8be9fd); color: #14121f; }
.cards { background: rgba(248, 248, 242, 0.03); border-radius: 0.75rem; }
.card { background: linear-gradient(135deg, #bd93f9, #8be9fd); color: #14121f; border-radius: 0.5rem; font-family: ui-monospace, 'JetBrains Mono', monospace; font-size: 0.8rem; }
.bottom { color: #50fa7b; font-family: ui-monospace, 'JetBrains Mono', monospace; font-size: 0.78rem; }`,
    solutions: [
      {
        css: `.page {
  width: 100%;
  max-width: 26rem;
  min-height: 28rem;
  padding: 0.75rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.topbar {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  align-items: center;
  padding: 0.5rem;
  background: white;
  border-radius: 0.5rem;
}
.brand { font-weight: bold; }
.nav { display: flex; flex-direction: row-reverse; gap: 0.5rem; }
.nav span { color: #475569; font-weight: bold; }
.actions { padding: 0.35rem 0.6rem; background: #3b82f6; color: white; border-radius: 0.5rem; font-weight: bold; }
.hero {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.5rem;
}
.intro { padding: 0.5rem; background: #8b5cf6; color: white; border-radius: 0.5rem; font-weight: bold; }
.workspace { display: flex; min-height: 6rem; gap: 0.5rem; }
.rail { flex: 0 0 20%; padding: 0.6rem; background: #8b5cf6; color: white; border-radius: 0.5rem; font-weight: bold; }
.code { flex: 1; padding: 0.6rem; background: #3b82f6; color: white; border-radius: 0.5rem; font-weight: bold; }
.preview { flex: 2; padding: 0.6rem; background: #10b981; color: white; border-radius: 0.5rem; font-weight: bold; }
.cards {
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  justify-content: space-around;
  align-content: space-between;
  gap: 1.25rem 0.5rem;
}
.card {
  flex: 0 0 calc(40% - 0.25rem);
  padding: 0.6rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  text-align: center;
}
.bottom {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  align-items: center;
  padding: 0.5rem;
  background: #1e293b;
  color: white;
  border-radius: 0.5rem;
}`,
        explanation: [
          { label: 'div.page', text: 'The outer column, the biggest box in the drawing. It stacks the topbar, the hero and the footer.' },
          { label: 'justify-content: space-between (.topbar)', text: 'From level 20: the brand goes left and the actions go right. The nav stays in the middle.' },
          { label: 'flex-direction: row-reverse (.nav)', text: 'From level 18: the nav links appear in reverse visual order without editing the HTML.' },
          { label: 'flex: 1 (.hero)', text: 'The hero eats the free height, so the footer ends up at the bottom of the page.' },
          { label: 'display: flex (.workspace)', text: 'From level 12: the rail, the code pane and the preview pane become flex items in a row.' },
          { label: 'flex: 0 0 20% / flex: 1 / flex: 2', text: 'From level 29: the rail keeps its size, while the two panes share the remaining width in a 1 to 2 ratio.' },
          { label: 'flex-wrap: wrap + gap: 1.25rem 0.5rem (.cards)', text: 'From levels 21 and 15: two cards per row, larger row gap and outer gaps half of the inner gaps.' },
          { label: 'justify-content: space-between (.bottom)', text: 'The final nested row keeps the note on the left and the link on the right.' }
        ],
        tip: 'If a final layout looks impossible, draw the boxes and solve them one at a time: direction first, then growth, then alignment, then gaps. Every trick in this game is a small flexbox property.'
      }
    ],
    validate(iframe) {
      const doc = iframe.contentDocument
            const win = iframe.contentWindow
            const page = doc.querySelector('.page')
            const topbar = doc.querySelector('.topbar')
            const brand = doc.querySelector('.brand')
            const nav = doc.querySelector('.nav')
            const navLinks = [...doc.querySelectorAll('.nav span')]
            const actions = doc.querySelector('.actions')
            const hero = doc.querySelector('.hero')
            const workspace = doc.querySelector('.workspace')
            const rail = doc.querySelector('.rail')
            const code = doc.querySelector('.code')
            const preview = doc.querySelector('.preview')
            const cards = doc.querySelector('.cards')
            const items = [...doc.querySelectorAll('.card')]
            const bottom = doc.querySelector('.bottom')
            const note = doc.querySelector('.note')
            const link = doc.querySelector('.link')
            if (!page || !topbar || !brand || !nav || navLinks.length !== 2 || !actions || !hero || !workspace || !rail || !code || !preview || !cards || items.length !== 4 || !bottom || !note || !link) return false
      
            const pageStyle = win.getComputedStyle(page)
            const topbarStyle = win.getComputedStyle(topbar)
            const navStyle = win.getComputedStyle(nav)
            const workspaceStyle = win.getComputedStyle(workspace)
            const cardsStyle = win.getComputedStyle(cards)
            const bottomStyle = win.getComputedStyle(bottom)
            if (pageStyle.display !== 'flex' || pageStyle.flexDirection !== 'column') return false
            if (topbarStyle.display !== 'flex' || topbarStyle.justifyContent !== 'space-between') return false
            if (navStyle.display !== 'flex' || navStyle.flexDirection !== 'row-reverse') return false
            if (parseFloat(win.getComputedStyle(hero).flexGrow) < 1) return false
            if (workspaceStyle.display !== 'flex') return false
            if (cardsStyle.display !== 'flex' || cardsStyle.flexWrap !== 'wrap') return false
            if (cardsStyle.alignContent !== 'space-between' || cardsStyle.justifyContent !== 'space-around') return false
            if (bottomStyle.display !== 'flex' || bottomStyle.justifyContent !== 'space-between') return false
            const rowGap = parseFloat(cardsStyle.rowGap)
            const columnGap = parseFloat(cardsStyle.columnGap)
            if (!(columnGap > 4 && rowGap > columnGap + 4)) return false
      
            const topbarRect = topbar.getBoundingClientRect()
            const topbarRight = topbarRect.right - topbar.clientLeft - parseFloat(topbarStyle.paddingRight)
            if (brand.getBoundingClientRect().left - topbarRect.left > 20) return false
            if (Math.abs(topbarRight - actions.getBoundingClientRect().right) > 12) return false
            const navRects = navLinks.map(item => item.getBoundingClientRect())
            if (!(navRects[1].right < navRects[0].left)) return false
      
            const workspaceRect = workspace.getBoundingClientRect()
            const workspaceWidth = workspaceRect.width
            const railRect = rail.getBoundingClientRect()
            const codeRect = code.getBoundingClientRect()
            const previewRect = preview.getBoundingClientRect()
            if (Math.abs(railRect.width - workspaceWidth * 0.2) > 12) return false
            if (!(previewRect.width > codeRect.width * 1.7 && previewRect.width < codeRect.width * 2.3)) return false
            if (codeRect.left < railRect.right - 2 || previewRect.left < codeRect.right - 2) return false
      
            const cardsRect = cards.getBoundingClientRect()
            const contentLeft = cardsRect.left + cards.clientLeft + parseFloat(cardsStyle.paddingLeft)
            const contentRight = cardsRect.right - cards.clientLeft - parseFloat(cardsStyle.paddingRight)
            const contentTop = cardsRect.top + cards.clientTop + parseFloat(cardsStyle.paddingTop)
            const contentBottom = cardsRect.bottom - cards.clientTop - parseFloat(cardsStyle.paddingBottom)
            const rects = items.map(item => item.getBoundingClientRect())
            const widths = rects.map(rect => rect.width)
            if (Math.max(...widths) - Math.min(...widths) > 8) return false
            const tops = [...new Set(rects.map(rect => Math.round(rect.top)))].sort((a, b) => a - b)
            if (tops.length !== 2) return false
            for (const top of tops) {
              const row = rects.filter(rect => Math.abs(rect.top - top) < 4).sort((a, b) => a.left - b.left)
              if (row.length !== 2) return false
              const inner = row[1].left - row[0].right
              const leftEdge = row[0].left - contentLeft
              const rightEdge = contentRight - row[1].right
              if (inner <= columnGap + 4) return false
              if (Math.abs(leftEdge - rightEdge) > 12) return false
              if (Math.abs((inner - columnGap) - leftEdge * 2) > 16) return false
            }
            if (Math.abs(Math.min(...rects.map(rect => rect.top)) - contentTop) > 12) return false
      
            const bottomRect = bottom.getBoundingClientRect()
            const bottomRight = bottomRect.right - bottom.clientLeft - parseFloat(bottomStyle.paddingRight)
            if (note.getBoundingClientRect().left - bottomRect.left > 20) return false
            if (Math.abs(bottomRight - link.getBoundingClientRect().right) > 12) return false
            const pageRect = page.getBoundingClientRect()
            const pageBottom = pageRect.bottom - page.clientTop - parseFloat(pageStyle.paddingBottom)
            if (Math.abs(pageBottom - bottomRect.bottom) > 12) return false
            return page.scrollHeight <= page.clientHeight + 3 && Math.abs(Math.max(...rects.map(rect => rect.bottom)) - contentBottom) < 12
    }
  },
]

export { cssTagsGuide }
export default levels

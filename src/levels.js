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
    values: 'any length (px, rem, %)',
    example: '.container {\n  display: flex;\n  gap: 20px;\n}'
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
    title: 'Flexbox Wrapping',
    description: 'The tags overflow the container. Make them wrap to the next line when there is not enough space. The space between the tags is already set.',
    hint: 'The tags should form several rows instead of one long line. When the items do not fit, flexbox can push them to a new line. The gap is already in the starter code.',
    html: `<div class="container">
  <div class="box">HTML</div>
  <div class="box">CSS</div>
  <div class="box">Flex</div>
  <div class="box">Wrap</div>
  <div class="box">Grid</div>
  <div class="box">Text</div>
</div>`,
    starterCSS: `.container {
  width: 100%;
  max-width: 16rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  gap: 0.75rem;

  /* ?? make the tags wrap ?? */
}

.box {
  padding: 0.75rem 1rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
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
        css: `.container {
  width: 100%;
  max-width: 16rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
.box {
  padding: 0.75rem 1rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}`,
        explanation: [
          {
            label: 'div.container',
            text: 'The flex container. Its width is limited, and the six tags together ask for more room than it can offer.'
          },
          {
            label: 'div.box',
            text: 'Six flex items with short words. Each tag gets its size from its text and padding, so the layout adapts to the content.'
          },
          {
            label: 'display: flex',
            text: 'Already in the starter code. It makes the six tags flex items instead of normal block boxes.'
          },
          {
            label: 'flex-wrap: wrap',
            text: 'By default flex items <em>shrink</em> (<code>flex-shrink: 1</code>) to fit in one single line. With <code>wrap</code>, an item that does not fit moves to a new line instead of being squashed.'
          },
          {
            label: 'gap',
            text: 'Already in the starter code. It keeps the same space between the items of a row and between the rows themselves, so the grid of tags looks even.'
          },
          {
            label: 'padding',
            text: 'Space <em>inside</em> each tag, between its border and its text. Padding belongs to the element itself, while margin lives outside it.'
          }
        ],
        tip: 'Wrapping always happens on the main axis: in a row layout the items wrap into new rows, and in a column layout they wrap into new columns. Resize the container width in the editor and watch the rows rearrange themselves.'
      }
    ],
    validate(iframe) {
      const doc = iframe.contentDocument
      const container = doc.querySelector('.container')
      const boxes = doc.querySelectorAll('.box')
      if (!container || boxes.length !== 6) return false
      const style = iframe.contentWindow.getComputedStyle(container)
      if (style.display !== 'flex' || style.flexWrap !== 'wrap') return false
      if (!(parseFloat(style.columnGap) > 0)) return false
      const rows = new Set()
      for (const box of boxes) {
        rows.add(Math.round(box.getBoundingClientRect().top))
      }
      return rows.size >= 2
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
    title: 'Spreading Items with space-between',
    description: 'The four buttons are glued together on the left. Spread them across the whole row with the same space between them.',
    hint: 'There is empty space inside the container and the four buttons must use all of it. Flexbox has three ways to distribute that space between the items, and only one of them glues the first and the last button to the edges.',
    html: `<div class="container">
  <div class="button">One</div>
  <div class="button">Two</div>
  <div class="button">Three</div>
  <div class="button">Four</div>
</div>`,
    starterCSS: `.container {
  width: 100%;
  max-width: 24rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;

  /* ?? spread the buttons across the row ?? */
}

.button {
  padding: 0.75rem 1rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
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
  align-items: center;
  justify-content: space-between;
}
.button {
  padding: 0.75rem 1rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}`,
        explanation: [
          {
            label: 'div.container',
            text: 'The flex container. The four buttons take their own size from the text and padding, so the rest of the width is free space to distribute.'
          },
          {
            label: 'div.button',
            text: 'Four flex items. With the default <code>justify-content</code> they all stay glued to the left edge.'
          },
          {
            label: 'display: flex',
            text: 'Already in the starter code. It puts the four buttons in a single row.'
          },
          {
            label: 'justify-content: space-between',
            text: 'Puts the first button at the start of the row and the last one at the end, spreading the free space equally between the buttons.'
          },
          {
            label: 'justify-content: space-around',
            text: 'Almost the same idea, but it also adds half of the gap space at the edges, so the first button does not touch the left border.'
          },
          {
            label: 'justify-content: space-evenly',
            text: 'Spreads the free space equally everywhere, including the edges, so the gap at the borders is the same size as the gap between the buttons.'
          },
          {
            label: 'align-items: center',
            text: 'Already in the starter code. It centers the buttons vertically inside the row.'
          }
        ],
        tip: 'The three space options differ only in what happens with the leftover space: <code>space-between</code> glues the first and the last item to the edges, <code>space-around</code> leaves half a gap at the edges, and <code>space-evenly</code> leaves a full gap at the edges.'
      }
    ],
    validate(iframe) {
      const doc = iframe.contentDocument
      const container = doc.querySelector('.container')
      if (!container) return false
      const style = iframe.contentWindow.getComputedStyle(container)
      if (style.display !== 'flex') return false
      const buttons = doc.querySelectorAll('.button')
      if (buttons.length !== 4) return false
      const rects = [...buttons].map(button => button.getBoundingClientRect())
      const cRect = container.getBoundingClientRect()
      const contentLeft = cRect.left + parseFloat(style.paddingLeft)
      const contentRight = cRect.right - parseFloat(style.paddingRight)
      if (Math.abs(rects[0].left - contentLeft) > 8) return false
      if (Math.abs(rects[3].right - contentRight) > 8) return false
      const gaps = []
      for (let i = 1; i < rects.length; i++) {
        gaps.push(rects[i].left - rects[i - 1].right)
      }
      const biggest = Math.max(...gaps)
      const smallest = Math.min(...gaps)
      if (smallest <= 0) return false
      return biggest - smallest <= 10
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
    title: 'Flexbox Inside Flexbox',
    description: 'The avatar and the title should be side by side in the card header, but they are stacked on top of each other.',
    hint: 'The header already has a distance between the items and it centers them vertically, but neither of those has any effect. Both of them are ignored when the element is not really a flex container.',
    html: `<div class="card">
  <div class="header">
    <div class="avatar">A</div>
    <h2 class="title">Card title</h2>
  </div>
  <p class="body">This is the card body. It takes the space that is left.</p>
</div>`,
    starterCSS: `.card {
  width: 100%;
  max-width: 22rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.header {

  /* ?? put the avatar and the title side by side ?? */
  gap: 0.75rem;
  align-items: center;
}

.avatar {
  padding: 1rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}

.title {
  margin: 0;
  font-size: 1.25rem;
}

.body {
  flex: 1;
  margin: 0;
  padding: 1rem;
  background: #ec4899;
  color: white;
  border-radius: 0.5rem;
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
  gap: 1rem;
}
.header {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}
.avatar {
  padding: 1rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
}
.title {
  margin: 0;
  font-size: 1.25rem;
}
.body {
  flex: 1;
  margin: 0;
  padding: 1rem;
  background: #ec4899;
  color: white;
  border-radius: 0.5rem;
}`,
        explanation: [
          {
            label: 'div.card',
            text: 'The outer flex container, in column direction. It stacks the header and the body vertically.'
          },
          {
            label: 'div.header',
            text: 'It should be a flex container as well, but it misses the <code>display: flex</code>. Without it the avatar and the title are normal blocks.'
          },
          {
            label: 'div.avatar',
            text: 'The first flex item of the header. It is a rounded badge with a letter, and its size comes from the text and the padding.'
          },
          {
            label: 'h2.title',
            text: 'The second flex item. It is a real heading with text, so the layout is built from content instead of an empty bar.'
          },
          {
            label: 'display: flex',
            text: 'The missing piece. It turns the header into a flex container, so the avatar and the title become flex items in a row.'
          },
          {
            label: 'gap',
            text: 'Already in the starter code. It only works on a flex container, that is why the gap did nothing until <code>display: flex</code> was added.'
          },
          {
            label: 'align-items: center',
            text: 'Already in the starter code. It centers the title vertically against the avatar.'
          },
          {
            label: 'flex: 1',
            text: 'Inside the .body it takes the height that is left in the card, because the card is a column flex container.'
          }
        ],
        tip: 'Flexbox works inside flexbox: any element can become a flex container. The rule of thumb is simple: whenever you write <code>gap</code> or <code>align-items</code>, check if that element really has <code>display: flex</code>, otherwise those properties do nothing.'
      }
    ],
    validate(iframe) {
      const doc = iframe.contentDocument
      const header = doc.querySelector('.header')
      const avatar = doc.querySelector('.avatar')
      const title = doc.querySelector('.title')
      if (!header || !avatar || !title) return false
      const style = iframe.contentWindow.getComputedStyle(header)
      if (style.display !== 'flex') return false
      const avatarRect = avatar.getBoundingClientRect()
      const titleRect = title.getBoundingClientRect()
      const gap = titleRect.left - avatarRect.right
      if (gap <= 0) return false
      const avatarCenter = (avatarRect.top + avatarRect.bottom) / 2
      const titleCenter = (titleRect.top + titleRect.bottom) / 2
      return Math.abs(avatarCenter - titleCenter) <= 6
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
    description: 'Six cards must wrap into at least two rows, all with the same starting width, and the rows must use the whole height of the gallery. This is a boss: combine wrapping, flex-basis and align-content.',
    hint: 'Take the two ideas from this world: give every card the same starting width with flex-basis and spread the wrapped lines with align-content. The gap also has to be subtracted from the card width so three cards fit in one row.',
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

  /* ?? spread the wrapped rows across the height ?? */
}

.card {
  padding: 0.75rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  text-align: center;

  /* ?? equal starting width for three cards per row ?? */
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
  gap: 0.5rem;
  align-content: space-between;
}
.card {
  padding: 0.75rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  text-align: center;
  flex: 0 0 calc(33.333% - 0.5rem);
}`,
        explanation: [
          {
            label: 'div.gallery',
            text: 'The flex container. It wraps the cards into lines and distributes those lines on the cross axis.'
          },
          {
            label: 'flex: 0 0 calc(33.333% - 0.5rem) (.card)',
            text: 'Each card starts at one third of the row, minus a part of the gap. Without subtracting the gap, three cards plus two gaps would be wider than the gallery and only two would fit.'
          },
          {
            label: 'flex-basis and calc()',
            text: '<code>calc()</code> lets the browser do the math with different units. Here it mixes a percentage with a length, which is exactly what a responsive grid needs.'
          },
          {
            label: 'align-content: space-between',
            text: 'The cards create two lines. This property sends the first line to the top, the last line to the bottom and shares the free space between them.'
          },
          {
            label: 'flex-wrap: wrap',
            text: 'Already in the starter. It is what turns six cards into multiple lines instead of squeezing all of them into one row.'
          },
          {
            label: 'gap',
            text: 'The fixed space between cards. It also explains the <code>- 0.5rem</code> inside the <code>calc()</code>: the gap has to be discounted from the percentage.'
          }
        ],
        tip: 'For a responsive card grid with flexbox: <code>flex-wrap: wrap</code>, a <code>flex-basis</code> that already subtracts the gap, and <code>align-content</code> to distribute the lines. The same card width works when the container gets narrower, because the percentage shrinks with it.'
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

      const galleryRect = gallery.getBoundingClientRect()
      const contentTop = galleryRect.top + gallery.clientTop + parseFloat(style.paddingTop)
      const contentBottom = galleryRect.bottom - gallery.clientTop - parseFloat(style.paddingBottom)
      const contentWidth = gallery.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight)
      const columnGap = parseFloat(style.columnGap) || 0
      const rects = cards.map(card => card.getBoundingClientRect())

      if (gallery.scrollWidth > gallery.clientWidth + 3) return false

      const widths = rects.map(rect => rect.width)
      const widthsAreEqual = Math.max(...widths) - Math.min(...widths) < 10
      const expectedWidth = (contentWidth - columnGap * 2) / 3
      const hasThreeColumns = Math.abs(widths[0] - expectedWidth) < 14

      const tops = [...new Set(rects.map(rect => Math.round(rect.top)))].sort((a, b) => a - b)
      if (tops.length < 2) return false
      const firstTop = Math.min(...rects.map(rect => rect.top))
      const lastBottom = Math.max(...rects.map(rect => rect.bottom))
      const rowsAreSpread =
        Math.abs(firstTop - contentTop) < 12 &&
        Math.abs(lastBottom - contentBottom) < 12

      return widthsAreEqual && hasThreeColumns && rowsAreSpread
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
    description: 'Build the final app shell: a topbar with the brand on the left and the user on the right, a sidebar next to a main area that grows, and a footer at the bottom. Every section is a flex container, and the app is a column.',
    hint: 'Think in layers. The app is a column. The topbar and the layout are rows. One of those layers has to eat the free height so the footer reaches the bottom, and the main area has to eat the free width next to the sidebar.',
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
    <main class="content">Main content area</main>
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
  /* ?? brand left, user right, menu in the middle ?? */
  gap: 0.5rem;
  align-items: center;
  padding: 0.5rem;
  background: white;
  border-radius: 0.5rem;
}

.brand {
  font-weight: bold;
}

.menu {
  display: flex;
  gap: 0.5rem;
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
  /* ?? take the width that is left ?? */
  padding: 0.75rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
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
  justify-content: space-between;
  gap: 0.5rem;
  align-items: center;
  padding: 0.5rem;
  background: white;
  border-radius: 0.5rem;
}
.brand {
  font-weight: bold;
}
.menu {
  display: flex;
  gap: 0.5rem;
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
}
.layout {
  display: flex;
  gap: 0.5rem;
  flex: 1;
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
  flex: 1;
  padding: 0.75rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
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
          {
            label: 'div.app',
            text: 'The outer flex container, in <strong>column</strong> direction. It stacks the topbar, the layout and the footer vertically, and the <code>gap</code> keeps them apart.'
          },
          {
            label: 'div.topbar',
            text: 'A nested flex container. It lays the brand, the menu and the user in a row. <code>justify-content: space-between</code> sends the first item to the left and the last item to the right.'
          },
          {
            label: 'div.layout',
            text: 'Another nested flex container. It puts the sidebar and the main area side by side. <code>flex: 1</code> makes this whole row eat the free height of the app.'
          },
          {
            label: 'flex: 0 0 30% (.sidebar)',
            text: 'The sidebar keeps a starting width of 30% and does not grow or shrink. It is a fixed navigator next to a flexible content area.'
          },
          {
            label: 'flex: 1 (.content)',
            text: 'The main area grows into all the width that is left after the sidebar and the gap. This is what makes the layout responsive without a single pixel value.'
          },
          {
            label: 'footer at the bottom',
            text: 'The app is a column and the layout grows, so the footer is pushed to the end. If the layout did not grow, <code>margin-top: auto</code> on the footer would do the same job.'
          },
          {
            label: 'The whole interface',
            text: 'Every level of this app is a flex container: the page is a column, the topbar is a row, the layout is a row, and the menu is a row inside the topbar. That is how real interfaces are assembled.'
          }
        ],
        tip: 'Real layouts are made of nested flex containers. Start with the biggest direction (the app column), then make each section a row or a column of its own. Use <code>flex: 1</code> for the part that should grow and <code>flex: 0 0 &lt;size&gt;</code> for the parts that should keep their size.'
      }
    ],
    validate(iframe) {
      const doc = iframe.contentDocument
      const win = iframe.contentWindow
      const app = doc.querySelector('.app')
      const topbar = doc.querySelector('.topbar')
      const brand = doc.querySelector('.brand')
      const user = doc.querySelector('.user')
      const layout = doc.querySelector('.layout')
      const sidebar = doc.querySelector('.sidebar')
      const content = doc.querySelector('.content')
      const footer = doc.querySelector('.footer')
      if (!app || !topbar || !brand || !user || !layout || !sidebar || !content || !footer) {
        return false
      }

      const appStyle = win.getComputedStyle(app)
      const topbarStyle = win.getComputedStyle(topbar)
      const layoutStyle = win.getComputedStyle(layout)
      if (appStyle.display !== 'flex' || appStyle.flexDirection !== 'column') return false
      if (topbarStyle.display !== 'flex' || layoutStyle.display !== 'flex') return false

      const appRect = app.getBoundingClientRect()
      const topbarRect = topbar.getBoundingClientRect()
      const layoutRect = layout.getBoundingClientRect()
      const brandRect = brand.getBoundingClientRect()
      const userRect = user.getBoundingClientRect()
      const sidebarRect = sidebar.getBoundingClientRect()
      const contentRect = content.getBoundingClientRect()
      const footerRect = footer.getBoundingClientRect()

      const topbarContentLeft = topbarRect.left + topbar.clientLeft + parseFloat(topbarStyle.paddingLeft)
      const topbarContentRight = topbarRect.right - topbar.clientLeft - parseFloat(topbarStyle.paddingRight)

      const brandIsLeft = brandRect.left - topbarContentLeft < 12
      const userIsRight = topbarContentRight - userRect.right < 12
      const topbarIsHorizontal = Math.abs(brandRect.top - userRect.top) < 12

      const contentIsRightOfSidebar = contentRect.left >= sidebarRect.right - 2
      const contentFillsRest = Math.abs(contentRect.right - layoutRect.right) < 12
      const sidebarAndContentAreSiblings = Math.abs(sidebarRect.top - contentRect.top) < 8

      const appContentBottom = appRect.bottom - app.clientTop - parseFloat(appStyle.paddingBottom)
      const footerIsAtBottom = appContentBottom - footerRect.bottom < 12
      const layoutIsAboveFooter = footerRect.top >= layoutRect.bottom - 2
      const noOverflow = app.scrollHeight <= app.clientHeight + 3

      return (
        brandIsLeft &&
        userIsRight &&
        topbarIsHorizontal &&
        contentIsRightOfSidebar &&
        contentFillsRest &&
        sidebarAndContentAreSiblings &&
        footerIsAtBottom &&
        layoutIsAboveFooter &&
        noOverflow
      )
    }
  }
]

export { cssTagsGuide }
export default levels

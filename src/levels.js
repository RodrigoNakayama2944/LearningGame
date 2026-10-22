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
const levels = [
  {
    id: 1,
    title: 'Flexbox Centering',
    description: 'The container is already a flex container. Perfectly center the blue box inside it using flexbox.',
    hint: 'The container is already a flex container. Flexbox aligns the items on two axes at the same time: one moves them sideways, the other moves them up and down. Your box needs both.',
    html: `<div class="container">
  <div class="box"></div>
</div>`,
    starterCSS: `.container {
  width: 300px;
  height: 200px;
  background: #e2e8f0;
  border-radius: 8px;
  display: flex;

  /* ?? center the box ?? */
}

.box {
  width: 80px;
  height: 80px;
  background: #3b82f6;
  border-radius: 8px;
}`,
    solutions: [
      {
        css: `.container {
  width: 300px;
  height: 200px;
  background: #e2e8f0;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box {
  width: 80px;
  height: 80px;
  background: #3b82f6;
  border-radius: 8px;
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
            label: 'width / height',
            text: 'The container is 300x200px and the box is 80x80px. Flexbox centers the <em>free space</em> around the item, so the size of the box only says how big it is, never where it goes.'
          },
          {
            label: 'border-radius: 8px',
            text: 'Rounds the corners. It changes only the appearance and never the layout, a good example of a property you can add without breaking the puzzle.'
          }
        ],
        tip: 'Main axis vs cross axis: the main axis is the direction chosen by <code>flex-direction</code> (<code>row</code> = horizontal, <code>column</code> = vertical). <code>justify-content</code> works on the main axis and <code>align-items</code> works on the cross axis. That is why the same two properties can center a box in both directions.'
      }
    ],
    validate(iframe) {
      const box = iframe.contentDocument.querySelector('.box')
      if (!box) return false
      const container = iframe.contentDocument.querySelector('.container')
      if (!container) return false
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
    description: 'Stack the three boxes vertically, evenly spaced, and centered horizontally.',
    hint: 'The three boxes have to go one below the other instead of side by side, spread along the height of the container. Flexbox has one property that changes the direction of the flow and another one that spreads the items inside it.',
    html: `<div class="container">
  <div class="box box-1">1</div>
  <div class="box box-2">2</div>
  <div class="box box-3">3</div>
</div>`,
    starterCSS: `.container {
  width: 200px;
  height: 280px;
  background: #e2e8f0;
  border-radius: 8px;
  display: flex;

  /* ?? stack vertically, space evenly, center ?? */
}

.box {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  font-weight: bold;
  color: white;
}

.box-1 { background: #3b82f6; }
.box-2 { background: #8b5cf6; }
.box-3 { background: #ec4899; }`,
    solutions: [
      {
        css: `.container {
  width: 200px;
  height: 280px;
  background: #e2e8f0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.box {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  font-weight: bold;
  color: white;
}
.box-1 { background: #3b82f6; }
.box-2 { background: #8b5cf6; }
.box-3 { background: #ec4899; }`,
        explanation: [
          {
            label: 'div.container',
            text: 'The flex container. It is 200x280px and the three boxes take 180px of that height, so there is 100px of free space left to distribute vertically.'
          },
          {
            label: 'div.box.box-1 / 2 / 3',
            text: 'Three flex items. The extra classes only give each one a different color, and the numbers 1, 2 and 3 are just text inside the boxes.'
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
            label: '.box { display: flex }',
            text: 'Each box is a flex container too. That is how the number 1, 2 or 3 gets centered inside its square.'
          },
          {
            label: '.box { justify-content: center; align-items: center }',
            text: 'The very same two properties applied to the number: one centers it horizontally (main axis) and the other vertically (cross axis). Flexbox behaves the same way at every level of the page.'
          }
        ],
        tip: 'The value names describe exactly what they do: <code>space</code> means space between the items and <code>evenly</code> means equal amounts everywhere, including the edges. Because the direction changed but the properties did not, you can reuse the same mental model for rows and for columns.'
      }
    ],
    validate(iframe) {
      const boxes = iframe.contentDocument.querySelectorAll('.box')
      if (boxes.length !== 3) return false
      const container = iframe.contentDocument.querySelector('.container')
      if (!container) return false
      const style = iframe.contentWindow.getComputedStyle(container)
      if (style.flexDirection !== 'column') return false
      const cRect = container.getBoundingClientRect()
      const centerX = (cRect.left + cRect.right) / 2
      for (const box of boxes) {
        const r = box.getBoundingClientRect()
        const bx = (r.left + r.right) / 2
        if (Math.abs(bx - centerX) > 25) return false
      }
      const gap = boxes[1].getBoundingClientRect().top - boxes[0].getBoundingClientRect().bottom
      const gap2 = boxes[2].getBoundingClientRect().top - boxes[1].getBoundingClientRect().bottom
      return Math.abs(gap - gap2) < 20
    }
  },
  {
    id: 3,
    title: 'Flexbox Spacing with gap',
    description: 'Arrange the three boxes in a horizontal row with exactly 20px of space between them, centered in the container.',
    hint: 'The three boxes have to stay in a row, centered as a group, with exactly 20px between each pair of them. Flexbox has one property for the space between the items and another one to center the group.',
    html: `<div class="container">
  <div class="box box-1"></div>
  <div class="box box-2"></div>
  <div class="box box-3"></div>
</div>`,
    starterCSS: `.container {
  width: 320px;
  height: 120px;
  background: #e2e8f0;
  border-radius: 8px;
  display: flex;

  /* ?? center, 20px gap ?? */
}

.box {
  width: 70px;
  height: 70px;
  border-radius: 8px;
}

.box-1 { background: #3b82f6; }
.box-2 { background: #8b5cf6; }
.box-3 { background: #ec4899; }`,
    solutions: [
      {
        css: `.container {
  width: 320px;
  height: 120px;
  background: #e2e8f0;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.box {
  width: 70px;
  height: 70px;
  border-radius: 8px;
}
.box-1 { background: #3b82f6; }
.box-2 { background: #8b5cf6; }
.box-3 { background: #ec4899; }`,
        explanation: [
          {
            label: 'div.container',
            text: 'The flex container. It is 320px wide, so after the boxes and the gaps there is still free space to share.'
          },
          {
            label: 'div.box',
            text: 'Three flex items of 70x70px each. They are all the same size, so the row looks even.'
          },
          {
            label: 'display: flex',
            text: 'Already in the starter code. It puts the three boxes in a horizontal row, because <code>row</code> is the default flex direction.'
          },
          {
            label: 'justify-content: center',
            text: 'Centers the row along the main axis (horizontal). The row measures 3 x 70px + 2 x 20px = 250px, so the remaining 70px of free space is split into 35px on the left and 35px on the right.'
          },
          {
            label: 'align-items: center',
            text: 'Centers the boxes on the cross axis (vertical), so they sit in the middle of the 120px tall container.'
          },
          {
            label: 'gap: 20px',
            text: 'Puts exactly 20px between every pair of items on the main axis. Nothing is added before the first box or after the last one, and no margin is needed.'
          }
        ],
        tip: 'The <code>gap</code> property is the modern way to space flex items. The old trick was <code>margin-right: 20px</code> on every box plus <code>margin-right: -20px</code> on the container to remove the extra space at the end. With <code>gap</code> you never have to undo anything, and <code>row-gap</code> / <code>column-gap</code> let you control each axis separately.'
      }
    ],
    validate(iframe) {
      const boxes = iframe.contentDocument.querySelectorAll('.box')
      if (boxes.length !== 3) return false
      const container = iframe.contentDocument.querySelector('.container')
      if (!container) return false
      const cStyle = iframe.contentWindow.getComputedStyle(container)
      if (cStyle.display !== 'flex') return false
      const gap = boxes[1].getBoundingClientRect().left - boxes[0].getBoundingClientRect().right
      return Math.abs(gap - 20) < 12
    }
  },
  {
    id: 4,
    title: 'Flexbox Wrapping',
    description: 'The boxes overflow the container. Make them wrap to the next line when there is not enough space, with 10px gaps.',
    hint: 'The boxes should form three rows of two instead of one long line. When the items do not fit, flexbox can push them to a new line, and the distance between the lines can be controlled too.',
    html: `<div class="container">
  <div class="box">A</div>
  <div class="box">B</div>
  <div class="box">C</div>
  <div class="box">D</div>
  <div class="box">E</div>
  <div class="box">F</div>
</div>`,
    starterCSS: `.container {
  width: 200px;
  padding: 10px;
  background: #e2e8f0;
  border-radius: 8px;
  display: flex;

  /* ?? wrapping and 10px gap ?? */
}

.box {
  width: 55px;
  height: 55px;
  background: #3b82f6;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  font-weight: bold;
  color: white;
}`,
    solutions: [
      {
        css: `.container {
  width: 200px;
  padding: 10px;
  background: #e2e8f0;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.box {
  width: 55px;
  height: 55px;
  background: #3b82f6;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  font-weight: bold;
  color: white;
}`,
        explanation: [
          {
            label: 'div.container',
            text: 'The flex container. It is 200px wide with 10px of padding on each side, so only 180px is really available for the boxes.'
          },
          {
            label: 'div.box',
            text: 'Six flex items of 55px each (6 x 55px = 330px), which is more than the 180px available. Something has to give: that is exactly what <code>flex-wrap</code> solves.'
          },
          {
            label: 'display: flex',
            text: 'Already in the starter code. It makes the six boxes flex items instead of normal block boxes.'
          },
          {
            label: 'flex-wrap: wrap',
            text: 'By default flex items <em>shrink</em> (<code>flex-shrink: 1</code>) to fit in one single line. With <code>wrap</code>, an item that does not fit moves to a new line instead of being squashed.'
          },
          {
            label: 'gap: 10px',
            text: 'Adds 10px between the items of a row and between the rows themselves, so the grid of letters looks even.'
          },
          {
            label: 'padding: 10px',
            text: 'Space <em>inside</em> the container, between its border and its content. Padding belongs to the element itself, while margin lives outside it.'
          }
        ],
        tip: 'Wrapping always happens on the main axis: in a row layout the items wrap into new rows, and in a column layout they wrap into new columns. Resize the container width in the editor and watch the rows rearrange themselves.'
      }
    ],
    validate(iframe) {
      const container = iframe.contentDocument.querySelector('.container')
      if (!container) return false
      const style = iframe.contentWindow.getComputedStyle(container)
      if (style.flexWrap !== 'wrap') return false
      const boxes = iframe.contentDocument.querySelectorAll('.box')
      if (boxes.length !== 6) return false
      const rows = new Set()
      for (const box of boxes) {
        const r = box.getBoundingClientRect()
        rows.add(Math.round(r.top))
      }
      return rows.size >= 2
    }
  },
  {
    id: 5,
    title: 'Flexbox Order Property',
    description: 'The boxes are displayed in HTML order 1-2-3. Using the CSS order property, reverse them to display as 3-2-1 without changing the HTML.',
    hint: 'The final position of an item does not have to be the position of its code. Flexbox can rearrange the items without touching the HTML.',
    html: `<div class="container">
  <div class="box box-1">1</div>
  <div class="box box-2">2</div>
  <div class="box box-3">3</div>
</div>`,
    starterCSS: `.container {
  width: 280px;
  height: 100px;
  background: #e2e8f0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 15px;
}

.box {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  font-weight: bold;
  color: white;
  font-size: 1.2rem;
}

.box-1 { background: #3b82f6; /* ?? reverse order ?? */ }
.box-2 { background: #8b5cf6; /* ?? reverse order ?? */ }
.box-3 { background: #ec4899; /* ?? reverse order ?? */ }`,
    solutions: [
      {
        css: `.container {
  width: 280px;
  height: 100px;
  background: #e2e8f0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 15px;
}
.box {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  font-weight: bold;
  color: white;
  font-size: 1.2rem;
}
.box-1 { background: #3b82f6; order: 3; }
.box-2 { background: #8b5cf6; order: 2; }
.box-3 { background: #ec4899; order: 1; }`,
        explanation: [
          {
            label: 'div.container',
            text: 'The flex container. It already uses <code>align-items: center</code>, <code>gap: 10px</code> and <code>padding: 0 15px</code> (left and right only), so you only have to worry about the order.'
          },
          {
            label: 'div.box.box-1 / 2 / 3',
            text: 'Three flex items. In the HTML they appear as 1, 2, 3; on the screen they will appear as 3, 2, 1.'
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
            label: 'gap: 10px',
            text: 'The space between the boxes stays 10px no matter in which order they are shown, because the gap is measured between the items, not between the tags.'
          }
        ],
        tip: 'The <code>order</code> property changes only what you <em>see</em>, never the HTML. The DOM order is still 1, 2, 3, and that is the order used by screen readers and by the Tab key, so when possible keep the HTML order the same as the visual order.'
      }
    ],
    validate(iframe) {
      const boxes = iframe.contentDocument.querySelectorAll('.box')
      if (boxes.length !== 3) return false
      const r1 = boxes[0].getBoundingClientRect()
      const r3 = boxes[2].getBoundingClientRect()
      return r3.left < r1.left
    }
  },
  {
    id: 6,
    title: 'Responsive Flexbox Wrapping',
    description: 'Make the six cards fill the container responsively, wrapping onto new lines so they always fit no matter the width.',
    hint: 'Each card should be as wide as it can be, but never narrower than 100px, and the cards should move to the next line when there is no room. Flexbox decides the size of the items and also if they break into new lines.',
    html: `<div class="grid">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
  <div class="card">Card 4</div>
  <div class="card">Card 5</div>
  <div class="card">Card 6</div>
</div>`,
    starterCSS: `.grid {
  width: 340px;
  background: #e2e8f0;
  border-radius: 8px;
  padding: 10px;
  display: flex;

  /* ?? responsive flexbox layout ?? */
}

.card {
  background: #3b82f6;
  color: white;
  border-radius: 6px;
  padding: 20px;
  text-align: center;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 0.85rem;
}`,
    solutions: [
      {
        css: `.grid {
  width: 340px;
  background: #e2e8f0;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.card {
  background: #3b82f6;
  color: white;
  border-radius: 6px;
  padding: 20px;
  text-align: center;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 0.85rem;
  min-width: 100px;
  flex: 1;
}`,
        explanation: [
          {
            label: 'div.grid',
            text: 'The flex container. It is 340px wide with 10px of padding, so 320px are available for the cards. The class is called <code>grid</code>, but the layout is made with flexbox.'
          },
          {
            label: 'div.card',
            text: 'Six flex items. Each card has 20px of padding and a minimum width, so the layout always has a comfortable size to work with.'
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
            label: 'gap: 10px',
            text: 'Exactly 10px between the cards, both horizontally and vertically.'
          },
          {
            label: 'min-width: 100px',
            text: 'The smallest width a card can have. The cards never shrink below 100px, which keeps the text readable.'
          },
          {
            label: 'flex: 1',
            text: 'Short for <code>flex: 1 1 0%</code>: <code>grow: 1</code> (the card grows to share the free space), <code>shrink: 1</code> (it can shrink) and <code>basis: 0%</code> (it starts from zero and the growth decides the final size). Here it is the same as writing <code>flex: 1 1 100px</code>, because <code>min-width</code> already guarantees the 100px.'
          },
          {
            label: 'padding: 20px / text-align: center',
            text: 'Padding is the space inside the card around the text, and <code>text-align: center</code> centers the text horizontally.'
          }
        ],
        tip: 'This layout is responsive because nothing has a fixed width: the cards have a minimum (<code>min-width</code>) and share whatever space is left (<code>flex: 1</code>), while <code>flex-wrap</code> sends them to the next line. Change the container width in the editor and the number of cards per row changes automatically.'
      },
      {
        css: `.grid {
  width: 340px;
  background: #e2e8f0;
  border-radius: 8px;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
}
.card {
  background: #3b82f6;
  color: white;
  border-radius: 6px;
  padding: 20px;
  text-align: center;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 0.85rem;
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
            label: 'minmax(100px, 1fr)',
            text: 'Each column is at least 100px wide (<code>min</code>) and takes one equal share of the free space (<code>1fr</code>, one <em>fraction</em>).'
          },
          {
            label: 'auto-fill',
            text: 'Keeps the empty columns when there is leftover space, so the cards keep their minimum size instead of stretching too much.'
          },
          {
            label: 'gap: 10px',
            text: 'The same spacing between the tracks (the rows and columns) and the cards.'
          },
          {
            label: '.card { padding: 20px }',
            text: 'The cards keep their internal spacing, and the grid takes care of the outer layout for them.'
          }
        ],
        tip: 'Both answers give the same visual result, but flexbox is the focus of this game. Grid shines in two-dimensional layouts (rows and columns together), while flexbox is perfect for one-dimensional ones (a row or a column of items).'
      }
    ],
    validate(iframe) {
      const grid = iframe.contentDocument.querySelector('.grid')
      if (!grid) return false
      const style = iframe.contentWindow.getComputedStyle(grid)
      const isGrid = style.display === 'grid'
      const isFlex = style.display === 'flex'
      if (!isGrid && !isFlex) return false
      const cards = iframe.contentDocument.querySelectorAll('.card')
      if (cards.length !== 6) return false
      const rows = new Set()
      for (const card of cards) {
        const r = card.getBoundingClientRect()
        rows.add(Math.round(r.top))
      }
      return rows.size >= 2 && rows.size <= 4
    }
  },
  {
    id: 7,
    title: 'Proportional Widths with flex-grow',
    description: 'Three bars share the same row. Make the purple bar twice as wide as the blue and the pink ones.',
    hint: 'The free space can be shared in different proportions between the items. There is a flexbox property that decides how many parts of the free space each item receives.',
    html: `<div class="container">
  <div class="bar bar-1"></div>
  <div class="bar bar-2"></div>
  <div class="bar bar-3"></div>
</div>`,
    starterCSS: `.container {
  width: 360px;
  height: 100px;
  background: #e2e8f0;
  border-radius: 8px;
  display: flex;
  gap: 10px;

  /* ?? make the purple bar twice as wide ?? */
}

.bar {
  height: 100%;
  border-radius: 6px;
}

.bar-1 { background: #3b82f6; }
.bar-2 { background: #8b5cf6; }
.bar-3 { background: #ec4899; }`,
    solutions: [
      {
        css: `.container {
  width: 360px;
  height: 100px;
  background: #e2e8f0;
  border-radius: 8px;
  display: flex;
  gap: 10px;
}

.bar {
  height: 100%;
  border-radius: 6px;
}

.bar-1 { background: #3b82f6; flex: 1; }
.bar-2 { background: #8b5cf6; flex: 2; }
.bar-3 { background: #ec4899; flex: 1; }`,
        explanation: [
          { label: 'div.container', text: 'The flex container. It is 360px wide with a 10px gap, so the three bars share 340px of free space.' },
          { label: 'div.bar', text: 'Three flex items. They have no width of their own, so their size comes only from the flex property.' },
          { label: 'display: flex', text: 'Already in the starter code. It turns the container into a flex container and the bars into flex items.' },
          { label: 'flex: 1', text: 'Shorthand for <code>flex: 1 1 0%</code>. Each bar with <code>flex: 1</code> takes one share of the free space, and the 0% basis means the size is decided by the shares only.' },
          { label: 'flex: 2', text: 'The purple bar has twice the grow factor, so it takes two shares. Here there are 4 shares in total (1 + 2 + 1) and each one is 340 / 4 = 85px.' },
          { label: 'flex-grow', text: 'The number that defines the share of free space each item receives. It only matters when there is free space to share.' },
          { label: 'gap: 10px', text: 'The 10px between the bars is not part of the free space: the bars share 340px and the gap stays on top of that.' }
        ],
        tip: 'flex-grow works like a share of the leftover space: the bigger the number, the bigger the piece. If every bar had <code>flex: 1</code> they would all be the same width, and changing only one number to 2 makes that bar exactly twice as wide as the others.'
      }
    ],
    validate(iframe) {
      const doc = iframe.contentDocument
      const container = doc.querySelector('.container')
      const bars = doc.querySelectorAll('.bar')
      if (!container || bars.length !== 3) return false
      const style = iframe.contentWindow.getComputedStyle(container)
      if (style.display !== 'flex') return false
      const widths = [...bars].map(bar => bar.getBoundingClientRect().width)
      if (widths.some(width => width < 20)) return false
      const grow = [...bars].map(bar => iframe.contentWindow.getComputedStyle(bar).flexGrow)
      if (grow[0] !== '1' || grow[1] !== '2' || grow[2] !== '1') return false
      return Math.abs(widths[1] / widths[0] - 2) < 0.15 && Math.abs(widths[1] / widths[2] - 2) < 0.15
    }
  },
  {
    id: 8,
    title: 'Spreading Items with space-between',
    description: 'The four buttons are glued together on the left. Spread them across the whole row with the same space between them.',
    hint: 'There is empty space inside the container and the four buttons must use all of it. Flexbox has three ways to distribute that space between the items, and only one of them glues the first and the last button to the edges.',
    html: `<div class="container">
  <div class="button"></div>
  <div class="button"></div>
  <div class="button"></div>
  <div class="button"></div>
</div>`,
    starterCSS: `.container {
  width: 400px;
  height: 80px;
  background: #e2e8f0;
  border-radius: 8px;
  display: flex;
  align-items: center;

  /* ?? spread the buttons across the row ?? */
}

.button {
  width: 40px;
  height: 40px;
  background: #3b82f6;
  border-radius: 6px;
}`,
    solutions: [
      {
        css: `.container {
  width: 400px;
  height: 80px;
  background: #e2e8f0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.button {
  width: 40px;
  height: 40px;
  background: #3b82f6;
  border-radius: 6px;
}`,
        explanation: [
          { label: 'div.container', text: 'The flex container. It is 400px wide and the four buttons take 160px, so 240px of free space are left to distribute.' },
          { label: 'div.button', text: 'Four flex items of 40x40px. With the default <code>justify-content</code> they all stay glued to the left edge.' },
          { label: 'display: flex', text: 'Already in the starter code. It puts the four buttons in a single row.' },
          { label: 'justify-content: space-between', text: 'Puts the first button at the start of the row and the last one at the end, spreading the free space equally between the buttons. Here that is 240px / 3 = 80px between each pair.' },
          { label: 'justify-content: space-around', text: 'Almost the same idea, but it also adds half of the gap space at the edges, so the first button does not touch the left border.' },
          { label: 'justify-content: space-evenly', text: 'Spreads the free space equally everywhere, including the edges, so the gap at the borders is the same size as the gap between the buttons.' },
          { label: 'align-items: center', text: 'Already in the starter code. It centers the buttons vertically inside the 80px tall row.' }
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
      const containerRect = container.getBoundingClientRect()
      if (Math.abs(rects[0].left - containerRect.left) > 8) return false
      if (Math.abs(rects[3].right - containerRect.right) > 8) return false
      const gaps = []
      for (let i = 1; i < rects.length; i++) {
        gaps.push(rects[i].left - rects[i - 1].right)
      }
      const biggest = Math.max(...gaps)
      const smallest = Math.min(...gaps)
      if (biggest - smallest > 10) return false
      return biggest > 50
    }
  },
  {
    id: 9,
    title: 'Aligning a Single Item with align-self',
    description: 'All the boxes are centered in the row. Move only the purple box to the bottom of the container.',
    hint: 'The rule that centers every item is set on the container, but one single item can decide not to follow it. The property that does this lives on the item, not on the container.',
    html: `<div class="container">
  <div class="box box-1"></div>
  <div class="box box-2"></div>
  <div class="box box-3"></div>
</div>`,
    starterCSS: `.container {
  width: 300px;
  height: 200px;
  background: #e2e8f0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 20px;

  /* ?? move only the purple box to the bottom ?? */
}

.box {
  width: 60px;
  height: 60px;
  border-radius: 8px;
}

.box-1 { background: #3b82f6; }
.box-2 { background: #8b5cf6; }
.box-3 { background: #ec4899; }`,
    solutions: [
      {
        css: `.container {
  width: 300px;
  height: 200px;
  background: #e2e8f0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.box {
  width: 60px;
  height: 60px;
  border-radius: 8px;
}

.box-1 { background: #3b82f6; }
.box-2 { background: #8b5cf6; align-self: flex-end; }
.box-3 { background: #ec4899; }`,
        explanation: [
          { label: 'div.container', text: 'The flex container. It is 300x200px and the boxes are 60x60px, so there is room to move them up and down.' },
          { label: 'div.box', text: 'Three flex items. All of them are 60x60px, so what changes is the vertical position, never the size.' },
          { label: 'display: flex', text: 'Already in the starter code. It puts the three boxes in a single row.' },
          { label: 'align-items: center', text: 'Already in the starter code. It centers every item on the cross axis, which is the vertical axis inside a row.' },
          { label: 'align-self: flex-end', text: 'Overrides <code>align-items</code> for this item only. <code>flex-end</code> pushes the purple box to the end of the cross axis, which is the bottom of the container.' },
          { label: 'align-self: flex-start', text: 'The opposite: it would push the box to the top of the container.' },
          { label: 'align-self: center', text: 'Would keep the purple box centered, exactly like the other two.' }
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
      const containerRect = container.getBoundingClientRect()
      if (containerRect.bottom - rects[1].bottom > 10) return false
      const containerCenter = (containerRect.top + containerRect.bottom) / 2
      const firstCenter = (rects[0].top + rects[0].bottom) / 2
      const lastCenter = (rects[2].top + rects[2].bottom) / 2
      if (Math.abs(firstCenter - containerCenter) > 8) return false
      if (Math.abs(lastCenter - containerCenter) > 8) return false
      return true
    }
  },
  {
    id: 10,
    title: 'Pushing the Footer to the Bottom',
    description: 'The footer should stay at the bottom of the card and all the empty space should be above it.',
    hint: 'The footer should stay at the bottom of the card even if the content changes. Margins can be auto, and an automatic margin inside a flex container eats all the free space of the axis.',
    html: `<div class="page">
  <div class="content"></div>
  <div class="footer"></div>
</div>`,
    starterCSS: `.page {
  width: 320px;
  height: 240px;
  background: #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  /* ?? push the footer to the bottom ?? */
}

.content {
  height: 80px;
  background: #3b82f6;
  border-radius: 6px;
}

.footer {
  height: 40px;
  background: #8b5cf6;
  border-radius: 6px;
}`,
    solutions: [
      {
        css: `.page {
  width: 320px;
  height: 240px;
  background: #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.content {
  height: 80px;
  background: #3b82f6;
  border-radius: 6px;
}

.footer {
  height: 40px;
  background: #8b5cf6;
  border-radius: 6px;
  margin-top: auto;
}`,
        explanation: [
          { label: 'div.page', text: 'The flex container, in column direction. It is 240px tall with 16px of padding, so the inner area is 208px.' },
          { label: 'div.content', text: 'The first flex item. It is 80px tall and it stays at the top of the column.' },
          { label: 'div.footer', text: 'The second flex item. It is 40px tall and it should stay at the bottom of the column.' },
          { label: 'flex-direction: column', text: 'Already in the starter code. The column direction is what makes the free space appear between the content and the footer.' },
          { label: 'margin-top: auto', text: 'An auto margin eats all the free space of the container. On the footer it pushes it to the bottom, and the content stays at the top.' },
          { label: 'justify-content: space-between', text: 'Another way to reach the same result: it distributes the free space between the items, so the footer ends up at the bottom.' },
          { label: 'gap: 16px', text: 'The minimum space between the items. The auto margin does not remove the gap, it adds all the extra space on top of it.' }
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
    description: 'The purple button is being squeezed. Keep it at 80px wide while the long blue bar shrinks to fit.',
    hint: 'When there is not enough room, flexbox shrinks the items to make everything fit. One item has to keep its size anyway, and flexbox has a property that protects it from shrinking.',
    html: `<div class="container">
  <div class="bar"></div>
  <div class="button"></div>
</div>`,
    starterCSS: `.container {
  width: 260px;
  height: 80px;
  background: #e2e8f0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;

  /* ?? keep the button at 80px ?? */
}

.bar {
  width: 300px;
  height: 40px;
  background: #3b82f6;
  border-radius: 6px;
}

.button {
  width: 80px;
  height: 40px;
  background: #8b5cf6;
  border-radius: 6px;
}`,
    solutions: [
      {
        css: `.container {
  width: 260px;
  height: 80px;
  background: #e2e8f0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.bar {
  width: 300px;
  height: 40px;
  background: #3b82f6;
  border-radius: 6px;
}

.button {
  width: 80px;
  height: 40px;
  background: #8b5cf6;
  border-radius: 6px;
  flex-shrink: 0;
}`,
        explanation: [
          { label: 'div.container', text: 'The flex container. It is 260px wide, so with the 10px gap there are only 250px for the two items, but together they ask for 380px.' },
          { label: 'div.bar', text: 'The first flex item. It wants to be 300px wide, more than the available space, so it has to shrink.' },
          { label: 'div.button', text: 'The second flex item. It wants to be 80px wide, and it is the one that must keep that size.' },
          { label: 'display: flex', text: 'Already in the starter code. It puts the bar and the button in a single row.' },
          { label: 'flex-shrink: 0', text: 'Tells the browser that this item refuses to shrink. The default is 1, which means "shrink me if you need to".' },
          { label: 'flex-shrink: 1', text: 'The default value. When there is not enough space, every item with <code>flex-shrink: 1</code> gives up part of its size, in proportion to its width.' },
          { label: 'gap: 10px', text: 'The 10px between the items is never flexible: it does not shrink, it is always there.' }
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
      const buttonRect = button.getBoundingClientRect()
      const barRect = bar.getBoundingClientRect()
      if (Math.abs(buttonRect.width - 80) > 6) return false
      return barRect.width < 190
    }
  },
  {
    id: 12,
    title: 'Flexbox Inside Flexbox',
    description: 'The avatar and the title should be side by side in the card header, but they are stacked on top of each other.',
    hint: 'The header already has a distance between the items and it centers them vertically, but neither of those has any effect. Both of them are ignored when the element is not really a flex container.',
    html: `<div class="card">
  <div class="header">
    <div class="avatar"></div>
    <div class="title"></div>
  </div>
  <div class="body"></div>
</div>`,
    starterCSS: `.card {
  width: 320px;
  height: 200px;
  background: #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.header {

  /* ?? put the avatar and the title side by side ?? */
  gap: 12px;
  align-items: center;
}

.avatar {
  width: 48px;
  height: 48px;
  background: #3b82f6;
  border-radius: 50%;
}

.title {
  width: 160px;
  height: 16px;
  background: #8b5cf6;
  border-radius: 4px;
}

.body {
  flex: 1;
  background: #ec4899;
  border-radius: 6px;
}`,
    solutions: [
      {
        css: `.card {
  width: 320px;
  height: 200px;
  background: #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.header {
  display: flex;
  gap: 12px;
  align-items: center;
}

.avatar {
  width: 48px;
  height: 48px;
  background: #3b82f6;
  border-radius: 50%;
}

.title {
  width: 160px;
  height: 16px;
  background: #8b5cf6;
  border-radius: 4px;
}

.body {
  flex: 1;
  background: #ec4899;
  border-radius: 6px;
}`,
        explanation: [
          { label: 'div.card', text: 'The outer flex container, in column direction. It stacks the header and the body vertically.' },
          { label: 'div.header', text: 'It should be a flex container as well, but it misses the <code>display: flex</code>. Without it the avatar and the title are normal blocks.' },
          { label: 'div.avatar', text: 'The first flex item of the header. It is 48x48px, the round avatar.' },
          { label: 'div.title', text: 'The second flex item. It is 160x16px, the purple bar that works as the title.' },
          { label: 'display: flex', text: 'The missing piece. It turns the header into a flex container, so the avatar and the title become flex items in a row.' },
          { label: 'gap: 12px', text: 'Already in the starter code. It only works on a flex container, that is why the gap did nothing until <code>display: flex</code> was added.' },
          { label: 'align-items: center', text: 'Already in the starter code. It centers the title vertically against the taller avatar.' },
          { label: 'flex: 1', text: 'Inside the .body it takes the height that is left in the card, because the card is a column flex container.' }
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
      if (gap < 5 || gap > 20) return false
      const avatarCenter = (avatarRect.top + avatarRect.bottom) / 2
      const titleCenter = (titleRect.top + titleRect.bottom) / 2
      return Math.abs(avatarCenter - titleCenter) <= 6
    }
  }
]

export { cssTagsGuide }
export default levels

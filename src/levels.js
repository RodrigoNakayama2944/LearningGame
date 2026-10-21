const cssReference = [
  'display', 'flex', 'width', 'height',
  'padding', 'border', 'border-radius',
  'background', 'color', 'font-size', 'font-weight',
  'text-align', 'justify-content', 'align-items',
  'flex-direction', 'flex-wrap', 'gap', 'order',
]

// Cada solução tem: css (o código), explanation (o que cada elemento faz)
// e tip (a ideia principal do nível).
const levels = [
  {
    id: 1,
    title: 'Flexbox Centering',
    description: 'The container is already a flex container. Perfectly center the blue box inside it using flexbox.',
    hint: 'The container already has display: flex. Add justify-content: center and align-items: center.',
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
    hint: 'Use flex-direction: column, justify-content: space-evenly, and align-items: center.',
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
    hint: 'The container already has display: flex. Add justify-content: center, align-items: center, and gap: 20px.',
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
    hint: 'The container already has display: flex. Add flex-wrap: wrap and gap: 10px.',
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
    hint: 'Set order: 3 on box-1, order: 2 on box-2, and order: 1 on box-3.',
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
    hint: 'The container already has display: flex. Add flex-wrap: wrap, gap: 10px, and flex: 1 1 100px on each card.',
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
  }
]

export { cssReference }
export default levels

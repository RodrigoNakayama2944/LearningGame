const cssReference = [
  'display', 'flex', 'width', 'height',
  'padding', 'border', 'border-radius',
  'background', 'color', 'font-size', 'font-weight',
  'text-align', 'justify-content', 'align-items',
  'flex-direction', 'flex-wrap', 'gap', 'order',
]

const levels = [
  {
    id: 1,
    title: 'Flexbox Centering',
    description: 'Use display: flex to perfectly center the blue box inside the container. This is the modern way!',
    hint: 'Combine display: flex with justify-content: center and align-items: center.',
    explanation: [
      'display: flex turns the container into a flex container; its children become flex items.',
      'justify-content: center centers the box on the main axis (horizontal).',
      'align-items: center centers the box on the cross axis (vertical).',
      'Flexbox centers content without magic numbers, so it works at any size.'
    ],
    html: `<div class="container">
  <div class="box"></div>
</div>`,
    starterCSS: `.container {
  width: 300px;
  height: 200px;
  background: #e2e8f0;
  border-radius: 8px;

  /* ?? center the box with flexbox ?? */
}

.box {
  width: 80px;
  height: 80px;
  background: #3b82f6;
  border-radius: 8px;
}`,
    solutions: [
      `.container {
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
}`
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
    explanation: [
      'flex-direction: column changes the main axis to vertical, stacking the boxes from top to bottom.',
      'justify-content: space-evenly divides the free space equally before, between, and after every box.',
      'align-items: center keeps every box centered horizontally (the cross axis in column mode).'
    ],
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
      `.container {
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
.box-3 { background: #ec4899; }`
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
    hint: 'Use display: flex, justify-content: center, and the gap property for spacing.',
    explanation: [
      'display: flex + justify-content: center puts the three boxes in a centered horizontal row.',
      'align-items: center aligns them vertically in the middle of the container.',
      'gap: 20px reserves exactly 20px between boxes, with no margins and no math.'
    ],
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

  /* ?? flex, center, 20px gap ?? */
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
      `.container {
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
.box-3 { background: #ec4899; }`
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
    hint: 'Use display: flex with flex-wrap: wrap and gap: 10px.',
    explanation: [
      'flex-wrap: wrap lets items flow onto a new line when they do not fit, instead of shrinking.',
      'gap: 10px keeps exactly 10px between every box, in any row.'
    ],
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

  /* ?? add flex with wrapping and 10px gap ?? */
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
      `.container {
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
}`
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
    explanation: [
      'display: flex enables ordering, since in normal flow the order always follows the HTML.',
      'order: <n> changes the visual order without touching the HTML, keeping the markup meaningful.',
      'Items are laid out from lowest order value to highest.'
    ],
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
      `.container {
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
.box-3 { background: #ec4899; order: 1; }`
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
    hint: 'Use display: flex with flex-wrap: wrap, gap: 10px, and give each card a flexible base size with flex: 1 1 100px.',
    explanation: [
      'display: flex turns the container into a flex container where every card is a flex item.',
      'flex-wrap: wrap lets cards flow to a new line when they run out of space, instead of crushing them together.',
      'flex: 1 1 100px gives each card a base size of 100px and lets it grow to share the leftover space.',
      'With 340px of width you get three cards per row, and the layout adapts automatically to any container width.'
    ],
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

  /* ?? create a responsive flexbox layout ?? */
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
      `.grid {
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
      `.grid {
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
}`
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
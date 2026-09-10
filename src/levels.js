const levels = [
  {
    id: 1,
    title: 'margin: auto',
    description: 'The blue box is stuck in the top-left corner. Move it to the exact center of the gray area using CSS.',
    hint: 'Try using margin: auto on the box, but first give it a width smaller than the container.',
    html: `<div class="container">
  <div class="box"></div>
</div>`,
    starterCSS: `.container {
  width: 300px;
  height: 200px;
  background: #e2e8f0;
  border-radius: 8px;
}

.box {
  width: 80px;
  height: 80px;
  background: #3b82f6;
  border-radius: 8px;
}`,
    targetCSS: `.container {
  width: 300px;
  height: 200px;
  background: #e2e8f0;
  border-radius: 8px;
}

.box {
  width: 80px;
  height: 80px;
  background: #3b82f6;
  border-radius: 8px;
  margin: auto;
  margin-top: 60px;
}`,
    validate(iframe) {
      const box = iframe.contentDocument.querySelector('.box')
      if (!box) return false
      const style = iframe.contentWindow.getComputedStyle(box)
      const container = iframe.contentDocument.querySelector('.container')
      const cRect = container.getBoundingClientRect()
      const bRect = box.getBoundingClientRect()
      const centeredX = Math.abs((bRect.left + bRect.right) / 2 - (cRect.left + cRect.right) / 2) < 15
      const centeredY = Math.abs((bRect.top + bRect.bottom) / 2 - (cRect.top + cRect.bottom) / 2) < 15
      return centeredX && centeredY
    }
  },
  {
    id: 2,
    title: 'Flexbox Centering',
    description: 'Use display: flex to perfectly center the blue box inside the container. This is the modern way!',
    hint: 'Combine display: flex with justify-content: center and align-items: center.',
    html: `<div class="container">
  <div class="box"></div>
</div>`,
    starterCSS: `.container {
  width: 300px;
  height: 200px;
  background: #e2e8f0;
  border-radius: 8px;
}

.box {
  width: 80px;
  height: 80px;
  background: #3b82f6;
  border-radius: 8px;
}`,
    targetCSS: `.container {
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
    validate(iframe) {
      const box = iframe.contentDocument.querySelector('.box')
      if (!box) return false
      const container = iframe.contentDocument.querySelector('.container')
      const cRect = container.getBoundingClientRect()
      const bRect = box.getBoundingClientRect()
      const centeredX = Math.abs((bRect.left + bRect.right) / 2 - (cRect.left + cRect.right) / 2) < 15
      const centeredY = Math.abs((bRect.top + bRect.bottom) / 2 - (cRect.top + cRect.bottom) / 2) < 15
      return centeredX && centeredY
    }
  },
  {
    id: 3,
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
    targetCSS: `.container {
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
    validate(iframe) {
      const boxes = iframe.contentDocument.querySelectorAll('.box')
      if (boxes.length !== 3) return false
      const container = iframe.contentDocument.querySelector('.container')
      const style = iframe.contentWindow.getComputedStyle(container)
      if (style.flexDirection !== 'column') return false
      const cRect = container.getBoundingClientRect()
      const centerX = (cRect.left + cRect.right) / 2
      for (const box of boxes) {
        const r = box.getBoundingClientRect()
        const bx = (r.left + r.right) / 2
        if (Math.abs(bx - centerX) > 20) return false
      }
      const gap = boxes[1].getBoundingClientRect().top - boxes[0].getBoundingClientRect().bottom
      const gap2 = boxes[2].getBoundingClientRect().top - boxes[1].getBoundingClientRect().bottom
      return Math.abs(gap - gap2) < 15
    }
  },
  {
    id: 4,
    title: 'Flexbox Spacing with gap',
    description: 'Arrange the three boxes in a horizontal row with exactly 20px of space between them, centered in the container.',
    hint: 'Use display: flex, justify-content: center, and the gap property for spacing.',
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
}

.box {
  width: 70px;
  height: 70px;
  border-radius: 8px;
}

.box-1 { background: #3b82f6; }
.box-2 { background: #8b5cf6; }
.box-3 { background: #ec4899; }`,
    targetCSS: `.container {
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
    validate(iframe) {
      const boxes = iframe.contentDocument.querySelectorAll('.box')
      if (boxes.length !== 3) return false
      const container = iframe.contentDocument.querySelector('.container')
      const cStyle = iframe.contentWindow.getComputedStyle(container)
      if (cStyle.display !== 'flex') return false
      const gap = boxes[1].getBoundingClientRect().left - boxes[0].getBoundingClientRect().right
      return Math.abs(gap - 20) < 8
    }
  },
  {
    id: 5,
    title: 'CSS Grid Basics',
    description: 'Create a 2x2 grid using CSS Grid. All cells should be equal size and have 10px gaps between them.',
    hint: 'Use display: grid, grid-template-columns: 1fr 1fr, and gap: 10px.',
    html: `<div class="grid">
  <div class="cell cell-1">1</div>
  <div class="cell cell-2">2</div>
  <div class="cell cell-3">3</div>
  <div class="cell cell-4">4</div>
</div>`,
    starterCSS: `.grid {
  width: 240px;
  height: 240px;
  background: #e2e8f0;
  border-radius: 8px;
}

.cell {
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  font-weight: bold;
  color: white;
  font-size: 1.2rem;
}

.cell-1 { background: #3b82f6; }
.cell-2 { background: #8b5cf6; }
.cell-3 { background: #ec4899; }
.cell-4 { background: #f59e0b; }`,
    targetCSS: `.grid {
  width: 240px;
  height: 240px;
  background: #e2e8f0;
  border-radius: 8px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.cell {
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  font-weight: bold;
  color: white;
  font-size: 1.2rem;
}

.cell-1 { background: #3b82f6; }
.cell-2 { background: #8b5cf6; }
.cell-3 { background: #ec4899; }
.cell-4 { background: #f59e0b; }`,
    validate(iframe) {
      const grid = iframe.contentDocument.querySelector('.grid')
      if (!grid) return false
      const style = iframe.contentWindow.getComputedStyle(grid)
      if (style.display !== 'grid') return false
      const cells = iframe.contentDocument.querySelectorAll('.cell')
      if (cells.length !== 4) return false
      const r1 = cells[0].getBoundingClientRect()
      const r2 = cells[1].getBoundingClientRect()
      const r3 = cells[2].getBoundingClientRect()
      const r4 = cells[3].getBoundingClientRect()
      const colWidth = Math.abs(r1.width - r2.width) < 5
      const rowHeight = Math.abs(r1.height - r3.height) < 5
      const gap = Math.abs(r2.left - r1.right)
      return colWidth && rowHeight && gap > 5 && gap < 20
    }
  },
  {
    id: 6,
    title: 'Grid Template Areas',
    description: 'Use grid-template-areas to create a layout with a header spanning full width, a sidebar on the left, main content in the center, and a footer spanning full width.',
    hint: 'Define grid-template-areas with "header header", "sidebar main", "footer footer", then assign area to each element.',
    html: `<div class="layout">
  <header class="header">Header</header>
  <aside class="sidebar">Sidebar</aside>
  <main class="main">Main Content</main>
  <footer class="footer">Footer</footer>
</div>`,
    starterCSS: `.layout {
  width: 320px;
  height: 280px;
  background: #e2e8f0;
  border-radius: 8px;
}

.header, .sidebar, .main, .footer {
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  font-weight: bold;
  color: white;
  font-size: 0.8rem;
}

.header { background: #3b82f6; }
.sidebar { background: #8b5cf6; }
.main { background: #10b981; }
.footer { background: #f59e0b; }`,
    targetCSS: `.layout {
  width: 320px;
  height: 280px;
  background: #e2e8f0;
  border-radius: 8px;
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-template-rows: 50px 1fr 50px;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  gap: 8px;
  padding: 8px;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }

.header, .sidebar, .main, .footer {
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  font-weight: bold;
  color: white;
  font-size: 0.8rem;
}

.header { background: #3b82f6; }
.sidebar { background: #8b5cf6; }
.main { background: #10b981; }
.footer { background: #f59e0b; }`,
    validate(iframe) {
      const layout = iframe.contentDocument.querySelector('.layout')
      if (!layout) return false
      const style = iframe.contentWindow.getComputedStyle(layout)
      if (style.display !== 'grid') return false
      const header = iframe.contentDocument.querySelector('.header')
      const sidebar = iframe.contentDocument.querySelector('.sidebar')
      const main = iframe.contentDocument.querySelector('.main')
      const footer = iframe.contentDocument.querySelector('.footer')
      if (!header || !sidebar || !main || !footer) return false
      const hR = header.getBoundingClientRect()
      const fR = footer.getBoundingClientRect()
      const lR = layout.getBoundingClientRect()
      const headerSpansFull = Math.abs(hR.width - (lR.width - 16)) < 15
      const footerSpansFull = Math.abs(fR.width - (lR.width - 16)) < 15
      return headerSpansFull && footerSpansFull
    }
  },
  {
    id: 7,
    title: 'Flexbox Wrapping',
    description: 'The boxes overflow the container. Make them wrap to the next line when there is not enough space, with 10px gaps.',
    hint: 'Use display: flex with flex-wrap: wrap and gap: 10px.',
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
    targetCSS: `.container {
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
        const row = Math.round(r.top)
        rows.add(row)
      }
      return rows.size >= 2
    }
  },
  {
    id: 8,
    title: 'Absolute + Relative Positioning',
    description: 'Position the blue circle in the exact center of the gray container using position: absolute. The container should be the reference point.',
    hint: 'Set the container to position: relative, the circle to position: absolute, then use top: 50%, left: 50%, and transform: translate(-50%, -50%).',
    html: `<div class="container">
  <div class="circle"></div>
</div>`,
    starterCSS: `.container {
  width: 250px;
  height: 250px;
  background: #e2e8f0;
  border-radius: 8px;
}

.circle {
  width: 60px;
  height: 60px;
  background: #3b82f6;
  border-radius: 50%;
}`,
    targetCSS: `.container {
  width: 250px;
  height: 250px;
  background: #e2e8f0;
  border-radius: 8px;
  position: relative;
}

.circle {
  width: 60px;
  height: 60px;
  background: #3b82f6;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}`,
    validate(iframe) {
      const circle = iframe.contentDocument.querySelector('.circle')
      if (!circle) return false
      const style = iframe.contentWindow.getComputedStyle(circle)
      if (style.position !== 'absolute') return false
      const container = iframe.contentDocument.querySelector('.container')
      const cRect = container.getBoundingClientRect()
      const cCircle = circle.getBoundingClientRect()
      const cx = Math.abs((cCircle.left + cCircle.right) / 2 - (cRect.left + cRect.right) / 2)
      const cy = Math.abs((cCircle.top + cCircle.bottom) / 2 - (cRect.top + cRect.bottom) / 2)
      return cx < 10 && cy < 10
    }
  },
  {
    id: 9,
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

.box-1 { background: #3b82f6; }
.box-2 { background: #8b5cf6; }
.box-3 { background: #ec4899; }`,
    targetCSS: `.container {
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
    validate(iframe) {
      const boxes = iframe.contentDocument.querySelectorAll('.box')
      if (boxes.length !== 3) return false
      const r1 = boxes[0].getBoundingClientRect()
      const r3 = boxes[2].getBoundingClientRect()
      return r3.left < r1.left
    }
  },
  {
    id: 10,
    title: 'Responsive Grid with auto-fill',
    description: 'Create a grid that automatically fills columns as wide as 100px each, with 10px gaps. The grid should adapt to the container width.',
    hint: 'Use grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)) with gap: 10px.',
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
    targetCSS: `.grid {
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
    validate(iframe) {
      const grid = iframe.contentDocument.querySelector('.grid')
      if (!grid) return false
      const style = iframe.contentWindow.getComputedStyle(grid)
      if (style.display !== 'grid') return false
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

export default levels

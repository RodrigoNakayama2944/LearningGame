const cssKeywords = [
  'display', 'flex', 'grid', 'none', 'block', 'inline', 'inline-block',
  'position', 'absolute', 'relative', 'fixed', 'static', 'sticky',
  'flex-direction', 'row', 'column', 'row-reverse', 'column-reverse',
  'justify-content', 'center', 'flex-start', 'flex-end', 'space-between', 'space-around', 'space-evenly',
  'align-items', 'stretch', 'baseline',
  'flex-wrap', 'wrap', 'nowrap',
  'gap', 'order',
  'grid-template-columns', 'grid-template-rows', 'grid-template-areas', 'grid-area',
  'auto-fill', 'auto-fit', 'minmax', 'fr',
  'top', 'left', 'right', 'bottom',
  'width', 'height', 'min-width', 'min-height', 'max-width', 'max-height',
  'margin', 'padding', 'border', 'border-radius',
  'background', 'color', 'font-family', 'font-size', 'font-weight',
  'text-align', 'transform', 'translate',
  'overflow', 'hidden', 'visible', 'auto',
  'white-space', 'tab-size',
  'letter-spacing', 'line-height', 'opacity',
]

export function highlightCSS(code) {
  const lines = code.split('\n')
  return lines.map(line => highlightLine(line)).join('\n')
}

function highlightLine(line) {
  let result = ''
  let i = 0

  while (i < line.length) {
    if (line[i] === '/' && line[i + 1] === '*') {
      const end = line.indexOf('*/', i + 2)
      const comment = end === -1 ? line.slice(i) : line.slice(i, end + 2)
      result += `<span class="syntax-comment">${escapeHtml(comment)}</span>`
      if (end === -1) return result
      i = end + 2
      continue
    }

    if (line[i] === '/' && line[i + 1] === '/') {
      result += `<span class="syntax-comment">${escapeHtml(line.slice(i))}</span>`
      return result
    }

    if (line[i] === '"' || line[i] === "'") {
      const quote = line[i]
      let j = i + 1
      while (j < line.length && line[j] !== quote) j++
      const str = line.slice(i, j + 1)
      result += `<span class="syntax-string">${escapeHtml(str)}</span>`
      i = j + 1
      continue
    }

    if (line[i] === '.' && i > 0 && /[\s{;,:]/.test(line[i - 1] || ' ')) {
      let j = i + 1
      while (j < line.length && /[\w-]/.test(line[j])) j++
      const sel = line.slice(i, j)
      result += `<span class="syntax-selector">${escapeHtml(sel)}</span>`
      i = j
      continue
    }

    if (line[i] === '#' && i > 0 && /[\s{;,:]/.test(line[i - 1] || ' ')) {
      let j = i + 1
      while (j < line.length && /[\w]/.test(line[j])) j++
      const sel = line.slice(i, j)
      result += `<span class="syntax-selector">${escapeHtml(sel)}</span>`
      i = j
      continue
    }

    if (/[a-zA-Z-]/.test(line[i]) && (i === 0 || /[\s{;,:]/.test(line[i - 1]))) {
      let j = i
      while (j < line.length && /[\w-]/.test(line[j])) j++
      const word = line.slice(i, j)

      if (j < line.length && line[j] === ':') {
        result += `<span class="syntax-property">${escapeHtml(word)}</span>`
        i = j
        continue
      }

      if (cssKeywords.includes(word) || word.startsWith('box') || word.startsWith('cell')) {
        result += `<span class="syntax-value">${escapeHtml(word)}</span>`
      } else if (/^\d/.test(word)) {
        result += `<span class="syntax-number">${escapeHtml(word)}</span>`
      } else {
        result += escapeHtml(word)
      }
      i = j
      continue
    }

    if (/^\d/.test(line[i])) {
      let j = i
      while (j < line.length && /[\d.%pxremvhw]/.test(line[j])) j++
      result += `<span class="syntax-number">${escapeHtml(line.slice(i, j))}</span>`
      i = j
      continue
    }

    if (line[i] === '{' || line[i] === '}') {
      result += `<span class="syntax-punctuation">${escapeHtml(line[i])}</span>`
      i++
      continue
    }

    if (line[i] === ':') {
      result += `<span class="syntax-punctuation">:</span>`
      i++
      continue
    }

    if (line[i] === ';') {
      result += `<span class="syntax-punctuation">;</span>`
      i++
      continue
    }

    result += escapeHtml(line[i])
    i++
  }

  return result
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

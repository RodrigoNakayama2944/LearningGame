// Cada renderização recebe um número único. O número é colocado no <html> do
// iframe e no próprio elemento iframe, assim o jogo sabe com certeza qual
// versão do preview já está pronta para ser validada.
let renderCount = 0

function renderDoc(html, css, themeCSS, renderId) {
  return `<!DOCTYPE html>
<html data-render-id="${renderId}">
<head>
<meta charset="UTF-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    min-height: 100vh;
    padding: 16px;
    background: #f8fafc;
    font-family: sans-serif;
  }
  ${css}
  ${themeCSS}
</style>
</head>
<body>
${html}
</body>
</html>`
}

function render(iframe, html, css, themeCSS) {
  renderCount++
  iframe.dataset.renderId = renderCount
  iframe.srcdoc = renderDoc(html, css, themeCSS, renderCount)
}

export function updatePreview(iframe, html, css, themeCSS) {
  render(iframe, html, css, themeCSS)
}

export function updateTarget(iframe, html, css, themeCSS) {
  render(iframe, html, css, themeCSS)
}

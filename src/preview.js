function renderDoc(html, css) {
  return `<!DOCTYPE html>
<html>
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
</style>
</head>
<body>
${html}
</body>
</html>`
}

export function updatePreview(iframe, html, css) {
  iframe.srcdoc = renderDoc(html, css)
}

export function updateTarget(iframe, html, css) {
  iframe.srcdoc = renderDoc(html, css)
}

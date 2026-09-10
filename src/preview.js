export function updatePreview(iframe, html, css) {
  const doc = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100%;
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

  iframe.srcdoc = doc
}

export function updateTarget(iframe, html, css) {
  const doc = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100%;
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

  iframe.srcdoc = doc
}

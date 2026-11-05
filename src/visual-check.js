const POSITION_TOLERANCE = 3
const SIZE_TOLERANCE = 4

function contentRoot(doc) {
  const children = [...doc.body.children].filter(element => {
    const tag = element.tagName
    return tag !== 'SCRIPT' && tag !== 'STYLE'
  })
  return children.length === 1 ? children[0] : doc.body
}

function collect(doc) {
  const root = contentRoot(doc)
  if (!root) return null
  return {
    root,
    nodes: [root, ...root.querySelectorAll('*')]
  }
}

function isVisible(style) {
  return (
    style.display !== 'none' &&
    style.visibility !== 'hidden' &&
    Number(style.opacity) > 0
  )
}

function closeEnough(first, second, tolerance) {
  return Math.abs(first - second) <= tolerance
}

function sameRect(first, second, rootFirst, rootSecond) {
  return (
    closeEnough(first.left - rootFirst.left, second.left - rootSecond.left, POSITION_TOLERANCE) &&
    closeEnough(first.top - rootFirst.top, second.top - rootSecond.top, POSITION_TOLERANCE) &&
    closeEnough(first.width, second.width, SIZE_TOLERANCE) &&
    closeEnough(first.height, second.height, SIZE_TOLERANCE)
  )
}

export function visuallyMatchesTarget(previewFrame, targetFrame) {
  const previewDoc = previewFrame && previewFrame.contentDocument
  const targetDoc = targetFrame && targetFrame.contentDocument
  if (!previewDoc || !targetDoc || !previewDoc.body || !targetDoc.body) return false
  if (previewDoc.documentElement.dataset.renderId !== previewFrame.dataset.renderId) return false
  if (targetDoc.documentElement.dataset.renderId !== targetFrame.dataset.renderId) return false

  const preview = collect(previewDoc)
  const target = collect(targetDoc)
  if (!preview || !target) return false
  if (preview.nodes.length !== target.nodes.length) return false

  const previewRoot = preview.root.getBoundingClientRect()
  const targetRoot = target.root.getBoundingClientRect()
  if (previewRoot.width < 1 || previewRoot.height < 1) return false
  if (
    !closeEnough(previewRoot.width, targetRoot.width, SIZE_TOLERANCE) ||
    !closeEnough(previewRoot.height, targetRoot.height, SIZE_TOLERANCE)
  ) {
    return false
  }

  for (let index = 0; index < preview.nodes.length; index += 1) {
    const previewNode = preview.nodes[index]
    const targetNode = target.nodes[index]
    if (previewNode.tagName !== targetNode.tagName) return false

    const previewStyle = previewDoc.defaultView.getComputedStyle(previewNode)
    const targetStyle = targetDoc.defaultView.getComputedStyle(targetNode)
    if (isVisible(previewStyle) !== isVisible(targetStyle)) return false

    if (
      !sameRect(
        previewNode.getBoundingClientRect(),
        targetNode.getBoundingClientRect(),
        previewRoot,
        targetRoot
      )
    ) {
      return false
    }
  }

  return true
}

/*
 * Compatibility shims for newer Sketch/CocoaScript runtimes.
 * These keep older skpm webview bundles from failing before the UI opens.
 */
const root = typeof globalThis !== 'undefined' ? globalThis : this

function defineIfMissing(name, value) {
  if (typeof root[name] === 'undefined') root[name] = value
}

export function applySketch2026Compatibility() {
  defineIfMissing('NSTitledWindowMask', 1)
  defineIfMissing('NSClosableWindowMask', 2)
  defineIfMissing('NSMiniaturizableWindowMask', 4)
  defineIfMissing('NSResizableWindowMask', 8)
  defineIfMissing('NSTexturedBackgroundWindowMask', 256)
  defineIfMissing('NSFullScreenWindowMask', 16384)
  defineIfMissing('NSViewWidthSizable', 2)
  defineIfMissing('NSViewHeightSizable', 16)
}

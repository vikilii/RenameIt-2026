/**
 * @Author: Rodrigo Soares <rodrigo>
 * @Date:   2017-11-17T19:54:56-08:00
 * @Project: Rename It
 * @Last modified time: 2017-12-02T11:44:14-08:00
 */
import { findReplaceDataParser } from "~/src/lib/Utilities"
import theUI from "./lib/TheUI"
import { applySketch2026Compatibility } from "./lib/Sketch2026Compat"
import { isCompatible, showAlert } from "./lib/VersionAlert"

applySketch2026Compatibility()

export default function(context) {
  // Check compatibility
  if (!isCompatible()) {
    showAlert()
    return
  }

  const data = findReplaceDataParser(context)

  const options = {
    identifier: "findReplace.ui",
    title: "Find & Replace Layers",
    redirectTo: "/find_replace",
    width: 480,
    height: 335
  }

  // Load UI
  theUI(context, data, options)
}

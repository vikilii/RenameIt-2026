# Rename It v4.5.6-sketch2026.1.2

Unofficial compatibility patch for Rename It v4.5.4.

Tested with Sketch 2026.1.2 (228390).

## Fixes

- Fixed `Rename Selected Layers` not opening in Sketch 2026 by removing legacy Sketch metadata API usage from the old analytics path.
- Fixed `Find and Replace Layers/Artboards Names` by supporting Sketch 2026 page layer access (`layers()` fallback when `children()` is unavailable).
- Fixed `Rename Selected Artboards` by avoiding direct global `MSArtboardGroup` / `MSSymbolMaster` references.
- Increased the `Rename Selected Artboards` dialog height so the bottom buttons are visible in Sketch 2026.
- Replaced direct layer name assignment with a `setName(...)` fallback.
- Added compatibility shims for legacy AppKit/WebView symbols used by the bundled webview code.
- Removed the upstream appcast URL from the bundled manifest.

## Install

Download `Rename-It-Sketch-2026.1.2-patched.zip`, unzip it, and double-click `Rename-It.sketchplugin`.

Original project: https://github.com/rodi01/RenameIt
License: MIT

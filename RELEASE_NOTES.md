# Rename It v4.5.5-sketch2026.1.2

Unofficial compatibility patch for Rename It v4.5.4.

Tested with Sketch 2026.1.2 (228390).

## Fixes

- Removed legacy Sketch metadata API usage from the old analytics path.
- Removed `sketch-module-google-analytics` from source dependencies.
- Replaced direct layer name assignment with a `setName(...)` fallback.
- Added compatibility shims for legacy AppKit/WebView symbols used by the bundled webview code.
- Removed the upstream appcast URL from the bundled manifest.

## Install

Download `Rename-It-Sketch-2026.1.2-patched.zip`, unzip it, and double-click `Rename-It.sketchplugin`.

Original project: https://github.com/rodi01/RenameIt
License: MIT

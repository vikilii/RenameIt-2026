# Rename It 2026 Compatibility Patch

This is an unofficial fork of [rodi01/RenameIt](https://github.com/rodi01/RenameIt) with a local compatibility patch for Sketch 2026.1.2 (228390).

The original Sketch plugin is no longer maintained and the upstream repository is archived. This fork keeps the original MIT license and credits, and only updates the Sketch plugin so users on newer Sketch versions can open the Rename It UI again.

## What changed

- Removed the old `sketch-module-google-analytics` dependency because it references Sketch metadata APIs that no longer exist in Sketch 2026.
- Fixed `Find and Replace Layers/Artboards Names` for Sketch 2026 page layer access changes.
- Fixed `Rename Selected Artboards` for Sketch 2026 artboard class lookup changes.
- Increased the `Rename Selected Artboards` dialog height so the bottom buttons are visible.
- Replaced direct `layer.name = ...` assignments with a `setName(...)`-first fallback for newer Sketch/CocoaScript runtimes.
- Added compatibility shims for legacy AppKit/WebView constants used by the older `sketch-module-web-view` bundle.
- Removed the original appcast URL from the bundled manifest so this unofficial fork does not imply official upstream updates.

## Tested with

- Sketch 2026.1.2 (228390)
- Rename It 4.5.4 base plugin

## Install

1. Download the latest release zip from this fork.
2. Unzip it.
3. Double-click `Rename-It.sketchplugin`, or copy it to `~/Library/Application Support/com.bohemiancoding.sketch3/Plugins/`.
4. Restart Sketch if the plugin menu does not refresh immediately.

## Original project note

# Update
Unfortunately, Rename It for Sketch is no longer being maintained. I no longer use Sketch as my design tool, and I can't justify paying for the license. The latest tested Sketch version is 67.2. 

The plugin is still being maintained for Figma and Adobe XD.

# Rename It

Keep your Sketch files always organized, batch rename layers and artboards.
[Checkout the website](https://renameit.design/sketch/)

## Rename Selected Layers

<img src="docs/static/img/renameLayersShortcut.png" width="300">

### Multiple Layers

Rename Multiple layers at once command.

![Rename Multiple Layers](/docs/static/img/gifs/batch_rename.gif)

### Sequence

Sequentially rename layers in either ascending or descending order.

![Rename in Sequence](/docs/static/img/gifs/sequence_rename.gif)

* **Keyword %N** - Ascending numbered sequence
* **Keyword %n** - Descending numbered sequence
* **Keyword %A** - Alphabet sequence

##### Pro Tip

* **Keyword %nn** - This will output 01, 02, 03 and so on
* **Keyword "%a** - Lowercase alphabet sequence

### Current Layer Name

The keyword **%\*** will copy the current selected layer(s) name.

![Current Layer Name](/docs/static/img/gifs/current_layer.gif)

### Layer Name Case

You can use the **%\*** with combination of letters to convert the layer name case.

* **Keyword %\*u%** - Convert to **UPPER CASE**
* **Keyword %\*l%** - Convert to **lower case**
* **Keyword %\*t%** - Convert to **Title Case**
* **Keyword %\*uf%** - Convert to **Upper first word**
* **Keyword %\*c%** - Convert to **camelCase** (This will remove the spaces)

### Add Width and Height

Rename layer(s) with the width **%W** and height **%H** of a layer.

![Width and Height](/docs/static/img/gifs/width_height.gif)

###### NOTE: “%” can be escaped with a backslash “\\”

## Find & Replace in Selected Layers

<img src="docs/static/img/findReplaceShortcut.png" width="320">

Replace any word(s) or character(s) from selected layers.

![Find & Replace](/docs/static/img/gifs/find_replace.gif)

## Rename Artboards

<img src="docs/static/img/renameArtboardShortcut.png" width="350">

Rename selected artboards works the same way as rename selected layers. You don't need to select the artboard, it will automatically find the artboard of the selected layer(s).

![Rename Artboards](/docs/static/img/gifs/artboard_rename.gif)

## Install

#### For Sketch bellow version 51 the latest version of the plugin won't work. [Please download version 3.8.7 here](https://github.com/rodi01/RenameIt/releases/download/v3.8.7/Rename-It.sketchplugin.zip)

### Sketchpacks

[![Sketchpacks](/docs/static/img/sketchpack_btn.png "Install Rename It with Sketchpacks")](https://sketchpacks.com/rodi01/renameit/install)

### Sketch Runner

![Sketch Runner](/docs/static/img/sketch_runner_hq.gif)

### Direct Download

[![Direct Download](/docs/static/img/download_btn.png "Direct Download")](https://github.com/vikilii/RenameIt-2026/releases/latest)


## More Info

Rename It is maintained by Rodrigo Soares, follow me [@rodi01](https://twitter.com/rodi01)

[Checkout the website for more](https://renameit.design/sketch)

MIT License © Rodrigo Soares.

## Donate
[Buy me a pizza 🍕](https://www.buymeacoffee.com/rodi01) or donate via [PayPal](https://www.paypal.me/rodi01/5).

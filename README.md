# SAAM MediaElement.js Skin

SAAM MediaElement.js custom skin/theme

View [demo](https://ericpugh.github.io/saam-mejs-skin/)

## Setup

Run `npm install` to install dependencies

## Customize

Copy the contents of scss/_variables.scss to scss/_overrides.scss and customize.


## Gulp Tasks

Run `gulp` to build the skin, which in css/skin/saam-mejs-skin.min.css

- `gulp` the default task
- `gulp dev` listens for changes to SCSS and JS files, and rebuilds when changes are made
- `gulp sass` compiles SCSS files into CSS
- `gulp minify-css` minifies the compiled CSS file
- `gulp vendor` copies dependencies from node_modules to the vendor directory


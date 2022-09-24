# PowerUP

Zero dependency extension library for JavaScript prototypes with commonly used features

## Description

PowerUP supercharges Javascript's capabilities by expanding the built-in prototypes. After importing, these functions and properties can be used just as if they were native ones for rapid development.

## Installation

Install the library with the package manager of your preference and add it to your project.

```
npm install --save powerup
yarn add powerup
pnpm add powerup
bun add powerup
```

## Importing

After the package is imported, it will update the built-in prototypes in the currently running instance. Because of this, the package does not need to be assigned or called directly.

> It's important to load the module as soon as possible, but at least before loading any other module using it.

CommonJS

```js
require('powerup')
```

ES6

```js
import 'powerup'
```

HTML

```html
<script src="powerup.js"></script>
```

## Usage

### All objects

```js
const a = { x: 13, y: false }

let aJson = a.json() // Convert to json
let aCopy = a.deepCopy() // Create a deep copy
```

### Arrays

```js
const a = [ 1, 2, 3, 3, 3 ]

let min = a.min()
let max = a.max()
let sum = a.sum()
let avg = a.avg()
let prod = a.prod()
let unique = a.distinct()
```

This project is actively being worked on and more features are coming soon!

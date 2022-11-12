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
let aQuery = a.toQueryString() // Create http query string from object key-value pairs
```

### Arrays

```js
const a = [ 1, 2, 3, 3, 3 ]

let min = a.min()
let max = a.max()
let sum = a.sum()
let avg = a.avg()
let prod = a.prod() // Product of items a*b*c*...
let unique = a.distinct() // Remove duplicates
let clean = a.clean() // Remove falsey values
let removed = a.remove(2) // Remove a value from the array
```

### Promises

```js
// Wait for resolve or timeout
try {
  const res = await fetch('...').resolveOrTimeout(1000)
  console.log(res)
}
catch {
  console.log('Timed out.')
}
```

### ArrayBuffers

```js
const array = new Uint8Array(4)
array.set([0x01, 0x02, 0x03, 0x04])
array.buffer.hex()
```

### Numbers

```js
const a = 12.95

let floor = a.floor() // 12
let pow = a.pow(2, 256) // 175.46
let clamp = a.clamp(15, 20) // 15
let inRange = a.inRange(10, 15) // true
let sqrt = (9).sqrt() // 3
let abs = (-10).abs() // 10
let isInt = a.isInt() // false
let isFloat = a.isFloat() // true
let isClose = a.isClose(10, 2.5) // false
```

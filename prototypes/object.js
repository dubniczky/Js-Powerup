// Prototype extensions for the all objects

/**
 * Convert objcet to json
 */
Object.prototype.json = function(spaces = null) {
    return JSON.stringify(this, null, spaces)
}

Object.prototype.deepCopy = function() {
    return JSON.parse(this.json())
}

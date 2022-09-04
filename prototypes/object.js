// Prototype extensions for the all objects

/**
 * Convert objcet to json
 */
Object.prototype.json = function() {
    return JSON.stringify(this)
}


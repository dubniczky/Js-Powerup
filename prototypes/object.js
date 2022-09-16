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

/**
 * Convert objcet to query string
 * { a:12, b: "abc" } -> "a=12&b=abc"
 * The values inside the objects are converted with implicit string conversion or JSON stringification
 */
Object.prototype.toQueryString = function(useJson = false) {
    return Object.keys(this).map(key => `${key}=${useJson ? JSON.stringify(this[key]) : this[key]}`).join('&')
}

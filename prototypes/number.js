// Prototype extensions for the Number class


/**
 * Return the number without it's fractional part
 */
Number.prototype.floor = function() {
    return this | 0
}

/**
 * Calculate the power of the number to the given exponent modulo the given modulus
 * Default modulo: 1.7976931348623157e+308
 */
Number.prototype.pow = function(exponent, modulo = Number.MAX_VALUE) {
    return this ** exponent % modulo
}

/**
 * Clamps the number between the given min and max values (inclusive)
 *
 * @returns {Number} The clamped number
 */
Number.prototype.clamp = function(min, max) {
    return Math.min(Math.max(this, min), max)
}

/**
 * Returns if the number is between the given min and max values (inclusive)
 */
Number.prototype.inRange = function(min, max) {
    return this >= min && this <= max
}

/**
 * A short-hand for Math.sqrt
 */
Number.prototype.sqrt = function() {
    return Math.sqrt(this)
}

/**
 * A short-hand for Math.abs
 */
Number.prototype.abs = function() {
    return Math.abs(this)
}

/**
 * Check if a number has no fractional part
 */
Number.prototype.isInt = function() {
    return this % 1 === 0
}

/**
 * Check if a number has a fractional part
 */
Number.prototype.isFloat = function() {
    return this % 1 !== 0
}

/**
 * Check if a number is in a specified range from a target value (inclusive)
 */
Number.prototype.isClose = function(target, range) {
    return Math.abs(this - target) <= range
}

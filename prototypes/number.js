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

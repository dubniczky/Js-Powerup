// Prototype extensions for the Number class


/**
 * Return the number without it's fractional part
 */
Number.prototype.floor = function() {
    return this | 0
}

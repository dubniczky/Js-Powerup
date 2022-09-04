// Prototype extensions for the Array class

/**
 * Return the lowest number in the array
 */
Array.prototype.min = function() {
    return this.reduce((smallest, num) => Math.min(smallest, num))
}

/**
 * Return the highest number in the array
 */
Array.prototype.max = function() {
    return this.reduce((smallest, num) => Math.max(smallest, num))
}

/**
 * Return the numberic average of the array
 */
Array.prototype.avg = function() {
    return this.reduce((sum, num) => sum + num, 0) / this.length
}

/**
 * Return a new array with the duplicates removed
 */
Array.prototype.distinct = function() {
    return [...new Set(this)]
}

/**
 * Sum values in the array
 */
Array.prototype.sum = function() {
    return this.reduce((a,b) => a + b, 0)
}

/**
 * Product of the values in the array
 */
 Array.prototype.prod = function() {
    return this.reduce((a,b) => a * b, 1)
}
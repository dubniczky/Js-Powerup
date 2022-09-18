// Prototype extensions for the ArrayBuffer objects


let byteHexMap = null
/**
 * Convert ArrayBuffer to hex string
 */
ArrayBuffer.prototype.hex = function() {
    if (byteHexMap === null) { // Lazy initialization of byteHexMap
        byteHexMap = []
        for (let n = 0; n <= 0xff; ++n) {
            byteHexMap.push( n.toString(16).padStart(2, '0') )
        }
    }

    const buffer = new Uint8Array(this)
    const octets = new Array(buffer.length)

    for (let i = 0; i < buffer.length; ++i)
        octets[i] = byteHexMap[buffer[i]]

    return octets.join('')
}

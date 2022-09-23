/**
 * Wait for promise to resolve or timeout after specified time.
 * In case of a timeout the promise is rejected.
 */
Promise.prototype.resolveOrTimeout = async function(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('timeout')
        }, timeout)
        this.then(resolve)
    })
}

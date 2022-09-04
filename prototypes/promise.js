Promise.prototype.resolveOrTimeout = async function(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('timeout')
        }, timeout)
        this.then(resolve)
    })
}

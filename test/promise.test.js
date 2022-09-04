require('../dist/powerup.js')

describe('Promise.resolveOrTimeout()', () =>
{
    test('Shorter task should succeed', async () => {
        const a = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('success')
            }, 10)
        })
        const b = await a.resolveOrTimeout(30)
        expect(b).toStrictEqual('success')
    })

    test('Longer task should time out', async () => {
        const a = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('success')
            }, 30)
        })

        try {
            const b = await a.resolveOrTimeout(10)
            fail('should have timed out')
        }
        catch (e) {
            expect(e).toStrictEqual('timeout')
        }
    })
})

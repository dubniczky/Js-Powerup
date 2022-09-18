require('../dist/powerup.js')


describe('ArrayBuffer.hex()', () =>
{
    test('empty buffer', () => {
        expect(new ArrayBuffer(0).hex()).toBe('')
    })

    test('consecutive buffer', () => {
        const a = new Uint8Array(4)
        a.set([0x01, 0x02, 0x03, 0x04])
        expect(a.buffer.hex()).toBe('01020304')
    })

    test('null buffer', () => {
        const a = new Uint8Array(10)
        expect(a.buffer.hex()).toBe('00000000000000000000')
    })
})

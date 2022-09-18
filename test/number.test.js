require('../dist/powerup.js');


describe('Number.floor()', () =>
{
    test('integer', () => {
        const a = 5
        expect(a.floor()).toStrictEqual(a)
    })

    test('fractional', () => {
        const a = 3.11
        expect(a.floor()).toStrictEqual(3)
    })

    test('zero', () => {
        const a = 0
        expect(a.floor()).toStrictEqual(0)
    })

    test('negative', () => {
        const a = -1
        expect(a.floor()).toStrictEqual(-1)
    })
})

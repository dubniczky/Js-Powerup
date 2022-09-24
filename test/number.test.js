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

describe('Number.pow()', () =>
{
    test('no modulo', () => {
        const a = 5
        expect(a.pow(3)).toStrictEqual(125)
    })

    test('modulo', () => {
        const a = 5
        expect(a.pow(4, 256)).toStrictEqual(113)
    })

    test('negative modulo', () => {
        const a = 5
        expect(a.pow(4, -256)).toStrictEqual(113)
    })
})

describe('Number.clamp()', () =>
{
    test('inside', () => {
        expect((5).clamp(1, 10)).toStrictEqual(5)
    })

    test('over', () => {
        expect((-3).clamp(-100, -20)).toStrictEqual(-20)
    })

    test('under', () => {
        expect((50).clamp(55, 56)).toStrictEqual(55)
    })
})

describe('Number.inRange()', () =>
{
    test('inside', () => {
        expect((5).inRange(1, 10)).toStrictEqual(true)
    })

    test('over', () => {
        expect((-3).inRange(-100, -20)).toStrictEqual(false)
    })

    test('under', () => {
        expect((50).inRange(55, 56)).toStrictEqual(false)
    })
})

describe('Number.sqrt()', () =>
{
    test('correct', () => {
        expect((9).sqrt()).toStrictEqual(3)
    })
})

describe('Number.abs()', () =>
{
    test('positive', () => {
        expect((9).abs()).toStrictEqual(9)
    })

    test('negative', () => {
        expect((-12).abs()).toStrictEqual(12)
    })

    test('zero', () => {
        expect((0).abs()).toStrictEqual(0)
    })
})

describe('Number.isInt()', () =>
{
    test('int', () => {
        expect((9).isInt()).toStrictEqual(true)
    })

    test('float', () => {
        expect((12.9).isInt()).toStrictEqual(false)
    })
})

describe('Number.isFloat()', () =>
{
    test('int', () => {
        expect((9).isFloat()).toStrictEqual(false)
    })

    test('float', () => {
        expect((12.9).isFloat()).toStrictEqual(true)
    })
})

describe('Number.isClose()', () =>
{
    test('close', () => {
        expect((9).isClose(10, 2)).toStrictEqual(true)
    })

    test('far', () => {
        expect((0).isClose(-4, 2)).toStrictEqual(false)
    })
})

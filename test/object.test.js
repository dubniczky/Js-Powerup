require('../dist/powerup.js')

describe('Object.json()', () =>
{
    test('list', () => {
        expect([1, 2, 3].json()).toBe('[1,2,3]')
    })
    test('dict', () => {
        expect({a:1,b:true}.json()).toBe('{"a":1,"b":true}')
    })
    test('number', () => {
        expect(3.59.json()).toBe('3.59')
    })
})

describe('Object.deepCopy()', () =>
{
    test('different object with same values', () => {
        const a = { foo: 'bar' }
        const b = a.deepCopy()
        expect(a === b).toEqual(false)
        expect(a).toStrictEqual(b)
    })

    test('different array with same values', () => {
        const a = [ 1, 2, 3 ]
        const b = a.deepCopy()
        expect(a === b).toEqual(false)
        expect(a).toStrictEqual(b)
    })

    test('does not work for primitives', () => {
        const a = false
        const b = a.deepCopy()
        expect(a === b).toEqual(true)
        expect(a).toStrictEqual(b)
    })
})

describe('Object.toQueryString()', () =>
{
    test('empty object', () => {
        expect({}.toQueryString()).toBe('')
    })

    test('different object', () => {
        expect({a:1,b:true}.toQueryString()).toBe('a=1&b=true')
    })

    test('different json', () => {
        expect({a:[1,2,3]}.toQueryString(true)).toBe('a=[1,2,3]')
    })
})

require('../dist/powerup.js');

describe('object.json()', () =>
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

describe('object.deepCopy()', () =>
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

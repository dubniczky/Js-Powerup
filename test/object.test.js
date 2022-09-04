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

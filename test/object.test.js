require('../dist/powerup.js');

describe('json()', () =>
{
    test('list', () => {
        expect([1, 2, 3].json()).toBe('[1,2,3]')
    })
    test('dict', () => {
        expect({a:1,b:true}.json()).toBe('{"a":1,"b":true}')
    })
})

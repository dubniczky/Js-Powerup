require('../dist/powerup.js');

const numbers = [ 5, 15, 2, 9, 44.5, 90, 3, -3, 55 ]

describe('Array.min()', () =>
{
    test('correct', () => {
        expect(numbers.min()).toBe(-3)
    })
})

describe('Array.max()', () =>
{
    test('correct', () => {
        expect(numbers.max()).toBe(90)
    })
})

describe('Array.avg()', () =>
{
    test('correct', () => {
        expect(numbers.avg()).toBe(24.5)
    })
})

describe('Array.sum()', () =>
{
    test('correct', () => {
        expect(numbers.sum()).toBe(220.5)
    })
})

describe('Array.prod()', () =>
{
    test('correct', () => {
        expect(numbers.prod()).toBe(-2676341250)
    })
})

describe('Array.distinct()', () =>
{
    test('correct', () => {
        expect([1,2,3,2].distinct()).toStrictEqual([1,2,3])
    })
})

describe('Array.clean()', () =>
{
    test('correct', () => {
        expect([1,undefined,2,null,3,false].clean()).toStrictEqual([1,2,3])
    })
})

describe('Array.remove()', () =>
{
    test('single', () => {
        expect([1,2,3,4,5,6].remove(2)).toStrictEqual([1,3,4,5,6])
    })

    test('multiple', () => {
        expect([1,2,3,4,5,6].remove(2, 3)).toStrictEqual([1,4,5,6])
    })

    test('none', () => {
        expect([1,2,3,4,5,6].remove(null)).toStrictEqual([1,2,3,4,5,6])
    })
})

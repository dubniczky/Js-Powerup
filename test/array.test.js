require('../dist/powerup.js');

const numbers = [ 5, 15, 2, 9, 44.5, 90, 3, -3, 55 ]

describe('array.min()', () =>
{
    test('correct', () => {
        expect(numbers.min()).toBe(-3)
    })
})

describe('array.max()', () =>
{
    test('correct', () => {
        expect(numbers.max()).toBe(90)
    })
})

describe('array.avg()', () =>
{
    test('correct', () => {
        expect(numbers.avg()).toBe(24.5)
    })
})

describe('array.sum()', () =>
{
    test('correct', () => {
        expect(numbers.sum()).toBe(220.5)
    })
})

describe('array.prod()', () =>
{
    test('correct', () => {
        expect(numbers.prod()).toBe(-2676341250)
    })
})

describe('array.distinct()', () =>
{
    test('correct', () => {
        expect([1,2,3,2].distinct()).toStrictEqual([1,2,3])
    })
})
import { analyzeArray } from "../main";

test('[1, 2, 3, 4]', () => {
    const thing = analyzeArray([1, 2, 3, 4]);
    expect(thing.average).toBe(2.5);
    expect(thing.min).toEqual(1);
    expect(thing.max).toEqual(4);
    expect(thing.length).toEqual(4);
})

test('[10, -1, 21, 5, 2]', () => {
    const test = analyzeArray([10, -1, 21, 5, 2]);
    expect(test.average).toEqual(7.4);
    expect(test.min).toEqual(-1);
    expect(test.length).toEqual(5);
    expect(test.max).toEqual(21);
})

test('[1.4, 1.7, 10.2, 21, 100]', () => {
    const test = analyzeArray([1.4, 1.7, 10.2, 21, 100]);
    expect(test.average).toBeCloseTo(26.86);
    expect(test.max).toEqual(100);
    expect(test.min).toEqual(1.4);
    expect(test.length).toEqual(5);
})
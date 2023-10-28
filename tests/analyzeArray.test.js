import { analyzeArray } from "../main";

test('[1, 2, 3, 4]', () => {
    const test = analyzeArray([1, 2, 3, 4]);
    expect(test.average).toBe(2.5);
    expect(test.min).toEqual(1);
    expect(test.max).toEqual(4);
    expect(test.length).toEqual(4);
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

function createRandom() {
    return Math.floor(Math.random() * 100)
}

test('Random array with random size', () =>{
    let arr = []
    for(let x = 0; x < createRandom(); x++){
        arr.push(createRandom());
    }

    let max = arr.reduce((prev, curr) => prev > curr ? prev : curr);
    let min = arr.reduce((prev, curr) => prev < curr ? prev : curr);
    const average = arr.reduce((prev, curr) => prev += curr) / arr.length;
    const test = analyzeArray(arr);

    expect(test.length).toEqual(arr.length);
    expect(test.max).toEqual(max);
    expect(test.min).toEqual(min);
    expect(test.average).toEqual(average);
})
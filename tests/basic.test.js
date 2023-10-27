import { capitalize, reverseString, calc } from "../main";

test("'odin' should equal 'Odin'", () =>{
    expect(capitalize('odin')).toBe('Odin')
})

test("'Jest' to equal 'tseJ'", () =>{
    expect(reverseString('Jest')).toBe('tseJ')
})

test('calc(5,10) to equal 15', () => {
    expect(calc(5,10).add).toEqual(15)
})

test('calc(5,10).multiply to equal 50', () =>{
    expect(calc(5,10).multiply).toEqual(50)
})

test('calc(5,10).subtract to equal -5', () => {
    expect(calc(5,10).subtract).toEqual(-5)
})

test('calc(20,4).divide to equal 5', () => {
    expect(calc(20,4).divide).toEqual(5)
})

test('calc(20,4).multiply to equal 80', () => {
    expect(calc(20,4).multiply).toEqual(80)
})
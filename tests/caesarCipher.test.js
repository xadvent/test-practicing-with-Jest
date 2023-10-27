import { caesarCipher } from "../main";

test("'abc' should equal 'bcd", () => expect(caesarCipher('abc')).toBe('bcd'))

test("'zzZZ' should equal 'aaAA'", () => expect(caesarCipher('zzZZ')).toBe('aaAA'))

test('abcd!-yzx should equal bcde!-zay', ()=> expect(caesarCipher('abcd!-yzx')).toBe('bcde!-zay'))

test('!-. to be !-.', () => expect(caesarCipher('!-.')).toBe('!-.'))

test('Hello World! should be Ifmmp Xpsme!', () => {
    expect(caesarCipher('Hello World!')).toBe('Ifmmp Xpsme!')
})
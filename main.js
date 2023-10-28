export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const reverseString = (string) => string.split('').reverse().join('');

export function calc(a, b) {
    return {
        add: a + b,
        subtract: a - b,
        divide: a / b,
        multiply: a * b
    }
}

export function caesarCipher(string) {
    const alphabet = new Array(...'abcdefghijklmnopqrstuvwxyzaABCDEFGHIJKLMNOPQRSTUVWXYZA');
    let newString = [];
    for (let letter of string.split('')) {
        if (!alphabet.includes(letter)) {
            newString.push(letter);
            continue;
        }
        newString.push(alphabet[alphabet.indexOf(letter) + 1]);
    }

    return newString.join('');
}

export function analyzeArray(arr) {
    const average = arr.reduce((prev, curr) => prev += curr) / arr.length;

    const min = arr.reduce((prev, curr) => {
        return prev < curr ? prev : curr
    })

    const max = arr.reduce((prev, curr) => {
        return prev > curr ? prev : curr
    })

    return {
        average: average,
        min: min,
        max: max,
        length: arr.length
    }
}
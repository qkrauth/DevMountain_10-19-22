// Roman Numerals 

// Difficulty:
// Medium

// Concepts:
// General, Math

// Write a function in romanNumerals.js that converts an integer (<= 1,000) to its Roman numeral equivalent.

// For reference, these are the building blocks for how we encode numbers with Roman numerals:

// For example:

// toRoman(5)
// 'V'
// toRoman(267)
// 'CCLXVII

////////// CODE HERE //////////

const roman = (number) => {
    if (number >= 4000) {
        return "Sorry number is too large";
    }
    let numerals = {
        1: ["I", "V"],
        2: ["X", "L"],
        3: ["C", "D"],
        4: ["M", "placeholder"],
        5: ["placeholder"]
    }
    let numArr = String(number).split("");
    let romanNumeral = "";

    while (numArr.length > 0) {
        let currentPosition = numArr.length
        let currentNum = numArr[0]
        let ones = numerals[currentPosition][0]
        let fives = numerals[currentPosition][1]
        let tens = numerals[currentPosition + 1][0]

        if (currentNum === 9) {
            romanNumeral += ones
            romanNumeral += tens
        } else if (currentNum >= 5) {
            romanNumeral += fives
            romanNumeral += ones.repeat(currentNum - 5)
        } else if (currentNum === 4) {
            romanNumeral += ones
            romanNumeral += fives
        } else {
            romanNumeral += ones.repeat(currentNum)
        }
        numArr.shift()
    }
    return romanNumeral
}
console.log(roman(1998));
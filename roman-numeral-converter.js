// A function to convert arabic numerals to Roman.
function convertToRoman (num) {
  const numeralMapObject = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }
  let romanNumeral = ''
  for (const key in numeralMapObject) {
    const divisionCheck = Math.floor(num / numeralMapObject[key])
    if (divisionCheck >= 0) {
      for (let i = 0; i < divisionCheck; i++) {
        romanNumeral += key
      }
    }
    num = num % numeralMapObject[key]
    console.log(num)
  }
  return romanNumeral
}

console.log(convertToRoman(28))

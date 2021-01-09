// A simple function to check if a string is a palindrome
function palindrome (str) {
  const cleanedString = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase() // Remove non alphanumeric characters with regex
  const equalityCounter = []
  const lastIndex = cleanedString.length - 1
  const countingLimit = Math.floor(cleanedString.length / 2) // check only one half of the string's characters
  for (let j = 0; j <= countingLimit; j++) {
    if (cleanedString[j] === cleanedString[lastIndex - j]) {
      equalityCounter.push(1)
    } else equalityCounter.push(0)
  }
  if (equalityCounter.includes(0)) {
    return false
  }
  return true
}

module.export = palindrome

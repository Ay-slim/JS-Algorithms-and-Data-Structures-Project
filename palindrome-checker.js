function palindrome(str) {
  let cleanedString = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase()
  let equalityCounter = []
  let lastIndex = cleanedString.length - 1
  let countingLimit = Math.floor(cleanedString.length/2)
  console.log(countingLimit)
  for (let j = 0; j<=countingLimit; j++) {
    if (cleanedString[j] === cleanedString[lastIndex-j]) {
      equalityCounter.push(1)
    }
    else equalityCounter.push(0)
  }
  console.log(equalityCounter)
  if (equalityCounter.includes(0)){
    return false
  }
  return true;
}


palindrome('five|\_/|four')
console.log(palindrome("five|\_/|four"));
function rot13(str) {
  const alphabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  let decipheredList = []
  for (let letter in str) {
    if(alphabets.includes(str[letter]) && alphabets.indexOf(str[letter])>=13){
      decipheredList.push(alphabets[alphabets.indexOf(str[letter])-13])
    } else if(alphabets.includes(str[letter]) && alphabets.indexOf(str[letter])<13) {
      decipheredList.push(alphabets[alphabets.indexOf(str[letter])+13])
    } else {
      decipheredList.push(str[letter])
    }
  }
  return decipheredList.join('');
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
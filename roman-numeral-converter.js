function convertToRoman(num) {
  let numeralMapObject = {"M":1000,"CM":900,"D":500,"CD":400,"C":100,"XC":90,"L":50,"XL":40,"X":10,"IX":9,"V":5,"IV":4,"I":1}
  let romanNumeral = ""
  for (let key in numeralMapObject){
    let divisionCheck = Math.floor(num/numeralMapObject[key])
    if(divisionCheck>=0){
        for(let i = 0;i<divisionCheck;i++){
        romanNumeral+=key
        }
    }
    num = num%numeralMapObject[key]
    console.log(num)
  }
  return romanNumeral

}

console.log(convertToRoman(28));
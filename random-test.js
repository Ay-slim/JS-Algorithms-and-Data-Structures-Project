// A function to convert arabic numerals to Roman.
let cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]
changeObj = {}
  for (let j = cid.length-1;j>=0;j--){
    changeObj[cid[j][0]] = cid[j][1]
  }
console.log(changeObj)

function checkCashRegister(price, cash, cid) {
  const dueChange = cash - price;
  const changeObj = {}
  for (let j = cid.length-1;j>=0;j--){
    changeObj[cid[j][0]] = cid[j][1]
  }
  let returnObject = {status: null, change:[]}
  const drawerSum = cid.reduce((acc, current)=>{
    return acc+current[1]
  }, 0)
  if (drawerSum < dueChange){
    returnObject['status'] = 'INSUFFICIENT_FUNDS'
    return returnObject
  }
  if (drawerSum === dueChange){
    returnObject['status'] = 'CLOSED'
    returnObject['change'] = cid
  }
  returnObject['status'] = 'OPEN'
  while (dueChange > 0){

    for (let i in changeObj){
      if (changeObj[i]===0 || dueChange < changeObj[i]){
        returnObject['change'].push([i, changeObj[i]])
      }
      else if (dueChange >= changeObj[i]){
        returnObject['change'].push([i, changeObj[i]])
        dueChange -= changeObj[i]
      }
    }
  }
  return returnObject

}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))

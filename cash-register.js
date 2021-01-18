function checkCashRegister (price, cash, cid) {
  let dueChange = (cash - price) * 100
  const returnObject = {}
  const changeArray = []
  const denominations = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000]
  denominations.reverse()
  const reversedCid = cid.reverse().map(function (currentValue) { return [currentValue[0], currentValue[1] * 100] })
  const drawerSum = reversedCid.reduce((acc, current) => {
    return acc + (current[1])
  }, 0)
  if (drawerSum === dueChange) {
    returnObject.status = 'CLOSED'
    returnObject.change = cid.reverse()
    return returnObject
  }
  console.log(reversedCid)
  for (let j = 0; j < reversedCid.length; j++) {
    let denominationCounter = 0
    while (dueChange >= denominations[j] && reversedCid[j][1] > 0) {
      reversedCid[j][1] -= denominations[j]
      dueChange -= denominations[j]
      denominationCounter += denominations[j]
    }
    if (denominationCounter) {
      changeArray.push([cid[j][0], denominationCounter / 100])
    }
  }
  const totalChange = changeArray.reduce((acc, currValue) => (currValue[1] + acc), 0)
  if (totalChange < (cash - price)) {
    returnObject.status = 'INSUFFICIENT_FUNDS'
    returnObject.change = []
    return returnObject
  }
  returnObject.status = 'OPEN'
  returnObject.change = changeArray
  return returnObject
}

console.log(checkCashRegister(19.5, 20, [['PENNY', 0.5], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 0], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]]))

function fac(num){
  if(num === 1){
    return 1
  }
  else {
    return num * fac( num - 1)
  }
}

function twoReturn(num){
  return num
  return num -1
}

function facWithoutRecursion (num){
  let multiplier = num
  let result = 1

  while (multiplier != 0){
    result *= multiplier
    multiplier -= 1

  }

 return result
}


console.log(facWithoutRecursion(1000))

console.log(fac(1000))

function plus5(num){
  return num + 5
}

function times5(num){
  return num * 5
}

function sayHi(num){
  console.log("Hey There!")
}

console.log( times5(  plus5(4)   )   )
console.log( times5(  sayHi(4)  )   )
console.log(sayHi(4))

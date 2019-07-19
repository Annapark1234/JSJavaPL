var Mamamoo = ["화사","휘인","솔라","문별"]
console.log(Mamamoo[3])
console.log(Mamamoo)

MamamooC = Mamamoo
console.log(MamamooC[3])
console.log(MamamooC)
MamamooC[0] = "청하"
console.log(MamamooC[0])
console.log(MamamooC)
console.log(Mamamoo)
// original array is also modified
// due to the shallow copy  

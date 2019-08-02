const drink = require("./class/drink.js")
const mmt = require("moment")



let lemonAde = new drink.Ade("cube", 300, true, "lemon", true)

console.log(mmt().format("dddd, MMMM Do YYYY, h:mm:ss a"))
console.log(lemonAde.amount)
console.log(drink.myDrink)

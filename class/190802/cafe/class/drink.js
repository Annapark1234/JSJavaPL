class Drink{
  constructor(iceShape,amount,isIce,flavor){
  this.iceShape= iceShape
  this.amount = amount
  this.isIce = isIce
  this.flavor = flavor
  }
}
class Tea extends Drink{
  constructor(iceShape,amount,isIce,flavor,isSweet){
    super(iceShape,amount,isIce,flavor)
    this.isSweet = isSweet

  }
}

class Ade extends Drink{
  constructor(a, b, c, d, isSparkling){
    super(a, b, c, d)
    this.isSparkling = isSparkling

  }
}

class Coffee extends Drink{
  constructor(a, b, c, d, isCaffeine){
    super(a,b,c,d)
    this.isCaffeine = isCaffeine
  }
}

let myDrink = "chocolatte"

module.exports =  { Drink, Tea, Ade, Coffee, myDrink  }

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}


function toFahrenheit(celsius){
  return (9/5) * (celsius) + 32;
}
console.log(toFahrenheit(27))
console.log(toCelsius(80.6))

console.log(  toCelsius(   toFahrenheit(27)    )     )

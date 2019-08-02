class Movie{
  constructor(genre,name,actors){
    this.genre = genre
    this.name = name
    this.actors = actors
    // this.genre = genre
  }

  advertise(name){
    console.log(name + " is the best!")
  }
}

var spiderMan = new Movie("action","Spiderman","Tom Holland")
//{type : "action"}
console.log("genre of this movie is "+spiderMan.genre)
console.log(spiderMan.name)
console.log(spiderMan.actors)

spiderMan.advertise(spiderMan.name)

spiderMan.genre = "comic"

console.log(spiderMan.genre)


// Aladin.
// make instance of Aladin.
// print some information about it.

var aladin = new Movie("fantasy","Aladdin","Naomi Scott")

console.log("This movie is "+ aladin.genre)
console.log(aladin.name)
console.log(aladin.actors)

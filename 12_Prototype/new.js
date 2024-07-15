// let myname = "steve          "
// console.log(myname.truelength) //method---- truelength

let myHeroes =['spiderman','thor']
let heroPower = {
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower: function(){
        console.log(`spidy powetr is ${this.spiderman}`)
    }
}

Object.prototype.ajay = function(){
    console.log("yessssssssssssssss")
}
heroPower.ajay();
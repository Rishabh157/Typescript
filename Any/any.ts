
// when in such situtation where typescript cannot find out that what value is 
// going to come up later on in the future it puts that as any which is king 
// of a get away from doing the things and that is exactly happening up here   

let hero;

function heroName() {
    return "Batman"
}


hero = heroName()          // this shold gave an error because we have not declared the value of hero 


export { }

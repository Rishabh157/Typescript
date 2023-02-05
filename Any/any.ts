
// when in such situtation where typescript cannot find out that what value is 
// going to come up later on in the future it puts that as any which is king 
// of a get away from doing the things and that is exactly happening up here   

let hero;

function heroName() {
    return "Batman"
}


hero = heroName()          // this shold gave an error because we have not declared the value of hero 


export { }

// any is not a special type that you're assigning it's not a String. it's not a Boolean
// any is simplay a marker in the typescript which just simply says that hey i don't want 
// to do type checking for it. basically turn off the type checking for that particular value 
// you don't want that otherwise why you're using typescript.


// the Identity is a function that will return back whatever is passed in.  
function sayHello(msg: string): string {
    return msg
}

// or we can describe the identity of function using by any type but when we use any 
// typescript has no idea what the value is comprised of and the definition or the 
// information about the type is gone in this case

function sayHelloToEarth(msg: any): any {
    return msg
}


// Generic

function sayHelloToCosmos<Type>(msg: Type): Type {
    return msg
}

function sayHelloToCosmosToAnotherCode<T>(msg: T): T {    // this is for the same syntax as line number 18 but short format
    return msg
}

// when we mention the Type it actully says hey this is almost like any i am ready to accept 
// numbers i am ready to accept strings whatever you like so how's its diffrent from any because
// once you pass anything that value type is locked yes this is for the refrence but easy to understand

sayHelloToCosmos('hello world')
sayHelloToCosmos(100)
sayHelloToCosmos(['s', 'd', 3, false])






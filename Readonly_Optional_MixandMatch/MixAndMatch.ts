
// some times we define few properity in types then we realise that hay there should me more 
// properities in the type so we can combine theme togather in the new type 

type Avengers = {
    ceptainamerica: string,
    ironman: string,
    thor?: string,
}


type JustiveLeaguse = {
    batman: string,
    superman: string,
    wonderwoman?: string
}

type AllSuperHeros = Avengers & JustiveLeaguse  // & combine both of types properties in the third one.

let AllSuperHerosObj: AllSuperHeros = {
    ceptainamerica: 'steve roger',
    ironman: 'iron man',
    superman: 'clarck cent',
    batman: 'bruce wyane'
}

console.log(AllSuperHerosObj)

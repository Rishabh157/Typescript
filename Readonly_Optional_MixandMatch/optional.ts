
// if we have multiple value in type or in interface but we have to use only few properites
// but as we know typescript allow us to strictly that you have to use everything that you 
// define in type aliases or interfce but we won't it to use it. so simply we can make those
// proprities optional by using ( ? ).

type SuperHerosMoviesName = {
    ceptainamerica: string,
    ironman: string,
    hulk?: string,
    batman: string,
    superman: string,
    thor?: string,            // ? optional now this property we can use or not ts dosen't give us error
    wolverine?: string,
    deadpool?: string,
    spiderman?: string,
}

let SuperHerosRealName: SuperHerosMoviesName = {
    ceptainamerica: 'Steve Roger',
    ironman: 'Tony Stark',
    batman: 'Bruce Wyane',
    superman: 'Clark Kent',
}

console.log(SuperHerosRealName)

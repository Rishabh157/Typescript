// In Typescript Interface is a Structure which Acts as a contract in our application.

interface Oceans {
    pacificOcean: string,
    hindOcean: string,
    atlanticOcean: string,
    arcticOcena?: string             // it's treat as Optional.
}

let oceans: Oceans = {
    pacificOcean: 'PACIFICOCEAN',
    hindOcean: 'HINDOCEAN',
    atlanticOcean: 'ATLANTICOCEAN',
    arcticOcena: 'ARCTICOCEAN'
}


// if we want to extend the property of the interface we have to use extends 

interface NewOceans extends Oceans {
    anotherOcean: string
}

let allocean: NewOceans = {
    anotherOcean: 'Hello Ocean',
    pacificOcean: 'PACIFICOCEAN',
    hindOcean: 'HINDOCEAN',
    atlanticOcean: 'ATLANTICOCEAN',
    arcticOcena: 'ARCTICOCEAN'
}

console.log(allocean)

// ------------------------------


interface Car {
    readonly brand: string,
    carname: string,
    model?: number,
    start: () => boolean           // it's a Methods that return always as an boolean
    stop(): boolean                // it's also a Methods another way definging that return always as an boolean  
}

let carDetails: Car = {
    brand: 'Tesla',
    carname: 'Tesla Model X',
    start: () => true,
    stop: () => false
}

console.log(carDetails)


// this interface is like our oprating system is an interface for harware it dosen't allow you that when 
// you click a button how does it happen that we don't know and we don't care about it , we just know 
// if i click on this that something is happen if i double click the folder opens up how does it behind the 
// scence what methods are being called we don't care so that is an  INTERFACE. 
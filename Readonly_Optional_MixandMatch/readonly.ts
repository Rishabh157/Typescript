
// Typescript prefix readonly keyword makes properties read-only in the class type aliases or interface
// readonly members can be accessed outside the class, but their values cannot be changed.

type Avengers = {
    readonly teamName: string,
    originalAvengers: string[],
    numberOfAvengers: number,
    isAllActive: boolean,
}

let AvengersData: Avengers = {
    teamName: "Avengers",
    originalAvengers: ['Captain America', 'Thor', 'Iron Man', 'Hawakaye', 'Hulk', 'Black Widow'],
    numberOfAvengers: 6,
    isAllActive: true
}

AvengersData.teamName = 'Justice Leauge'  // here typescript give us error because we made this property in type readonly.
AvengersData.isAllActive = false

console.log(AvengersData)

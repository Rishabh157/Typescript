
// we can use type aliases in one or more functions

type User = {
    username: string,
    userId: string,
    isActive: boolean,
    userCreditScore?: number, // ? means it is optional value if you are pass it or not typescript dosen't give you an error
    user_cvv: number
}


function getUserFullInformation(user: User): User {
    return user
}

let userDetails = {
    username: 'Steve',
    userId: 'dv35sfdd25shs53',
    isActive: true,
    user_cvv: 362,
}

console.log(getUserFullInformation(userDetails))

export {}

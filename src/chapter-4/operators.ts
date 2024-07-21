
type User3 = {
    username?:string;
    age:number;
    // id: ObjectId;
    // car: ObjectId;
    address?: {
        city: string;
    }
};

const myUser: User3 = {
    username:'a',
    age:12
}

// opérateur de chainage optionnel
const city = myUser.address?.city;
console.log(city)

// opérateur de coalessence (si null ou undefined -> guest, si pas null ou pas undefined -> myUser.username)
const username = myUser.username ?? 'guest';
console.log(username)
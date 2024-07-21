const arr3: Array<string> = ['pomme', 'fraise', 'tomate']

const fruit = arr3[0]
fruit.toString()


interface lastUser {
    username: string;
}

const promise: Promise<lastUser> = new Promise((resolve, reject) => {
    resolve({username: 'jean'})
})
 promise.then( res => {
    console.log(res.username)
})


// fonctions et types génériques

interface Fruit {
    name: string,
    price: number
}

interface Carss {
    speed: number
}

const newFruit: Fruit = {
    name: 'banane',
    price: 1
};

const newCars: Carss = {
    speed: 50
}

function addItemToCollection<T>(item: T, collection: Array<T>): Array<T> {
    return [...collection, item];
}

let fruitsArr = addItemToCollection(newFruit, []);
let carsArr = addItemToCollection(newCars, []);

console.log(fruitsArr[0].price)
console.log(carsArr[0].speed)


// avec arrow function

interface removeItemInterface {
    <T>(item: T, collection: Array<T>): Array<T>
}

const removeItemToCollection: removeItemInterface = <T> (item: T, collection: Array<T>) => {
    const collectionWithoutItem = collection.filter((elem) => elem !== item)
    return [...collectionWithoutItem]

}
fruitsArr = removeItemToCollection(newFruit, fruitsArr )
carsArr = removeItemToCollection(newCars, carsArr )

console.log(fruitsArr);
console.log(carsArr);






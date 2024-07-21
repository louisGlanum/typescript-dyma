interface User {
    id:number,
    email: string,
    prenom: string,
    nom: string,
    readonly username: string,
    age: number
    isDrinking?: boolean,
    isHealthy?: boolean,
    isSmoking?: boolean,
    [propName: string]: any // quand on ne connait pas à l'avance toutes les propriétés, à utiliser sur le reste des propriétés qui ne vous servent à rien pour l'application, propName ici est la clé ex: isOffline: true , propName est isOffline (string)
    [propName: number]: any
}

const user: User = {
    id: 0,
    email: "",
    prenom: "",
    nom: "",
    username: 'jean',
    age: 30,
    isDrinking: true,
    isHealthy: false,
    isSmoking: false
}

const newUser: User = {
    id:1,
    email:'paul.castel34@icloud.com',
    username:'Paul',
    prenom:'Paul',
    nom:'Castel',
    age:50,
    isOnline: true,
    1: true,
    2:false
} 

function greet(user: User): void {}



// interface et function/méthode
let func: (param: string) => number;

interface MyFunc {
    (param:string): number 
}
interface Vehicules {
    name: string,
    drive: () => void
}

const coche: Vehicules = {
    name:'peugeot',
    drive:() => {
        console.log('start')
    }
}


// Composition d'interfaces et classes
interface Engines {
    type:string
}
interface Vehiculos {
    name: string,
    drive: () => void
}

interface Cars extends Vehiculos, Engines {
    wheels: number;
}

const newCar: Cars = {
    wheels:4,
    name:'peugeot',
    type:'v8',
    drive:() => console.log("start"),
}

// ou

class Coche implements Vehiculos, Engines {
    constructor(public name:string, public wheels: number, public type: string){

    }
    drive(){
        console.log('start')
    }
}
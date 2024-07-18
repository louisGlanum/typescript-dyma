// public : accessible  et modifiable partout (dedans et en dehors des classes )
// private : accessible uniquement dans la classe, non modifiable dans les classes heritées ou en dehors
// protected: accessible classe et classes herité, modifiable dans la classe et classes herités
// readonly: une fois déclarer ne peut pas être modifié, ou alors 1 fois dans le constructeur d'une classe. 
// static: des propriétes qui ne peuvent pas être modifiées.

abstract class Engine{
    constructor(protected type:string){}

    stopEngine(){
        console.log('stop Engine')
    }

    abstract startEngine(): void;
}

class Vehicule extends Engine {
    wheel =  4;
    private test =  2;
    readonly airbag: boolean;
    protected brand: string;
    protected marque: string = 'PEUGEOT'

    constructor(brand: string, protected color:string,  airbag: boolean = false){ // on passe des arguments dans le constructor quand on besoin de les donner dans l'instanciation de la classe ex: new Vehicule(brand, color, airbag)
        super('v8');
        this.brand = brand;
        this.airbag = airbag;
    }
    
    protected detectMarque(marque:string){
        console.log(marque, this.test)
    }
    startEngine(){
        console.log('start engine')
    }
}

class Voiture extends Vehicule{
    public speed: number;
    public maxSpeed: number = 100;
    static className = 'Vehicule';

    static startCar () {
        console.log('start car')
    }

    move (nbr:number) {
        console.log(this.marque,': car move')
        this.marque = 'tesla'
        console.log(this.marque,': car move')
        this.detectMarque(this.marque)
        console.log(this.airbag)
    }

    stop() {
        console.log('car stop')
    }

    constructor() {
        super('renault','red', true); // pour invoquer le constructor de la class parente
        this.speed = 30;
    }
}

let bus: Voiture; // pour stocker plus tard un objet de type Voiture
const car = new Voiture();
const vehicule = new Vehicule('peugeot','red', true) // brand, color, airbag
// car.move(2);
// Voiture.startCar()
// console.log(car)
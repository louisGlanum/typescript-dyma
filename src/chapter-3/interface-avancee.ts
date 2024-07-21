interface EtreVivant {
    respire:boolean,
}
interface Humain {
    sexe?:string,
}

class EtreVivants implements EtreVivant{
    public respire =  true;
    isWalking() {
        console.log('Etre vivant qui marche')
    }
}

class Humains extends EtreVivants implements Humain{
    constructor( public sexe:string){
        super()
    }
}

class nonBinaire extends Humains {
    constructor(){
        super('default');
    }
}


const jeanJacques = new nonBinaire();
jeanJacques.sexe = 'non binaire'
console.log(jeanJacques)
jeanJacques.isWalking();
interface Bird {
    fly:() => void
}
interface Whale {
    swim: ()=> void
}


/** avec la clé en interface */
function move(a:Bird | Whale) {
   if('fly' in a){
    a.fly();
   }else{
    a.swim();
   }
}
//*** avec le typeof */
function foo2(a: string | number ) {
    if(typeof a === 'string'){}
}


/** pour les class */
class A {
    getA(){}
}
class B {
    getB(){}
}

const a = new A();
const b = new B();

function bar(a: A | B){
    if(a instanceof A){
        a.getA()
    }else{
        a.getB()
    }
}

/*** avec une fonction de vérification à utiliser dans une condition */
function isBird(x: Whale | Bird): x is Bird{
    return (x as Bird).fly !== undefined;
}
function move2(a:Bird | Whale) {
    if(isBird(a)){
     a.fly();
    }else{
     a.swim();
    }
 }





// typage de base
function add (nbr1: number, nbr2: number): number {
    return nbr1 + nbr2
}
add(1, 3)

// typer avant une déclaration
let sub: (nbr1:number, nbr2:number) => number; 
sub = (a:number, b:number) => {
    return a + b;
};

// les paramètres optionnels
function multiply(a:number, b?:number, c?:number): number {
    if(b && c){
        return a * b * c;
    }else{
        return a;
    }
}
multiply(1)

// paramètres par défaut et rest
function add2(...numbers: Array<number>) {
    numbers.reduce((acc, i) => {
        acc += i;
        return acc;
    }, 0);
}
add2(1,2,2,4,5)


// implémentation de la même fonction mais qui prend différent typage
function maFonction(param: string): string;
function maFonction(param: number): number;
function maFonction(param: boolean): boolean;
function maFonction(param: any): any {
    return param;
  }
console.log(maFonction(2))
//exemple avec user

interface User {
    id: number,
    email:string,
    prenom:string,
    nom:string,
}

function getUser(id:number): User;
function getUser(email:string): User;
function getUser(prenom:string, nom:string): User;

function getUser(param1:number | string, param2?:string):User {
    let user: User;

    if(typeof param1 === 'number'){
        //récupère le user par id;
        user={id:1, email:"louis.castel34@icloud.com", prenom:'louis',nom:'castel'}

    }else if (typeof param2 != 'undefined'){
        // recupère le user par pre-énom et nom
        user={id:1, email:"louis.castel34@icloud.com", prenom:'louis',nom:'castel'}

    }else{
        // recupère le user par email
        user={id:1, email:"louis.castel34@icloud.com", prenom:'louis',nom:'castel'}
    }
    return user;
}

getUser('louis', 'castel');
getUser('louis.castel34@icloud.com');
getUser(1233455);
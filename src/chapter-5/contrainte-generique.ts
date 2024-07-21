
// extends = contrainte

interface Name {
    name: string,
}
interface Utilisateur {
    name:string,
    surname:string,
}
const utilisateur: Utilisateur = {
    name:"castel",
    surname: 'louis'
}
function displayName<T extends Name>(object: T) {
    console.log(object.name);
}

// ici ça marche car utilisateur a une propriété 'name' et c'est la seule contrainte que la fonction à besoin pour fonctionner
displayName(utilisateur)

/***
 * 
 * 
 * 
 */


// ici U doit obligatoirement être une des propriétés de T
function displayProp<T, U extends keyof T>(object: T, prop: U){
    console.log(object[prop]);
}

displayProp({price:50, name:"castel"}, 'name');
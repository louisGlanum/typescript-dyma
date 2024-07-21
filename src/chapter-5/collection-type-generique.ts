

// READONLY Readonly<T>(permet de bloquer une interface des modifications)
interface Utilisateur2 {
    username: string,
};
const newUtilisateur2: Readonly<Utilisateur2> = {
    username: 'jean'
}
// cannot reassign 
newUtilisateur2.username = 'louis';











// PARTIAL & REQUIRED Partial<T> Required<T> (permet d'utiliser partiellement un objet, au lieu de le redéfinir completement)
interface Utilisateur3 {
    username: string,
    age: number,
    address:{
        city: string,
    }
}

const newUtilisateur3: Utilisateur3 = {
    username:'jean',
    age:12,
    address:{
        city: 'agde'
    }
};

function editUser (user: Utilisateur3, editedUser: Partial<Utilisateur3>) {
    return {...user, ...editedUser};
};
editUser(newUtilisateur3, { age:20 });


function editUser2(user: Utilisateur3, editedUser: Required<Utilisateur3>) {
    return {...user,...editedUser};
}
editUser2(newUtilisateur3,{username:'louis', age:12, address:{city:'Montpellier'}})









// RECORD Record<K,T>(permet de définir des patterns à l'intérieur des objets)
interface Page {
    title:string,
}

type PageType = 'home' | 'about' | 'contact'

const pages: Record<PageType, Page> = {
    home:{
        title:'homepage'
    },
    about:{
        title:'about'
    },
    contact:{
        title:'contact'
    }
}


// PICK & OMIT Pick<K,T> Omit<T, K>(permet de redéfinir un type avec une référence d'une interface, en sélectionnant ce que l'on veut garder ou enlever)

interface Utilisateur4 {
    username: string,
    age: number,
    address:{
        city: string,
    }
}
type LightUtilisateur4 = Pick< Utilisateur4, "username" | "age" >; // sélectionne ce que l'on veut garder
type LightUtilisateur5 = Omit< Utilisateur4, "address" >; // sélectionne ce que l'on veut enlever








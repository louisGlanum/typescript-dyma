/***
 * 
 * 
 * 
 * 
 *  L'UN ET L'AUTRE = INTERSECTION
 * 
 * 
 */
interface User1{
    username:string,
}

interface Moderator {
    deleteMessage: ()=> void;
    editMessage: ()=> void;
}

interface AddContent {
    addMessage: ()=> void;
}

/** Option 1  , on obitens une dépendance entre les interfaces*/
interface basicUser extends User1, AddContent {}
interface basicAdmin extends User1, AddContent, Moderator {}


/* Option 2 , pas de dépendance entre les interfaces puisqu'on les spécifies une à une*/
let newUser1: User1 & AddContent = {
    username:'jean',
    addMessage:()=> {}
}

let newAdmin1: User1  & Moderator & AddContent = {
    username: 'admin',
    addMessage:()=> {},
    deleteMessage:()=> {},
    editMessage:()=> {},
}
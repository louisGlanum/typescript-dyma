// primitif
let foo_number: number = 1;
let foo_string: string = "une string";
let foo_boolean: boolean = false;
let foo_equality: boolean = 1 === 1;

// object array (de base)
let obj: object = { name: "jean" };
let obj2: object = ["name", "jean"];
let obj3: object = new Map();

// any and unique
let anything: any = {};
let unique: "5" = "5";

// array & tupple
let arr: number[] = [1, 2, 3];
let arr2: Array<string> = ["un", "deux", "trois"];
let tupple: [number, number, string] = [4.98879, 45.987665, "coordonnee"];

// null & undefined
let foo_null: null = null;
let foo_undefined: undefined = undefined;

// function
function add(nbr1: number, nbr2: number): number{
    return 5;   
}
function _void(): void{
    console.log('pas de return');
}

function _never(error: any): never{
    throw new Error(error);
}
/***
 * 
 * 
 * 
 * 
 *  L'UN OU L'AUTRE = UNION
 * 
 * 
 */






const userStatus: 'online'| 'offline'| 'busy'  = 'online';

let value: number | string;
value = 1;
value = 'hello';


interface Inter1 {
    type: 'car';
    seat: number
    drive:  () => void

}
interface Inter2 {
    type: 'truck';
    seat: number;
    load:(amount: number) => void
    drive:  () => void
}

const var1: Inter1 | Inter2 = {
    type:'truck',
    seat: 4,
    load: (amount: number): void => {},
    drive: () => {}
} 

var1.seat = 2;

function func1(type: 1 | 2): Inter1 | Inter2  {
    if(type === 1){
        return {
            type:'car',
            seat:4,
            drive: () => {}
        }
    }else{
        return{
            type:'truck',
            seat: 2,
            load: (amount: number): void => {},
            drive: () => {}
        }
    }
}

const foo = func1(2)

if(foo.type === 'truck'){
    foo.load(123)
}

function startTrip(v: Inter1 | Inter2){
    switch(v.type){
        case 'car':{
            v.drive()
            break;
        }

        case 'truck':{
            v.drive();
            v.load(123)
            break;
        }
    }
}
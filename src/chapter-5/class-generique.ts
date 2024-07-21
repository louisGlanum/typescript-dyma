


//class
class Stack<T> {
    items: T[] = [];

    push(item: T): void{
        this.items.push(item)
    }
    pop(): T | undefined {
        return this.items.pop();
    }
    display(): void{
        console.log(this.items)
    }
}

//number
const newStackNumber = new Stack<number>();
newStackNumber.push(1);
newStackNumber.display();
newStackNumber.push(2);
newStackNumber.display();
const mynumber = newStackNumber.pop();
newStackNumber.display();
console.log(mynumber)

// string
const newStackString = new Stack<string>();
newStackString.push('hello');
newStackString.display();
newStackString.push('world');
newStackString.display();
const mystring = newStackString.pop();
newStackString.display();
console.log(mystring)


class Person3 {
    private name : string;
    public age : number;
    readonly log : string;

    constructor(name:string, age: number) {
        this.name = name;
        this.age = age;
    }
}

// generics - ㅎ출하는 시점에 타입 정의(중복제거에 이점)
function logoText<T>(text : T): T {
    console.log(text);
    return text;
}

const str2 = logoText<string>('hello');
str2.split('');

const num2 = logoText<number>(3);
num2.toString();

// 제네릭 타입 제한
interface LengthType {
    length : number;
}

function logTextLength<T extends LengthType>(text: T): T {
    text.length;
    return text;
}
logTextLength({length : 7});

// 제네릭 타입 제한 keyof - 키로만 제한
interface ShoppingItem {
    name : string;
    price : number;
    stock : number;
}

function getShoppingItem<T extends keyof ShoppingItem>(itemOption : T): T {
    return itemOption;
}

getShoppingItem('name');
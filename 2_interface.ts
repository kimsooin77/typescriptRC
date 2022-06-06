interface User2 {
    age : number;
    name : string;
}

let insoo : User2 = {
    age : 22,
    name : 'insoo'
}

function getUser(user: User2) {
    console.log(user)
}

const capt = {
    name : '캡틴',
    age : 100
}

getUser(capt);

interface SumFunc {
    (a : number, b: number):number;
}

let sumFunc : SumFunc;
sumFunc = (a: number, b : number):number => {
    return a + b;
}

// 딕셔너리 패턴
interface StringRegex {
    [key : string] : RegExp
}

let obj2 : StringRegex = {
    cssFile : /\.css$/,
}

// 인터페이스 확장
interface Person {
    name : string;
    age : number;
}

interface Developer extends Person {
    language : string;
}

let user3 : Developer = {
    language : 'ts',
    age : 20,
    name : '사용자'
}


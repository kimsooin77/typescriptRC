// 문자열, 숫자, 배열
let str:string = 'hello';
let num:number = 10;
let arr:Array<number> = [1,2,4];
let arr2:number[] = [2,3,4];

// 튜플, 객체, 진위값
let add: [number,string] = [1,"world"];
let obj:object  = {};
let person: {name : string, age : number} = {
    name : 'capt',
    age : 10,
};
let bool:boolean = true; 

// 함수 - 파라미터, 반환값
function add2(a:number, b:number):number {
    return a + b;
}
add2(10,20);

// 옵셔널 파라미터
function log(a:string, b?: string) {
    return a + b;
}
log("hello", "world")
log("hello")
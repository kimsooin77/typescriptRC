// 타입 추론 1
var a = 'abc';

// 함수 getB hover 시 반환값은 string이라는 것을 알 수 있다.
function getB(b = 10){
    const c = 'hi';
    return b + c;
}

// 타입 추론 2
interface DropDown<T> {
    value : T;
    title : string;
}

// vaule의 값을 할당하기 전 제네릭형식이 string으로 지정되어있으므로 
// value의 형식은 string이라는 것을 알 수 있다.
let shoppingItem: DropDown<string> = {
    value : 'movie',
    title : 'titanic'
}

// 타입 추론 3
interface DropDown<T> {
    value : T;
    title : string;
}

interface DetailDropdown<K> extends DropDown<K> {
    description : string;
    tag : K;
}

// DetailDropDown의 제네릭의 타입에 따라 Dropdown의 제네릭 타입까지 영향을 줌
const DetailedItem : DetailDropdown<string> = {
    title : 'abc',
    description : 'efg',
    value: 'lorem',
    tag : 'sooin',
}

// 타입스크립트가 타입을 추론하는 경우
// 1. 초기화된 변수
// 2. 기본값이 설정된 매개 변수
// 3. 반환 값이 있는 함수

// type Assertions(타입 단언)

// 프로그래머가 타입스크립트보다 타입에 대해 더 잘 이해하고 있는 상황에서 타입 단언을 한다.
function someFunc(val : string | number, isNumber : boolean) {
    if(isNumber) {
        val.toFixed(2) // Property 'toFixed' does not exist on type 'string'
    }
}
// 프로그래머는 isNumber가 true일 경우 val이 number라는 것을 알고 있지만 
// 타입스크립트는 알지 못해 string일 경우 toFixed 속성이 없다는 에러를 발생시킴.

function someFunc2(val : string | number, isNumber : boolean) {
    if(isNumber) {
        (val as number).toFixed(2);
    }
}

// as로 val이 number 타입일 것이다라고 단언함.
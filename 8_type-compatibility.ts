// 타입 호환

// 함수
let add = (a : number) => {

}

let sum = (a : number, b : number) => {

}

// 구조가 더 작은 범위에서 큰 범위로 할당이 가능하지만(호환) 그 반대는 안됨(호환X).
sum = add;
// add = sum;

// 제네릭
interface Empty<T> {

}

let empty1 : Empty<string>;
let empty2 : Empty<number>;

empty1 = empty2;
empty2 = empty1; // interface Empty는 비어있기 때문에 호환가능

interface NotEmpty<T> {
    data : T;
}

let notEmpty1 : NotEmpty<string>;
let notEmpty2 : NotEmpty<number>;

// interface NotEmpty안에는 data라는 속성이 있기 때문에 두 변수는 호환이 되지 않음.
// notEmpty1 = notEmpty2;
// notEmpty2 = notEmpty1;
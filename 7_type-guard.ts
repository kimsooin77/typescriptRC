interface Developer {
    name : string;
    skill : string;
}

interface Person {
    name : string;
    age : number;
}

function introduce(): Developer | Person {
    return {name: 'Tony', age : 33, skill : 'Iron Making'}
}

const tony = introduce();
// console.log(tony.skill)

// 유니온 타입은 기본적으로 공통된 속성에만 접근이 가능하다. 

if((tony as Developer).skill) {
    var skill = (tony as Developer).skill;
}else if((tony as Person).age) {
    var age = (tony as Person).age;
}

// 타입 가드 정의 ( 위의 코드를 타입 가드로 정의하면 아래와 같이 바꿀 수 있음 )
function isDeveloper(target: Developer | Person): target is Developer {
    return (target as Developer).skill !== undefined;
}
// taget이 Developer라고 가정을 했을 때 skill이 있으면 target은 Developer이다.

if(isDeveloper(tony)) {
    tony.skill
}else {
    tony.age
}
// Union type
function logMessage(value : string | number) {
    console.log(value);
}

logMessage('hello');
logMessage(200);

// intersection type
interface Person {
    name : string;
    age : number;
}

interface Person2 {
    name : string;
    male : boolean;
}

function askSomeone(someone : Person & Person2) {
    someone.name;
    someone.age;
    someone.male;
}
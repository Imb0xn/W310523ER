// Call back training


function print(a_variable) {
    console.log(a_variable);
    console.log(a_variable());
}


let age = function(n) {
    return `my age is ${n}!`;

}

function print (param1) {
    console.log("age? " + param1);
}

print(age(30));


let num = 5;
print(num);

num = { age: 24, name: 'Tomer'};
print(num);

num = function() {
    return `my age is!`;
}

print(num);


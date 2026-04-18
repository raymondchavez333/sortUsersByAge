let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

function sortByAge(users){
    let ages = users.map(item => item.age);
    ages.sort(function(a,b){return a - b;});

    let first = users.find(item => item.age == ages[0]);
    let second = users.find(item => item.age == ages[0]);
    let third = users.find(item => item.age == ages[0]);

    let sortedArray = {};
    return ages;
}
alert(sortByAge(arr));

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete
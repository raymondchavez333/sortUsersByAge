let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

function sortByAge(users){
    let ages = users.map(item => item.age);
    let sortedAges = ages.sort(function(a,b){return a - b;});

    let first = users.find(item => item.age == sortedAges[0]);
    let second = users.find(item => item.age == sortedAges[1]);
    let third = users.find(item => item.age == sortedAges[2]);

    arr = [first, second, third];
    return arr;
}

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete
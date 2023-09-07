"use strict";
const friends = ["Michael", "steven", "peter"];
const friends2 = ["Neha", "kia,'Jeeya"];

//concat method

console.log(friends.concat(friends2));

const friends3 = ["jonas", "nick", "kiyan"];
console.log(friends3.concat(friends2, friends));

//join
console.log(friends3);
console.log(friends3.join());

//splice
const friend = friends3.concat(friends2, friends);
console.log(friend);
//Adding using splice
friend.splice(2, 0, "Mehek", "Karan");
console.log(friend);

//Remove using splice
friend.splice(2, 4);
console.log(friend);

//tostring Method
friends.toString();
console.log(friend);

//slice method
const friend4 = friends3.concat(friends2, friends);
console.log(friend4);
const new1 = friend4.slice(2, 5);
console.log(new1);

const friend5 = friends3.concat(friends2, friends);
console.log(friend5);
const new2 = friend5.slice(-6, -1);
console.log(new2);

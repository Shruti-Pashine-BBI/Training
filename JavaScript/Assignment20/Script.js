const friends = ["Michael", "steven", "peter"];
console.log(friends);

//Add Element-push method
friends.push("jay");
console.log(friends);

//unshift method
friends.unshift("john");
console.log(friends);

//Delete Element-pop method
friends.pop();
console.log(friends);

friends.unshift();
console.log(friends);

friends.shift();
console.log(friends);

//index
console.log(friends.indexOf("steven"));
console.log(friends.indexOf("bob"));
console.log(friends.indexOf("peter"));

friends.push(23);

//includes method
console.log(friends.includes("steven"));
console.log(friends.includes("bob"));
console.log(friends.includes("23"));
console.log(friends.includes(23));

if (friends.includes("peter")) {
  console.log("Exists");
}

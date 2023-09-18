let obj = {
  name: "John",
  ip: "3765",
  age: 23,
  gender: "male",
};
console.log(obj);
obj.data = [1, 2, 3];
console.log(obj);

delete obj.gender;
console.log(obj);

let obj1 = Object.create({
  name: "John",
  ip: "3765",
  age: 23,
  gender: "male",
});
console.log(obj1);
obj1.data = [123, 34, 23];
console.log(obj1);
delete obj1.gender;
console.log(obj1);

let obj3 = Object.create(obj);
console.log(obj3);

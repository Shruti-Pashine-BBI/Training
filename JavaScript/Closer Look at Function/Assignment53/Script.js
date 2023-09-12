function makeFunc() {
  let count = 0;
  const name = "Mozilla";
  function displayName() {
    console.log(`${count++} ${name}`);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();
myFunc();

myFunc();
console.dir(myFunc);

const firstname = "Shruti";
const job = "Software Engineer";
const birthyear = 2001;
const currentyear = 2023;

const shruti =
  "I'm " +
  firstname +
  ", a " +
  (currentyear - birthyear) +
  " years Old " +
  job +
  " !";
console.log(shruti);

const newvalue = `I'm ${firstname} , a ${
  currentyear - birthyear
} years Old ${job}  !`;
console.log(newvalue);

//newlines
console.log(`string \n multiple \n lines`);

console.log(`string 
 multiple 
  lines`);

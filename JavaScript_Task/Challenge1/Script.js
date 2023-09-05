/* Write your code below. Good luck! 🙂 */

const massMark = 78;
const heightMark = 1.69;
const BMIMARK = massMark / (heightMark * heightMark);

const massJohn = 92;
const heightJohn = 1.95;
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMARK);
console.log(BMIJohn);

const markHigherBMI = BMIMARK >= BMIJohn;
console.log(markHigherBMI);

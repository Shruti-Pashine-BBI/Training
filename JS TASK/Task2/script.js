function stringManipulation(str) {
  //reverse
  const strnew = str.split("").reverse().join("");
  console.log(strnew);

  //   console.log(str);
  //uppercase
  const strnew1 = strnew[0].toUpperCase() + strnew.substr(1);
  console.log(strnew1);
  //palindrome
  if (strnew === str) {
    console.log("Its Palindrome");
  } else {
    console.log("Not Palindrome");
  }
  //ount vowel
  const count = str.match(/[aeiou]/gi).length;
  console.log(count);
  //Replace
  const strnew2 = str.replaceAll("e", "X");
  console.log(strnew2);
}
stringManipulation("Level");

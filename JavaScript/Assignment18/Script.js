function cut(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applejuice = cut(apples);
  const orangejuice = cut(oranges);
  const juice = `Juice with ${applejuice} apples and ${orangejuice} oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 4));

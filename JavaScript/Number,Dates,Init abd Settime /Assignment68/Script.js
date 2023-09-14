console.log(2 === 2.0);
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

//Conversion
console.log("23");
console.log(Number("23"));
console.log(+"23");

//Parsing
console.log(Number.parseInt("23px", 10));
console.log(Number.parseInt("23px", 10));
console.log(Number.parseInt("2e3px", 10));
console.log(Number.parseInt("20.55", 10));
console.log(parseInt("23px", 10));
console.log(+parseInt("23px", 10));
console.log(Number.parseFloat("23px", 10));
console.log(Number.parseFloat("20.09", 10));

//isNan
console.log(Number.isNaN("20.09"));
console.log(Number.isNaN("20"));
console.log(Number.isNaN(20));
console.log(Number.isNaN(+"20x"));
console.log(Number.isNaN(20 / 3));

//isfinite
console.log(Number.isFinite("20.09"));
console.log(Number.isFinite("20"));
console.log(Number.isFinite(20));
console.log(Number.isFinite(+"20x"));
console.log(Number.isFinite(20 / 3));

//isinteger
console.log(Number.isInteger("20.09"));
console.log(Number.isInteger("20"));
console.log(Number.isInteger(20));
console.log(Number.isInteger(+"20x"));
console.log(Number.isInteger(20 / 3));

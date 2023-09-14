const a = new Intl.DateTimeFormat("en-US");
console.log(a.format(new Date()));
const b = new Intl.DateTimeFormat("es");
console.log(b.format(new Date()));
const c = new Intl.DateTimeFormat(undefined);
console.log(c.format(new Date()));
const d = new Intl.DateTimeFormat("en-US");
console.log(a.format(new Date()));

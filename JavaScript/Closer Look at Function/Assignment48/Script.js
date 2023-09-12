const flight = "LH123";
const jonas = {
  name: "Jonas Brahim",
  passport: 23454678778789,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "Lh0099"; //different Variable

  passenger.name = `Mr. ` + passenger.name;

  if (passenger.passport === 23454678778789) {
    alert("Check In");
  } else {
    alert("Wrong Passport");
  }
};
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};
newPassport(jonas);
checkIn(flight, jonas);

const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins > 2 * avgKoalas) {
    console.log(`Koalas win (${scoreDolphins} vs. ${scoreKoalas}`);
  } else if (avgKoalas > 2 * avgDolphins) {
    console.log(`Koalas win (${scoreKoalas} vs. ${scoreDolphins}`);
  } else {
    console.log(`No team wins...`);
  }
}

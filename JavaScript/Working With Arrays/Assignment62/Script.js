const move = [200, 450, -400, 3000, -650, -130, 70, 1300];
const newmov = 1.1;
const movement = move
  .filter((mov) => mov > 0)
  .map((mov) => mov * newmov)
  .reduce((acc, mov) => acc + mov, 0);

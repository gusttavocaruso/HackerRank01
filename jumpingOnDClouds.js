function jumpingOnClouds(c) {
  let jumps = 0;
  let i = 0;

  do {
    jumps += 1;
    i = c[i + 2] === 0 ? i + 2 : i + 1
  } while( i < c.length - 1);

  return jumps;
}

const way1 = [0, 0, 1, 0, 0, 1, 0];
const way2 = [0, 0, 0, 0, 1, 0];
console.log(jumpingOnClouds(way1));


/*
There is a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 1 or 2. 
The player must avoid the thunderheads. Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud. It is always possible to win the game.

For each game, you will get an array of clouds numbered 0 if they are safe or 1 if they must be avoided. */

function countingValleys(_steps, path) {
  const eachPath = path.split('');
  let way = [];
  let initial = 0;
  let seaLevel = 0;
  let valley = 0;

  eachPath.forEach((path) => {
    path === 'U' ? way.push(+1) : way.push(-1);
  })

  way.forEach((w) => {
    initial === 0 ? seaLevel = 1 : '';
    initial += w;


    if (initial < 0 && seaLevel === 1) {
      seaLevel = 0;
      valley += 1
    }
  });

  return valley;
}

const steps = 8;
const path = 'DDUUDDUDUUUD';

console.log(countingValleys(steps, path));

/* An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly steps, for every step it was noted if it was an uphill, U , or a downhill, D step. Hikes always start and end at sea level, and each step up or down represents a 1 unit change in altitude. We define the following terms:

A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
Given the sequence of up and down steps during a hike, find and print the number of valleys walked through. */

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

// const wayUP = [];
// const wayDOWN = [];
// const completWay = [];

// eachPath.map((pth, ind) => {
//   pth === 'U' ? wayUP.push([ind, 1]) : wayDOWN.push([ind, -1]);
// })

// wayUP.forEach((wd) => completWay.push(wd));
// wayDOWN.forEach((wd) => completWay.push(wd));

// // console.log(wayUP);
// // console.log(wayDOWN);
// console.log(completWay)
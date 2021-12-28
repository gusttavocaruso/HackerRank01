function countingValleys(steps, path) {
  const eachPath = path.split('');
  let way = [];
  let initial = 0;
  const valley = [];

  eachPath.forEach((path) => {
    path === 'U' ? way.push(+1) : way.push(-1);
  })

  way.forEach((w) => {
    initial += w;
    console.log('init', initial)
    initial < 0 ? valley.push(1) : ''
  })

  console.log('caminho', way);
  // console.log('initial', initial);
  console.log('vale', valley)
  // return valley;
}

const steps = 8;
const path = 'UDDDUDUU';

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
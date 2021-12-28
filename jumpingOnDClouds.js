function jumpingOnClouds(c) {
  const eachStep = c.split(' ');
  console.log(eachStep)
  let jumps = 0;

  eachStep.map((stp, i) => {
    console.log('nuvemN', i, 'cloudsget', Number(stp));
    (Number(stp) + 1) === i || (Number(stp) + 2) === i ?
    jumps += 1 : ''
  });

  return jumps;
}

const way = '0 0 1 0 0 1 0';
console.log(jumpingOnClouds(way));

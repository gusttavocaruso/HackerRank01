function catAndMouse(x, y, z) {
  let distanceCat1 = Math.abs(x - z);
  let distanceCat2 = Math.abs(y - z);

  if (distanceCat1 < distanceCat2) return 'Cat A';
  if (distanceCat2 < distanceCat1) return 'Cat B';
  return 'Mouse C';
}

console.log(catAndMouse(1, 2, 3));

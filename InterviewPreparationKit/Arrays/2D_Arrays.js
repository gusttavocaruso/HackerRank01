function hourglassSum(arr) {
  // Write your code here

}

let arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

console.log(hourglassSum(arr));

/*
We should keep in mind that the numbers inside the array can be negative and therefore we can use one of the following ways to account for that:

EITHER Set initial maxSum to -63 like so let maxSum = -63. -63 is the maximum negative sum that can be reached based on the algorithm constrains (-9 * 7 numbers in the hourglass)
OR if (maxSum < sum || i === 0 && j == 0) {maxSum = sum;} to make sure we set maxSum to sum on the very first iteration
OR if (maxSum === undefined || maxSum < sum) {maxSum = sum;} (used in the solution below) which, similarly to the second way, will set the maxSum to sum on the very first iteration, when maxSum is undefined
*/

/*
function main() {
  let arr = Array(6); // typeof arr -> 'object'

  for (let i = 0; i < 6; i++) {
    arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
  }

  let maxSum;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let sum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] // 1st row
        + arr[i + 1][j + 1] // 2nd row
        + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]; // 3rd row

      if (maxSum === undefined || maxSum < sum) {
        maxSum = sum;
      }
    }
  }
  console.log(maxSum);
}
*/
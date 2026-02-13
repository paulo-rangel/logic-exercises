/* 
name: diagonalDifference
date: 13-02-2026
platform: hackerHank
link: https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true
*/
function diagonalDifference(arr) {
  let [lToRDiagonal, rToRDiagonal] = [0, 0];
  for (let [i, z] = [0, 0]; i < arr.length && z < arr[0].length; i++, z++) {
    lToRDiagonal += arr[i][z];
    rToRDiagonal += arr[i][arr[i].length - 1 - z];
  }
  return Math.abs(lToRDiagonal - rToRDiagonal);
}

/*
name: mini max sum
date: 02-25-2026
platform: hackerrank
link: https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true
*/

function miniMaxSum(arr) {
  arr.sort();
  let min = arr.slice(0, arr.length - 1).reduce((x, y) => x + y);
  let max = arr.slice(1, arr.length).reduce((x, y) => x + y);
  console.log(min + " " + max);
}

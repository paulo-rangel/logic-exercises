/*
name: compare the triplets
date: 02-07-2026
platform: hackerrank
link: https://www.hackerrank.com/challenges/a-very-big-sum/problem
*/


function aVeryBigSum(ar) {
  let long = 0n;
  ar.forEach((x) => {
    long += BigInt(x);
  });
  return long;
}

/* 
name: simpleArraySum
date: 01-20-2026
platform: hackerrank
link: https://www.hackerrank.com/challenges/simple-array-sum/problem?isFullScreen=true
*/

function simpleArraySum(ar) {
  let n = 0;
  ar.forEach((i) => {
    n += i;
  });
  return n;
}

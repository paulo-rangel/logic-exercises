/*
name: plusMinus
date: 02-16-2026
platform: hackerhank
link: https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=false
*/

function plusMinus(arr) {
  const cls = [0, 0, 0];
  arr.forEach((x) => {
    cls[0] += x > 0 ? 1 : 0;
    cls[1] += x < 0 ? 1 : 0;
    cls[2] += x === 0 ? 1 : 0;
  });
  cls.forEach((x) => {
    console.log((x / arr.length).toFixed(6));
  });
}

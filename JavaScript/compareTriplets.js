/*
name: compare the triplets
date: 02-05-2026
platform: hackrrank
link: https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true
*/
function compareTriplets(a, b) {
let scores = [0, 0];
a.forEach((x, i) => {
    if (x === b[i]){
        return
    }
    else if(x > b[i]){
        scores[0]++
    }else{
        scores[1]++
    }
})
return scores
}

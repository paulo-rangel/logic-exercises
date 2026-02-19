/*
name: staircase
date: 19-02-2026
platform: hackerhank
link: https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true
*/
function staircase(n) {
    let stair = '';
    for(let i = n-1;i >= 0; i--){
        stair += ' '.repeat(i) + '#'.repeat(n-i) + (i == 0?'':'\n'); 
    }
    console.log(stair);
}

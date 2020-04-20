'use strict';
const memo = new Map();
memo.set(0,0);
memo.set(1,1);

function fib(n) {
    if(memo.has(n)){
        return memo.get(n);
    }
    const value = memo.get(n-1) + memo.get(n-2);
    memo.set(n,value);
    return value;
}

const length = 40;
for(let i=0; i<=length; i++){
    console.log(fib(i));
}
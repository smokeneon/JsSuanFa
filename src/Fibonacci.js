//方法一
// function fibonacii(n){
//     if(n === 1){
//         return 1;
//     }
//     if(n === 2){
//         return 2;
//     }
//     if(n > 2){
//         return fibonacii(n-1) + fibonacii(n-2);
//     }
// }

// 方法二
// function fibonacii(n){
//     let res = new Array(n+1).fill(0);
//     res[1] = 1;
//     res[2] = 2;
//     for(let i=3;i<n+1;i++){
//         res[i] = res[i-1] + res[i-2];
//     }
//     return res[n]
// }

//方法三
let cache = {};

function fibonacii(n){
   if (!(n in cache)){
    cache[n] =  _fibonacii(n);
   }

   return cache[n]
   
}
function _fibonacii(n){
    if(n === 1 || n === 2){
        return n;
    }else{
        return fibonacii(n-1) + fibonacii(n-2);
    }
}

export default fibonacii;
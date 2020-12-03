/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if(n <= 2) {
        return 0;
    }
    let result = 1;
    for(let i=3; i<n; i += 2){
        let flag = false;
        for(let j=3; j<=i; j += 2){
            if(i !== j && i%j == 0){
                flag = true;
                break;
            }
        }
        if(!flag){
            result++;
        }
    }
    return result;
};

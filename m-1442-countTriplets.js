/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function(arr) {
    let result = 0;
    const len = arr.length
    for(let i=0; i<len-1; i++) {
        for(let j=i+1; j<len; j++) {
            for(let k=j; k<len; k++) {
                let a=b=0;
                for(let index=i; j-index > 0; index++) {
                    a ^= arr[index]
                }
                for(let index=j; index <= k; index++) {
                    b ^= arr[index]
                }
                if(a === b) {
                    result++;
                }
            }
        }
    }
    return result
};

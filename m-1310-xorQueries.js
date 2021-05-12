/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
    let result = []
    queries.forEach(item => {
        const left = item[0];
        const right = item[1];
        let num = 0;
        if (left === right) {
            num = arr[left];
        } else {
            for(i=left; i<=right; i++) {
                num ^= arr[i];
            }
        }
        result.push(num);
    })
    return result;
};

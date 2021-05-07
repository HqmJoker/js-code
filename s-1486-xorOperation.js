/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let result = start;
    let i = 1;
    while(i < n) {
        const num = start + 2 * i;
        result ^= num;
        i++;
    }
    return result
};

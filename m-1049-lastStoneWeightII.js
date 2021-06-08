/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
    let resultArr = [stones[0]];
    for(let i=1, len=stones.length; i<len; i++) {
        let newArr = [];
        for(let j=0; j<resultArr.length; j++) {
            if(!newArr.includes(resultArr[j] + stones[i])) {
                newArr.push(resultArr[j] + stones[i])
            }
            if(resultArr[j]>stones[i]) {
                if(!newArr.includes(resultArr[j] - stones[i])) {
                    newArr.push(resultArr[j] - stones[i])
                }
            } else {
                if(!newArr.includes(stones[i] - resultArr[j])) {
                    newArr.push(stones[i] - resultArr[j])
                }
            }
        }
        resultArr = newArr;
    }
    return Math.min(...resultArr)
};

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 * 解题思路：
 *   直接两重循环，列出符合条件的下标，如果没有则返回-1
 * 
 */
var canCompleteCircuit = function(gas, cost) {
    let gasAll = gas.reduce((a,b) => a+b , 0)
    let costAll = cost.reduce((a,b) => a+b , 0)
    if(costAll > gasAll){
        return -1;
    }
    let len = gas.length;  // 加油站个数
    for(let i=0; i<len; i++){
        let gasCount = gas[i];  // 汽车当前汽油数,初始化值为当前加油站值
        if(gas[i] < cost[i]){
            continue;
        }
        for(let j=i; j<len+i; j++){
            gasCount -= cost[j%len];
            if(gasCount < 0){
                gasCount = -1;
                break;
            }
            gasCount += gas[(j+1)%len];
        }   
        if(gasCount >= 0){
            return i;
        }
    }
    return -1;
};

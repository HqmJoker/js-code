/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let keyMap = {}
    for(let i=0, len=nums.length; i<len; i++) {
        if(!keyMap[nums[i]]) {
            keyMap[nums[i]] = 1
        } else {
            keyMap[nums[i]] ++
        }
    }
    for(let key in keyMap) {
        if(keyMap[key] === 1) {
            return key
        }
    }
};

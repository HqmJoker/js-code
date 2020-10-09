/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(!s.length){
        return 0;
    }
    let arr = "";
    let max = 0;
    for(let i=0; i<s.length; i++){
        arr += s[i];
        for(let j=arr.length-2; j>=0; j--){
            if(arr[j] === s[i]){
                arr = arr.slice(j+1)
                break;
            }
        }
        if(max<arr.length){
            max = arr.length
        }
    }
    return max;
};

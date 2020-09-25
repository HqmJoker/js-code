/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0){
        return ""
    }
    let result = strs[0];
    for(let i=1, len=strs.length; i<len; i++){
        let tempResult = "";
        for(let j=0,len1=strs[i].length; j<len1; j++){
            if(strs[i][j] === result[j]){
                tempResult += result[j];
            }else{
                result = tempResult;
                break;
                if(result){
                    return ""
                }
            }
        }
        result = tempResult;
    }
    return result;
};
/*
输入: ["flower","flow","flight"]
输出: "fl"

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
*/

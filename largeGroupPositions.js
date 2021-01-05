/**
 * @param {string} s
 * @return {number[][]}
 * 
"aaa"
 */
var largeGroupPositions = function(s) {
    let result = [];
    let stask = [s[0]];
    let startIndex = 0;
    for(let i=1,len=s.length; i<len; i++) {
        let staskLen = stask.length;
        if(stask[staskLen-1] !== s[i] ) {
            if(staskLen !== 1 && i-1-startIndex>1) {
                result.push([startIndex, i-1]);
            }
            startIndex = i;
            stask = [s[i]];
        }else {
            stask.push(s[i]);
        }
    }
    return result;
};

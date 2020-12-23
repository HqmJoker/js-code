/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let mapStr = {};
    let len = s.length;
    let result = -1;
    for(let i=0; i<len; i++) {
        if(mapStr[s[i]]) {
            continue;
        }else if(s.indexOf(s[i], i+1) !== -1) {
            mapStr[s[i]] = 1;
        }else{
            result = i;
            break;
        }
    }
    return result;
};

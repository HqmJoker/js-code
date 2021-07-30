/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    const startCode = 'A'.charCodeAt();
    let strMap = {};
    let result = 0;
    for(let i=0; i<26; i++) {
        const key = String.fromCharCode(startCode+i);
        strMap[key] = i+1;
    }
    const len = columnTitle.length-1;
    for(let i=len; i>=0; i--) {
        result += Math.pow(26, len-i) * strMap[columnTitle[i]]
    }
    return result
};

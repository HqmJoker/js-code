/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let len = s.length;
    let mapStr = {};
    for(let i=0; i<len; i++) {
        if(!mapStr[s[i]]) {
            mapStr[s[i]] = 1;
        }else{
            mapStr[s[i]]++;
        }
    }
    for(let i=0; i<len+1; i++) {
        if(!mapStr[t[i]]) {
            return t[i];
        }else{
            mapStr[t[i]]--;
        }
    }
    return ''
};

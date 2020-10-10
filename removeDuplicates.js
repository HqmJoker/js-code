/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    if(S.length > 20000 || S.length<1){
        return;
    }
    let stack = [];
    for(let i=0; i<S.length; i++){
        if(stack.length && stack[stack.length-1] === S[i]){
            stack.pop()
        }else{
            stack.push(S[i]);
        }
    }
    return stack.join("");
};

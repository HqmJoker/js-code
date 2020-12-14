var groupAnagrams = function(strs) {
    let result = [];
    if(strs.length === 0){
        return [[]]
    }
    let mapKey = {};
    strs.forEach((str, index) => {
        sortStr = str.split("").sort().join("");
        if( mapKey[sortStr] ){
            mapKey[sortStr].push(str);
        }else{
            mapKey[sortStr] = [str];
        }
    })
    for(let key in mapKey){
        result.push(mapKey[key])
    }
    return result
};

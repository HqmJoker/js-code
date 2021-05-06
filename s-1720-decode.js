/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    let result = [first]
    encoded.forEach((num, index) => {
        result.push(num^result[index])
    })
    return result
};

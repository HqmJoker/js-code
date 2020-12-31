/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    const len = intervals.length;
    if(len < 2) {
        return 0
    }
    let reslut = 0;
    intervals = intervals.sort((a, b) => a[1]-b[1])
    let max = intervals[0][1];
    for(let i=1; i<len; i++) {
        if(max <= intervals[i][0]) {
            max = intervals[i][1];
        }else {
            reslut++;
        }
    } 
    return reslut
};

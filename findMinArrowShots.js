/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    if(points.length === 0){
        return 0;
    }
    points = points.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
    let result = 1;
    let shotPoint = points[0][1];
    for(let i=1; i<points.length; i++){
        if(shotPoint < points[i][0]){
            shotPoint = points[i][1];
            result++;
        }else if(shotPoint > points[i][1]){
            shotPoint =  points[i][1];
        }
    }
    return result;
};

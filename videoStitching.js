/**
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 *  1：[0,10]
 *  2：[[0,9],[9,10]]  [[0,8],[8,10]]  [[0,7],[7,10]]....
 *  3：[[0,8],[8,9],[9,10]]  [[0,7],[7,9],[9,10]]  [[0,6],[6,9],[9,10]]....
 *  dp(n) = dp(n-1)+1, dp(n-1)
 *  dp(0) = 1
 *  dp(1) = 1
 */
var videoStitching = function(clips, T) {
    clips = clips.sort((a, b) => a[0]===b[0]?a[1]-b[1]:a[0]-b[0]);
    console.log(clips)
    let result = 0;
    let max = 0;
    for(let i=0; i<clips.length; ){
        let tempMax = max;
        let isAddOne = false;
        while(i < clips.length && clips[i][0] <= max){
            if(clips[i][1] > tempMax){
                console.log(i, clips[i][1], tempMax, result)
                isAddOne = true;
                tempMax = clips[i][1]
            }
            i++;
        }
        max = tempMax;
        if(isAddOne){
            result++;
        }else{
            i++;
        }
        if(max >= T){
            break;
        }
    }
    if(clips[0][0] > 0 || max < T){
        return -1
    }
    return result;
};

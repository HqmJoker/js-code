var monotoneIncreasingDigits = function(N) {
    // 若N<10表示只有一位数，直接返回
    if(N < 10) {
        return N;
    }
    let numArr = N.toString().split('').map(num => Number(num) );  // 切分一个数字为数组 332 -> [3, 3, 2]
    let len = numArr.length;
    for(let i=0; i<len-1; i++) {
        // 当数字前一位大于后一位时，需要把前一位--,并把后面所有数字最大化，即设为9
        // 同时由于前面的位数已经--,需要重新对数组进行判断，即把i重置为-1
        // （其实也可以记录当前下标，重新判断i--位置（前一个）和当前位置的关系）
        if(numArr[i] > numArr[i+1]) {
            numArr[i]--;
            i++;
            while(i < len) {
                numArr[i] = 9;
                i++;
            }
            if(i) { // 当i不为0时需要重置下标
                i = -1;  // 此处要重置下标为-1,因为本次循环后会执行i++,若直接重置为0会出现++后i=1直接跳过第二轮0位置的判断
            }
        }
    }
    return numArr.join("")
};

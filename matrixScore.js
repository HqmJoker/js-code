/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function(A) {
    let rowsLen = A.length;
    let colsLen = A[0].length;
    let rowNumberOne = [];
    let col0Number = [];
    let result = 0;

    for(let i=0; i<rowsLen; i++){
        if(!A[i][0]){
            col0Number.push(i)
        }
    }
    // console.log(col0Number)
    if(col0Number.length){
        if(col0Number.length === rowsLen){
            for(let i=0; i<rowsLen; i++){
                A[i][0] = 1;
            }
        }else{
            for(let i=0; i<col0Number.length; i++){
                for(let j=0; j<colsLen; j++){
                    A[col0Number[i]][j] = (A[col0Number[i]][j]+1)%2;
                }
            }
        }
    }
    rowNumberOne.push(rowsLen)

    for(let i=1; i<colsLen; i++){
        let numberOne = 0;
        for(let j=0; j<rowsLen; j++){
            if(A[j][i]){
                numberOne++;
            }
        }
        rowNumberOne.push(numberOne)
    }
    // console.log(A)
    // console.log(rowNumberOne)

    for(let i=0; i<colsLen; i++){
        if(rowNumberOne[i] < rowsLen/2){
            rowNumberOne[i] = rowsLen - rowNumberOne[i];
        }
        // console.log(rowNumberOne[i], Math.pow(2, colsLen-i-1))
        result += rowNumberOne[i]*Math.pow(2, colsLen-i-1);
    }
    return result;
};

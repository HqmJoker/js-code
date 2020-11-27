/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    // let result = 0;
    // let len = A.length;
    // for(let i=0; i<len; i++){
    //     for(let j=0; j<len; j++){
    //         for(let k=0; k<len; k++){
    //             for(let l=0; l<len; l++){
    //                 if( !(A[i] + B[j] + C[k] + D[l]) ){
    //                     result ++;
    //                 }
    //             }
    //         }
    //     }
    // }
    // return result;
    let result = 0;
    let len = A.length;
    let E = {};
    let F = {};
    for(let i=0; i<len; i++){
        for(let j=0; j<len; j++){
            let numE = A[i] + B[j]
            let numF = C[i] + D[j]
            if(!E[numE]){
                E[numE] = 1;
            }else{
                E[numE]++;
            }

            if(!F[numF]){
                F[numF] = 1;
            }else{
                F[numF]++;
            }
        }
    }
    for(let itemE in E){
        for(let itemF in F){
            if( !(itemE + itemF) ){
                result += E[itemE] + F[itemF]
            }
        }
    }
    return result;
};

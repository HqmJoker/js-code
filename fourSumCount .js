/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    let result = 0;
    let len = A.length;
    let E = {};
    let F = {};
    for(let i=0; i<len; i++){
        for(let j=0; j<len; j++){
            let numE = A[i] + B[j]
            let numF = C[i] + D[j]
            if(!E[-numE]){
                E[-numE] = 1;
            }else{
                E[-numE]++;
            }

            if(!F[numF]){
                F[numF] = 1;
            }else{
                F[numF]++;
            }
        }
    }
    console.log(E,F)
    for(let itemE in E){
        if( F[itemE] ){
            result += F[itemE] * E[itemE]
        }
    }
    return result;
};

// var fourSumCount = function(A, B, C, D) {
//     let result = 0;
//     let len = A.length;
//     let E = {};
//     let F = {};
//     for(let i=0; i<len; i++){
//         for(let j=0; j<len; j++){
//             let numE = A[i] + B[j]
//             let numF = C[i] + D[j]

//             if(!E[numE]){
//                 E[numE] = 1;
//             }else{
//                 E[numE]++;
//             }

//             if(!F[numF]){
//                 F[numF] = 1;
//             }else{
//                 F[numF]++;
//             }
//             console.log(numE, numF)
//             if(E[-numF]){
//                 result += E[-numF];
//             }

//             if(F[-numE]){
//                 result += E[-numF];
//             }
//         }
        
//     }
//     console.log(E, F)
//     return result;
// };

/**
 * @param {string} senate
 * @return {string}
 * 解题思路：
 *   判断当前位置是'R'还是'D'
 *      如果是'R' 
 *          找出所有'D'的位置
 *              如果为D[]为空则返回'Radiant'，找到D[]中大于'R'下标的第一个D[i]删除，若D[i]中不存在,则删除D[0]
 */             
var predictPartyVictory = function(senate) {
    senate = senate.split("");
    while(senate.length > 0){
        for(let i=0; i<senate.length; i++){
            switch (senate[i]){
                case 'R':
                    if(!senate.includes('D')){
                        return 'Radiant'
                    }
                    if(senate.indexOf('D', i) == -1){ // 找不到后面存在的'D'
                        senate.splice(senate.indexOf('D'), 1);  // 删除从0开始的第一个'D'
                        i--;
                    }else{
                        senate.splice(senate.indexOf('D', i), 1);
                    }
                break;
                case 'D':
                    if(!senate.includes('R')){
                        return 'Dire'
                    }
                    if(senate.indexOf('R', i) == -1){
                        senate.splice(senate.indexOf('R'), 1);
                        i--;
                    }else{
                        senate.splice(senate.indexOf('R', i), 1);
                    }
                break;
            }
        }
    }
};

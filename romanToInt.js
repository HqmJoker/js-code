/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0;
    for(let i=0, len=s.length; i<len; i++){
        switch(s[i]){
            case 'I':  //1
                if(s[i+1] === 'V'){
                    i++;
                    result += 4;
                }else if(s[i+1] === 'X'){
                    i++;
                    result += 9;
                }else{
                    result += 1;
                }
            break;
            case 'V':  //5
                result += 5
            break;
            case 'X': //10
                if(s[i+1] === 'L'){
                    i++;
                    result += 40;
                }else if(s[i+1] === 'C'){
                    i++;
                    result += 90;
                }else{
                    result += 10;
                }
            break;
            case 'L':  //50
                result += 50
            break;
            case 'C':  //100
                if(s[i+1] === 'D'){
                    i++;
                    result += 400;
                }else if(s[i+1] === 'M'){
                    i++;
                    result += 900;
                }else{
                    result += 100;
                }
            break;
            case 'D':  //500
                result += 500;
            break;
            case 'M':  //1000
                result += 1000;
            break;
            default: break;
        }
     }
    return result
};

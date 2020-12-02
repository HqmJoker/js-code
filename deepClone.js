//自定义一个深拷贝递归函数
 function deepClone(obj){
        let clone = Array.isArray(s)?[]:{};
        for (const key in obj) {
            let item = obj[key];
            if(item){
                //实现方法的克隆
                if(item instanceof Function){
                    clone[key] = new Function('return '+item.toString())()
                }
                else if(item instanceof Object ){
                    clone[key] = deepClone(item);
                }
                else {
                    clone[key] = item;
                }
            }
        }
        return clone;
    }

var eventualSafeNodes = function(graph) {
    let len = graph.length;
    let formatGraph = [];
    let workStack = [];
    let result = [];
    for(let i=0; i<len; i++) {
        const data = {
            value: i,
            outDegCount: graph[i].length,
            outDegArr: graph[i]
        }
        formatGraph.push(data);
        if(graph[i].length === 0) {
            workStack.push(i);
        }
    }
    while(workStack.length) {
        const safeNode = workStack.pop();
        for(let i=0; i<len; i++) {
            if(formatGraph[i].outDegArr.includes(safeNode)) {
                formatGraph[i].outDegCount--;
                if(!formatGraph[i].outDegCount) {
                    workStack.push(i)
                }
            }
        }
    }
    for(let i=0; i<len; i++) {
        if(formatGraph[i].outDegCount === 0) {
           result.push(formatGraph[i].value)
        }
    }
    return result
};

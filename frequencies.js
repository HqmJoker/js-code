const frequencies = arr =>
  arr.reduce((a, v) => {
    a[v] = a[v] ? a[v] + 1 : 1;
    return a;
  }, {});
  
 frequencies(['a', 'b', 'a', 'c', 'a', 'a', 'b']); // { a: 4, b: 2, c: 1 }

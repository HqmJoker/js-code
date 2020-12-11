# 一些常用的代码片段
## [查看更多](https://www.30secondsofcode.org/js/s/omit-by)
## objectToQueryString
把object转换成QueryString格式
## clipboard
点击复制功能
## mostFrequent
统计数组中出现次数最多元素
## reducedFilter
过滤出对象自定义字段
## frequencies
统计数组字符出现次数
## filterObject
过滤出对象符合条件项
## omit
移除对象中指定key的项
## longestCommonPrefix
计算数组字符串中最长公共字符串
## capitalize
增加首字母大写函数
## reverseWords
增加翻转字符串函数
## lengthOfLongestSubstring
从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度
## removeDuplicates
删除字符串中的所有相邻重复项
## 实现简单评分效果
```
var rate = 3
"★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate)
```
## 金钱格式化代码
### 使用正则
```
var test1 = '1234567890'
var format = test1.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

console.log(format) // 1,234,567,890
```
### 非正则
```
 function formatCash(str) {
 return str.split('').reverse().reduce((prev, next, index) => {
  return ((index % 3) ? next : (next + ',')) + prev
 })
}
console.log(formatCash('1234567890')) // 1,234,567,890
```
### css一行文本超出显示...
```
overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
```
### css多行文本超出显示...
```
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;  // 控制显示文本行数，3代表文本超出3行显示...
overflow: hidden;
```
### 判断某年当月有多少天
```
/**
 * ex : new Date(2020, 11, 0).getDate()  // 30
 * ex : new Date(2020, 12, 0).getDate()  // 31
 */
function getMonthCountDay (year, month) {
  return new Date(year, month, 0).getDate()
}
```

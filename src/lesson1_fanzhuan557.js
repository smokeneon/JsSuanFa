/**
 * 
 * @param {字符串} str 
 * 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

示例 1:

输入: "Let's take LeetCode contest"
输出: "s'teL ekat edoCteeL tsetnoc" 
注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-words-in-a-string-iii

 */

//方法一
// function fanzhuan557(str){
//     return str.split(' ').map((item)=>{
//         return item.split('').reverse().join('');
//     }).join(' ');
// }

//方法二 使用正则
// function fanzhuan557(str) {
//     return str.split(/\s/g).map((item) => {
//         return item.split('').reverse().join('');
//     }).join(' ');
// }

//方法三　使用match识别单词 \w就是识别单词加‘
function fanzhuan557(str) {
    return str.match(/[\w']+/g).map((item) => {
        return item.split('').reverse().join('');
    }).join(' ');
}

export default fanzhuan557;
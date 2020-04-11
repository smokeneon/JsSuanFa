import fanzhuan557  from '../src/lesson1_fanzhuan557';

test('给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。', () => {
  expect(fanzhuan557("Let's take LeetCode contest")).toBe("s'teL ekat edoCteeL tsetnoc");
})
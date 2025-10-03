function reverseWords(s: string): string {
    const words = s.split(' ');
    const reversedArr = words.map((word) => Array.from(word).reverse().join(''))
    return reversedArr.join(' ');
}

reverseWords("Let's take LeetCode contest") //"s'teL ekat edoCteeL tsetnoc"
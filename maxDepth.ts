// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses

function getArrayDepth(arr: []) {
    let depth = 1;
    let maxDepth = 1;

    function traverse(arr: [], currentDepth: number) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                currentDepth++;
                maxDepth = Math.max(maxDepth, currentDepth);
                traverse(arr[i], currentDepth);
                currentDepth--;
            }
        }
    }

    traverse(arr, depth);
    return maxDepth;
}

function maxDepth(s: string): number {
    let count = 0;
    let leftParenthesis = 0
    let rightParenthesis = 0
    const sArr = [...s]
    console.log(sArr)
    // for (let el of s) {
    //     //el какой-то элемент строки, например число 3
    // }
    for (let i = 0; i < sArr.length; i++) {
        if (s[i] === "(") {
            sArr.splice(i, 1, "[")
            leftParenthesis++;
            // s.slice(i, 1);
            // break;
        }
    }
    for (let i = s.length; i > 0; i--) {
        if (s[i] === ")") {
            sArr.splice(i, 1, "]")
            rightParenthesis++;
            // s.slice(i, 1);
            // break;
        }
    }
    console.log(sArr)

    const str = sArr.join('').replace(/\s+/g, '');
    const result = eval(`[${str}]`);
    console.log(result)
    console.log(leftParenthesis)
    console.log(rightParenthesis)
}

// maxDepth("(1+(2*3)+((8)/4))+1") //3
maxDepth("()(())((()()))") //3
// const arr = [['1'], '+', [['2']], '+', [[['3']]]]

//Вернуть глубину вложенности. Глубина вложенности — это максимальное количество вложенных скобок
//Глубина любого символа в VPS равна
// (количество левых скобок перед ним) - (количество правых скобок перед ним)
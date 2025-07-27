function createCounter(initialValue = 0) {
    let count = initialValue
    return {
        increment: () => count++,
        decrement: () => count--,
        getValue: () => count,
        reset: () => (count = initialValue),
    }
}

const func = createCounter();
console.log(func.increment());
console.log(func.increment());

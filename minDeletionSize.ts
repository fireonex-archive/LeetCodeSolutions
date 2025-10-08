function minDeletionSize(strs: string[]): number {
    let counter = 0;

    for (let col = 0; col < strs[0].length; col++) {
        const column = strs.map(str => str[col]);

        const sorted = [...column].sort();
        const isSorted = column.join('') === sorted.join('');

        if (!isSorted) {
            counter++;
        }
    }

    return counter;
}

minDeletionSize(["cba","daf","ghi"]) //1

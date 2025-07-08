function getNumericMonth(monthAbbr: string) {
    return (String(
        ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            .indexOf(monthAbbr) + 1).padStart(2, '0'))
}

function reformatDate(date: string): string {
    const splitDate = date.split(' ');
    const year = splitDate[2]
    const month = getNumericMonth(splitDate[1])
    let day = ""
    for (let el of splitDate[0]) {
        if (/[0-9]/.test(el)) {
            day += el
        }
    }
    if (day.length < 2) day = "0" + day

    return `${year}-${month}-${day}`
}

reformatDate("20th Oct 2052")//"2052-10-20"
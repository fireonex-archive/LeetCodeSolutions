function countStudents(students: number[], sandwiches: number[]): number {
    while (students.includes(sandwiches[0])) {
        if (students[0] === sandwiches[0]) {
            students.splice(0, 1)
            sandwiches.splice(0, 1)
        } else {
            students.push(students[0])
            students.splice(0, 1)
        }
    }
    return students.length
}

countStudents([1, 1, 0, 0], [0, 1, 0, 1]) //0

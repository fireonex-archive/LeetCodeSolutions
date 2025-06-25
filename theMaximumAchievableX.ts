function theMaximumAchievableX(num: number, t: number): number {
    while (t) {
        num = num + 2
        t--
    }
    return num
}

theMaximumAchievableX(4, 1) //6
theMaximumAchievableX(3, 2) //7

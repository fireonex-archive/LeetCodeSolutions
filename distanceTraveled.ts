function distanceTraveled(mainTank: number, additionalTank: number): number {
    let kmCount = 0
    let spentMainFuel = 0
    while (mainTank) {
        mainTank--
        spentMainFuel++
        kmCount += 10
        if (spentMainFuel % 5 === 0 && additionalTank) {
            additionalTank--
            mainTank++
        }
    }

    return kmCount
}

distanceTraveled(5, 10) //60
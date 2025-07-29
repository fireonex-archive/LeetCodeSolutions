function countTestedDevices(batteryPercentages: number[]): number {
    let testedDevicesCounter = 0
    for (let i = 0; i < batteryPercentages.length; i++) {
        const deviceBattery = batteryPercentages[i]
        if (deviceBattery > 0) {
            testedDevicesCounter++
            for (let j = i + 1; j < batteryPercentages.length; j++) {
                const newBatteryValue = batteryPercentages[j] - 1 > 0 ? batteryPercentages[j] - 1 : 0
                batteryPercentages.splice(j, 1, newBatteryValue)
            }
        }
    }
    return testedDevicesCounter
}

countTestedDevices([1, 1, 2, 1, 3]) //3
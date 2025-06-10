function countTime(time: string): number {
    const [hoursPart, minutesPart] = time.split(':');

    let hoursOptions = 1;
    if (hoursPart === '??') {
        hoursOptions = 24;
    } else {
        if (hoursPart[0] === '?') {
            if (hoursPart[1] === '?') {
            } else {
                const secondDigit = parseInt(hoursPart[1]);
                if (secondDigit <= 3) {
                    hoursOptions = 3;
                } else if (secondDigit <= 9) {
                    hoursOptions = 2;
                }
            }
        }
        if (hoursPart[1] === '?') {
            const firstDigit = hoursPart[0];
            if (firstDigit === '?') {
            } else if (firstDigit === '2') {
                hoursOptions *= 4;
            } else {
                hoursOptions *= 10;
            }
        }
    }

    let minutesOptions = 1;
    if (minutesPart === '??') {
        minutesOptions = 60;
    } else {
        if (minutesPart[0] === '?') {
            minutesOptions *= 6;
        }
        if (minutesPart[1] === '?') {
            minutesOptions *= 10;
        }
    }

    return hoursOptions * minutesOptions;
}

countTime("?5:00") //2
countTime("??:??") //24 возможных варианта выбора для часов
// и 60 возможных вариантов выбора для минут. Всего у нас есть 24 * 60 = 1440 вариантов выбора.
function licenseKeyFormatting(s: string, k: number): string {
    const sArr = s.toUpperCase().replace(/-/g, '').split('').reverse()
    let currentLengthCounter = 0;
    const resultArr = []
    for (let i = 0; i < sArr.length; i++) {
        if (currentLengthCounter < k) {
            resultArr.push(sArr[i]);
            currentLengthCounter++
        } else {
            currentLengthCounter = 0
            resultArr.push("-");
            resultArr.push(sArr[i]);
            currentLengthCounter++
        }
    }

    return resultArr.reverse().join("");
}


licenseKeyFormatting("5F3Z-2e-9-w", 4) //"5F3Z-2E9W"
licenseKeyFormatting("2-5g-3-J", 2) //"2-5G-3J"

//Вам задан лицензионный ключ в виде строки s,
// состоящей только из буквенно-цифровых символов
// и дефисов. Строка разделена на n + 1 групп с
// помощью n дефисов. Вам также задано целое число k.
//
// Необходимо преобразовать строку s таким образом,
// чтобы каждая группа содержала ровно k символов,
// за исключением первой группы, которая может быть
// короче, но должна содержать хотя бы один символ.
// Кроме того, между группами должен быть вставлен
// дефис, а все строчные буквы нужно преобразовать в прописные.
//
// Верните преобразованный лицензионный ключ.
/**
 * Подсчёт суммы всех баллов студентов
 * @param {Object.<string, number>} - Объект с никнеймом студента и числом баллов
 * @returns {number} - Сумма баллов студентов
 */
function getScore(students) {
    let sum = 0;
    for (let nickname in students) {
        sum += students[nickname];
    }
    return sum;
}

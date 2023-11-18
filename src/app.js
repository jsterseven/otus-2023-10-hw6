/**
 * Подсчёт суммы всех баллов студентов
 * @param {Object.<string, number>} - Объект с никнеймом студента и числом баллов
 * @returns {number} - Сумма баллов студентов
 */
function getScore(people) {
    let sum = 0;
    for (let nickname in people) {
        sum += people[nickname];
    }
    return sum;
}

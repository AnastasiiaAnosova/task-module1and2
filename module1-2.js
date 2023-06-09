// Напиши программу, котра отримує від користувача
//  *?      число (кількість хвилин) і виведе у консоль
//  *?      Рядок у форматі годин і хвилин
//  *?      https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
//  *?      70 === 01:10

function normalizeFormatTime() { 
    const userData = +prompt("Enter required minutes");
    // робимо перевірку на NaN
    if (isNaN(userData)) { 
        alert("Your data is not valid");
    }
    /**
     * нам потрібно дві змінні:
     * в першу будемо отримувати хвилини, поділимо на 60, таким чином отримаємо години
     * в другу змінну будемо записувати залишок від ділення, таким чином отримаємо хвилини
     */

    const hours = String(Math.floor(userData / 60)).padStart(2, 0);
    const minutes = String(userData % 60).padStart(2, 0);
    //шаблоний рядок через інтерполяцію
    console.log(`your time is ${hours}:${minutes}`);
    alert(`your time is ${hours}:${minutes}`);//на даний момент виводить 1:7, без нулів, тому обгортаємо Math.floor(userData / 60) у String та викликаємо padStart()

    console.log(userData);
    console.log(typeof userData);

    /**тут в консоль буде виводитись тип String, так як поки що ми ніяк не приводити дані до типу Number
     * приведення можна зробити: 
     * 1) через унарний + поставити його злівої частини значення/змінної 
     * 2) через Number()
     * 3)ParsInt()
     */
}

normalizeFormatTime();

/**
 * console.log(typeof NaN);// виведе тип Number
   console.log(typeof null);// виведе тип Object 
 */

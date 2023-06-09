const arr = ['BEST', 'the', 'foo', 'is', 'JS']
/**
 * Напиши функцію, яка отримує масив вирізає фу та розвертає масив і створює рядок
 */

function editArray(array,str) {
    //створюємо змінну, яка буде розгортати наш масив
    const revArr = [...array].reverse();
    console.log(revArr);
    const idxStr = revArr.indexOf(str);
    console.log(idxStr);
    //вирізаємо спочатку індекс а потім кількість
    const delElemt = revArr.splice(idxStr, 1);
    console.log(delElemt);
    const resultStr = revArr.join(' ');
    alert(resultStr);
    return resultStr;
}

console.log(editArray(arr, 'foo'));


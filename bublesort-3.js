// https://www.youtube.com/watch?v=nSkKB0i8Kno&t=113s&ab_channel=ArnaldoJunior

function bubbleSort(array) {
    let q = 0;
    let trocou = false;

    console.log('Inicial: ' + array);
    for (let x=0; x<array.length-1; x++) {
        for (let y=0; y<array.length-x-1; y++) {
            // se o valor for maior
            if (array[y] > array[y+1]) {
                let temp = array[y];
                array[y] = array[y+1];
                array[y+1] = temp;
                trocou = true;
            }
            q++;
        }
        if (!trocou) {
            break;
        }
        console.log(array);
    }
    console.log('Array Ordenado '+array);
    console.log('Verificações: ' + q);
}
var nums = [1, 7, 10, 30];
bubbleSort(nums);
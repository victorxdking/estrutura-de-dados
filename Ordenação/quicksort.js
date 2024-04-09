// QuickSort

function quickSort(array, left, right) {
    let i = left;
    let j = right;
    let temp;
    let pivotIdx = Math.floor((left + right) / 2);
    let pivot = array[pivotIdx];
    
    // Partição
    while (i <= j) {
        while (parseInt(array[i]) < pivot)
            i++;
        while (parseInt(array[j]) > pivot)
            j--;
        if (i <= j) {
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            i++;
            j--;
        }
    }
    if (left < j)
        quickSort(array, left, j);
    if (i < right)
        quickSort(array, i, right);
    return array;
}

let nums = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11];
console.log("Antes da ordenação:", nums);
quickSort(nums, 0, nums.length - 1);
console.log("Após a ordenação:", nums);

function quicksort(array, left, right) {
    var i = left;
    var j = right;
    var aux;
    var pivotidx = Math.floor((left + right) / 2);
    var pivot = array[pivotidx];
    // Partição
    while (i <= j) {
        while (parseInt(array[i]) < pivot)
            i++;
        while (parseInt(array[j]) > pivot)
            j--;
        if (i <= j) {
            aux = array[i];
            array[i] = array[j];
            array[j] = aux;
            i++;
            j--;
        }
    }
    if (left < j)
        quicksort(array, left, j);
    if (i < right)
        quicksort(array, i, right);
    return array;
}

let nums = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11];

quicksort(nums, 0, nums.length - 1);
console.log(nums);

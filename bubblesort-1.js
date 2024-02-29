function bubble_sort(arr) {
    let tmp;
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length -(i - 1); j++) {
            if(arr[j] > arr[j+1]){
                tmp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    console.log(arr);
}

bubble_sort([7,1,3,10,11,0,3,2, 99, 111])
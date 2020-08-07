export function getSelectionSort(array){
    let n = array.length;
    const animations = [];


    for(let i = 0 ; i < n; i++){
        //find min index of unsorted array
        let minIndex = i;
        for(let j = i+1; j < n; j++){
            animations.push([false, false, minIndex, j]);
            animations.push([false, true, minIndex, j]);

            if(array[j] < array[minIndex]){
                minIndex = j;
            }
        }
        swap(array, i,minIndex);
        animations.push([true,true, i, minIndex]);
    }

    return animations;
}

function swap(arr,index1, index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

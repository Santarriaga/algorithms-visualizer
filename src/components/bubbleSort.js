export function getBubbleSort(array){
    let n = array.length;
    let swapped = true;
    const animations = [];

    for(let i = 0; i < n-1; i++){

        swapped = false;
        for(let j = 0; j < n - i - 1; j++ ){
            animations.push([false, false, j, j+1]);
            animations.push([false, true, j, j+1]);
            if(array[j] > array[j+1]){
                swap(array,j);
                swapped = true;
                animations.push([true,j,array[j],array[j+1]]);
            }
        }
        if(!swapped)
            break;
    }
    return animations;
}

function swap(array, idx){
    let temp = array[idx];
    array[idx] = array[idx+1];
    array[idx+1] = temp;
}

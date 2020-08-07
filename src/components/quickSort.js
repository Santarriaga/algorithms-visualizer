export function getQuickSort(array, low, high){
    //pivot is the middle element in array
    //low is starting index
    //high is ending index

    if(array.length > 1){
        let partitionIndex = partition(array, low, high);

        if(low < partitionIndex -1)
            getQuickSort(array, low, partitionIndex - 1);

        if(partitionIndex < high)
            getQuickSort(array, partitionIndex ,  high);
    }

    return(array);
}

function partition(arr, low, high){
    //middle element
    let pivot = arr[Math.floor((low+high)/2)];
    let i = low;
    let j = high

    while(i <= j){
        while(arr[i] < pivot){
            i++;
        }
        while(arr[j] > pivot){
            j--;
        }
        if( i <= j){
            swap(arr,i,j);
            i++;
            j--;
        }
    }
    return i;
}

function swap(arr,index1, index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

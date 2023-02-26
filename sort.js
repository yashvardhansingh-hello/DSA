function bubbleSort(array) {
    for (let i = array.length-1; i>0; i--) {
        for (let j = 0; j<i; j++) {
            if (array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

function selectionSort(array) {
    let min, temp;
    for (let i = 0; i< array.length-1; i++) {
        min = i;
        for (let j = i+1; j<array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        if(min !== j) {
            temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }
    return array;
}

function insertionSort(array) {
    let temp;
    for (let i = 1; i<array.length; i++) {
        temp = array[i];
        for (var j = i-1; array[j]>temp && j>-1; j--) {
            array[j+1] = array[j];
        }
        array[j+1] = temp;
    }
    return array;
}

function mergeSort(array) {
    if (array.length === 1) return array;
    let mid = Math.floor(array.length/2);
    let left = array.slice(0, mid);    
    let right = array.slice(mid);
    return merge(mergeSort(left), mergeSort(right));    
}

function merge(array1, array2) {
    let combined = [];
    let i = 0, j = 0;
    while (i < array1.length && i < array2.length) {
        if (array1[i] < array[j]) {
            combined.push(array1[i]);
            i++;
        } else {
            combined.push(array2[j]);
            j++;
        }
    }    
    while (i < array1.length) {
            combined.push(array1[i]);
            i++;
    }
    while (j < array2.length) {
            combined.push(array2[j]);
            j++;
    }
    return combined;
}

function swap(firstIndex, secondIndex, array) {
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
    return array;
}

function pivot(array, pivotIndex = 0, endIndex = array.length-1) {
    let swapIndex = pivotIndex;
    for (let i = pivotIndex+1; i <= endIndex; i++) {
        if (array[i] < array[pivotIndex]) {
            swapIndex++;
            swap(i, swapIndex, array);
        }
    }
    swap(pivotIndex, swapIndex, array);
    return swapIndex;
}

function quickSort(array, left = 0, right = array.length-1) {
    if (left < right){
    let pivotIndex = pivot(array, left, right);
    quickSort(array, left, pivotIndex-1); 
    quickSort(array, pivotIndex+1, right);
    }
    return array;
}
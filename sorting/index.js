// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    let ok = false;
    let s = 0;
    while(!ok){
        ok = true;
        for(let i=0;i<arr.length - s;i++){
            if(arr[i]>arr[i+1]){
                ok = false;
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
        s++;
    }
    return arr;


}

function selectionSort(arr) {
    let s= 0;
    while (s<arr.length-1){
    let min = arr[s];
    let index = s;
    for(let i =s;i<arr.length;i++){
        if(arr[i]<min){min = arr[i];index = i;}

    }
    let temp = arr[s];
    arr[s]=arr[index];
    arr[index]=temp;
    s+=1;
    }
    return arr;

}

function mergeSort(arr) {
    if(arr.length<2)return arr;
    let mid = Math.floor(arr.length/2);
    return merge(mergeSort(arr.slice(0,mid)), mergeSort(arr.slice(mid,arr.length)));

}

function merge(left, right) {
    let result = [];
    while(left.length>0 && right.length>0){
        if (left[0]<=right[0]){result.push(left[0]); left = left.slice(1,left.length);}
        else{
            result.push(right[0]); right = right.slice(1,right.length);
        }
    }
    while(left.length>0){
        result.push(left[0]); left = left.slice(1,left.length);
    }
    while(right.length>0){
        result.push(right[0]); right = right.slice(1,right.length);
    }
    return result;

}

console.log(mergeSort([100, -40, 500, -124, 0, 21, 7]));
module.exports = { bubbleSort, selectionSort, mergeSort, merge };

// Week 9
//Task 1
// Create a function that takes an array and returns both the minumum 
// and maximum numbers in order 

function findMinMax(arr){ //declared function findMinMax with array as parameter.
    let array = []
    let min = arr[0]
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < min){
            min = arr[i]
        }
        if(arr[i] > max){
            max= arr[i]
        }
    }
    array.push(min)
    array.push(max)

    return array
}

console.log(findMinMax([1,2,3,4,5]))
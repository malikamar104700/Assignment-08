//Program # 1. Write a ts program to read and print elements of array.
var array1 = ["Amar", "Rehman", "Ahmad", "Moeen"];
for (var index_1 = 0; index_1 < array1.length; index_1++) {
    var element = array1[index_1];
    console.log(element);
}
// Program # 2. Write a ts program to print all negative elements in an array.
var array2 = [12, 34, -78, -4, 37, -8];
for (var index = 0; index < array2.length; index++) {
    var array = array2[index];
    if (array < 0) {
        console.log(array);
    }
}
// Program #  3. Write a ts program to find sum of all array elements. 
function sumArrayElements(number) {
    var nums = [];
    for (var a = 0; a < arguments.length; a++) {
        nums = arguments[a];
    }
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("sum of array elements :", sum);
}
sumArrayElements([4, 3, 6]);
// Program # 4. Write a ts program to find maximum and minimum element in an array.
var myArray = [20, 23, 27, 40, 14];
var minElement = myArray.reduce(function (a, b) {
    return Math.min(a, b);
});
console.log("Minimum Value:", minElement);
var maxElement = myArray.reduce(function (a, b) {
    return Math.max(a, b);
});
console.log("Maximum Value:", maxElement);
// Program # 5. Write a ts program to find second largest element in an array.
function secondLargestElem(a) {
    var first = 0;
    var second = 0;
    for (var i = 0; i <= a.length - 1; i++) {
        if (a[i] > first) {
            second = first;
            first = a[i];
        }
        else if (a[i] > second && a[i] != first) {
            second = a[i];
        }
    }
    console.log(second);
}
secondLargestElem([3, 5, 7, 9, 13]);
// Program # 6. Write a ts program to count total number of even and odd elements in an array.
// var array4:number[]=[2,5,23,45,24]
//     for(var i=0;i<array4.length;i++){
//         let a=array4[i]
//         if(a%2==0){
//             console.log("this is even array",a)
//         }
//     }
function CountingEvenOdd(array, arraysize) {
    var evenCount = 0;
    var oddCount = 0;
    for (var i = 0; i < arraysize; i++) {
        if (arr[i] % 2 == 0)
            oddCount++;
        else
            evenCount++;
    }
    console.log("Number of even elements = ", evenCount, " and Number of odd elements = ", oddCount);
}
var arr = [2, 3, 4, 5, 6];
var n = arr.length;
CountingEvenOdd(arr, n);

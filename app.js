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
// Program # 7. Write a ts program to count total number of negative elements in an array.
var myArray = [4, -5, 10, 2, -60, -8, 10, -34];
function getNegativeNumbers(array) {
    var negatives = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            negatives.push(array[i]);
        }
    }
    return negatives.length;
}
console.log(getNegativeNumbers(myArray), "Negative Elements in array");
// Program # 8. Write a ts program to copy all elements from an array to another array.
var a = ["birds", "Parrot"];
var b = a.slice();
console.log(b);
// Program # 9. Write a ts program to insert an element in an array.
function insertElement() {
    var array = [61, 29, 12, 32];
    array.push(5, 12);
    console.log(array);
}
insertElement();
// Program # 10. Write a ts program to delete an element from an array at specified position.
var array3 = ["Amar", "Rehmn", "Ahmad", "Rehan", "Bilal"];
var array4 = array3.pop();
console.log("Remove element:", array4);
console.log("Remaining Elemnts:", array3);
// Program # 12. Write a ts program to print all unique elements in the array.
function getUniqueArray(array) {
    var array5 = array.filter(function (element, index, array) { return array.indexOf(element) === index; });
    return array5;
}
var array6 = ["Hello", "This", "Is", "Language", "This", "Is"];
console.log("Print all unique elements", getUniqueArray(array6));
//   Program # 13. Write a ts program to count total number of duplicate elements in an array.
var counts = [];
var sampleArray = ['a', 'a', 'b', 'c', "c", "d"];
sampleArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
console.log(counts);
// Program # 15. Write a ts program to merge two array to third array.
var array7 = ["Amar"];
var array8 = ["Rehman"];
var array9 = array7.concat(array8);
console.log(array9);
// Program # 16. Write a ts program to find reverse of an array.
var array10 = ["Moeen", "Jawad", "Muneeb", "Ali"];
var array11 = array10.reverse();
console.log(array11);
// Program # 17. Write a ts program to put even and odd elements of array in two separate array.
var array12 = [1, 2, 3, 4, 5, 6, 8, 9];
function seperateArray(array) {
    var even = array.filter(function (num) { return num % 2 === 0; });
    var odd = array.filter(function (num) { return num % 2 != 0; });
    return { odd: odd, even: even };
}
console.log(seperateArray(array12));
// Program # 18. Write a ts program to search an element in an array.
var array14 = [1, 32, 45, 13];
var array15 = 32;
function findElem(elem) {
    for (var i = 0; i < array14.length; i++) {
        if (array14[i] === array15) {
            return "Search Found";
        }
    }
    return "search not found";
}
console.log(findElem(array15));
// program # 19. Write a ts program to sort array elements in ascending or descending order.
var array16 = [21, 2100, 2, 35000];
var array17 = [21, 2100, 2, 35000];
var ascN = array16.sort(function (f, s) { return f - s; });
var dscN = array17.sort(function (f, s) { return s - f; });
console.log("Ascending:", ascN);
console.log("Descending:", dscN);
// Program # 20. Write a ts program to sort even and odd elements of array separately.
var array18 = [2, 5, 7, 8, 9, 12];
function seperate(array) {
    var even = array.filter(function (num) { return num % 2 === 0; });
    var odd = array.filter(function (num) { return num % 2 != 0; });
    return { odd: odd, even: even };
}
console.log(seperate(array18));

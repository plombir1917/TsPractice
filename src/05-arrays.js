"use strict";
const numbers = [1, 2, 3];
const str = [];
const strs2 = []; //второй вариант объявления переменной с типом массива
const vehicles = [];
vehicles.push({ brand: 'audi' });
const arrOfArr = [];
arrOfArr.push(['', '']);
function printArr(arr) {
    arr.forEach((el, index) => {
        console.log(el, index);
    });
}

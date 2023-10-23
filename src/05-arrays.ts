const numbers = [1, 2, 3];

const str: string[] = [];

const strs2: Array<string> = []; //второй вариант объявления переменной с типом массива

interface Vehicle {
  brand: string;
}

const vehicles: Vehicle[] = [];

vehicles.push({ brand: 'audi' });

const arrOfArr: string[][] = [];
arrOfArr.push(['', '']);

function printArr(arr: unknown[]) {
  arr.forEach((el, index) => {
    console.log(el, index);
  });
}

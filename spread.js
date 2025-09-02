const arr = [2, 55, 23, 65, 43, 64,38, 65, 46];

console.log(arr);
console.log(...arr)


const max = Math.max(arr);
const maxOriginal = Math.max(...arr);
console.log(max);
console.log(maxOriginal);


const arr1 = [1,2,3,4];
const arr2 = [6,7,8,9];

const arr3 = [arr1 + 5 + arr2];
const arr4 = [...arr1, 5, ...arr2];
console.log(...arr3)
console.log(...arr4)

const personalInfo = {name: "Ahsan", id: 1021};
const occupation = {occupation: "developer"};

const fullInfo = {...personalInfo, ...occupation};
console.log(fullInfo);


const func = (a=0, b=0, c=0) => a + b + c;
const array = [5, 5, 10];
const sum = func(...array);
console.log(sum)

const arr = [4, 8, 2, 3, 5];
// const doubled = [];

// for(const num of arr){
//     const double = num * 2;
//     doubled.push(double);
// }

// console.log(...doubled);

// const doubleIt = num => num * 2;
// const doubled = arr.map(doubleIt);

// const [first, second, ...rest] = doubled;
// console.log(first, second, ...rest);

// const doubled = arr.map(num => num * 2);
// const squared = arr.map(num => num ** 2);
// console.log(doubled);
// console.log(squared);


const mapping = arr.map((num, index) =>{
    console.log(num, index);
})
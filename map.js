const arr = [4, 8, 2, 3, 5];
const doubled = [];

for(const num of arr){
    const double = num * 2;
    doubled.push(double);
}

console.log(...doubled);
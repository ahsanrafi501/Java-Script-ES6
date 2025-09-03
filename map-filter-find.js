const student = [
    {id:1, name: "Sabi", mark: 95},
    {id:2, name: "Ani", mark: 85},
    {id:3, name: "Mehu", mark: 69},
    {id:5, name: "Faru", mark: 15},
];

const names = student.map(student => student.name);
console.log(names);

const marks = student.filter(marks => marks.mark > 50);
console.log(marks);
marks.forEach(marks => (console.log(marks.name)));

const first80marks = student.find(marks => marks.mark > 80);
console.log(first80marks.name);
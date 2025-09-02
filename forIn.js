const employee = {
    name: "Sabiha Sultana",
    designation: "QA",
    salary: 20000,
    experience: 1,
    age: 22,
};


for(const key in employee){
    console.log(key);
};

for(const key in employee){
    console.log(employee[key]);
}

const keys = Object.keys(employee);

for(const key of keys){
    console.log(employee[key]);
}
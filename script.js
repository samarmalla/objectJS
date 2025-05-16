let students = {
    name: "John",
    marks : 75
}

if (students.marks >= 50){
    console.log(students.name+ " has passed.")
}else{
    console.log(students.name+ " has failed.")
}

console.log(students.name+ " has scored " + students.marks + " marks.");

//hands-on2
for(let i=1; i<100; i++){
    if(i%2==0){
        console.log(i + " is even");
    }
}


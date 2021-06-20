
const person = {
    firstName: "Dewa",
    lastName: "Gede Ari"
};

if("firstName" in person) {
    alert(`Hello ${person.firstName}`);
}else {
    alert("Hello");
}


const student = {
    firstName: "Dewa",
    middleName: "Ari",
    lastName: "Bagus"
}

if("middleName" in student) {
    alert(`Hello ${student.middleName}`);
}else {
    alert("Hello Student");
}


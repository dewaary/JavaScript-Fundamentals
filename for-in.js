const person = {
    firstName: "Dewa",
    middleName: "Gede Agung",
    lastName: "Ari Septiyadi"
};

for(const property in person) {
    console.log(`${property} : ${person[property]}`);
}

const names = ["Dewa", "Gede", "Agung", "Ari"];

for(const index in names) {
    console.log(`${index} : ${names[index]}`);
}
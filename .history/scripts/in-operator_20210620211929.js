
const person = {
    firstName: "Dewa",
    lastName: "Gede Ari"
};

if("firstName" in person) {
    alert(`Hello ${person.firstName}`);
}else {
    alert("Hello");
}
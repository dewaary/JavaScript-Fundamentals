
// OPERATOR "OR" ||

console.info("hello" || "");
console.info("" || []);
console.info("0" || "NOL");
console.info(0 || "NOL");
console.info(null || "NULL");
console.info("undefined" || undefined)


// Cara Menggunakan 

const person = {
    firstName: "Dewa",
    lastName: "Gede Agung"
};

const name = person.firstName || person.lastName;
console.info(name);


// Operator "AND" &&

console.info("hello" && ''); // ''
console.info("" && []); // " "
console.info("0" && "NOL"); // "NOL"
console.info(0 && "NOL"); // 0
console.info(null && "NULL"); // null
console.info("undefined" && undefined) // undifined
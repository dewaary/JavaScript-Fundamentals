let parameter = "Dewa";

let data = parameter;

if(data === undefined || data === null) {
    data = "Nilai Default";
}

console.log(data);


// Nullish Coalescing Operator

data = parameter ?? "Nilai Default";

console.log(data);
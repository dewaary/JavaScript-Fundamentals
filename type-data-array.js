/* 
OPERATION DATA ARRAY

    array.push(value) => menambahkan data ke Array
    array.length => Untuk mendapatkan panjang array
    array[index] => mendapatkan data posisi index
    array[index] = value => Mengubah data di posisi index
    delete array[index] => Menghapus data di posisi index, namun index tidak berubah
 
*/


let array = [];

let arrayName = ["Dewa", "Gede", "Agung", "Ari"];


// Add Data Array using Push

const names = [];

names.push("Dewa");
names.push("Dewa","Gede","Agung","Ari");

console.table(names);

console.info(names[0]);
console.info(names[1]);
console.info(names[2]);

names[0] = "Bagus";
names[1] = "Ari";
names[2] = "Now";

console.table(names);

delete names[3];

console.table(names);

names.push("Dewa Lagi");

console.table(names);

names[3] = "Diubah";
names.push(1,2,3,4,5);
names.push(["Dewa", "Gede", "Agung", "Ari", "Septiyadi"]);

console.log(names);
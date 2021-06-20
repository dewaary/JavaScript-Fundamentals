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

names[0] = "Bagus";
// Membuat function dengan parameter dan return value

function sayHello(firstName, lastName){
    const say = (`Hello ${firstName} ${lastName}`);
    return say;
};

const result = sayHello("Dewa", "Gede Agung");
console.log(result);

// Return Lebih dari 1

function getFinalScore(value) {
    if(value > 80){
        return "A";
    } else if(value <= 80){
        return "B";
    }else if(value < 70){
        return "C";
    } else if(value < 50) {
        return "D";
    }else {
        return "E";
    }
};


const finalValue = getFinalScore(96) 
console.log(finalValue);


// Menghentikan Eksekusi Return

function isContains(array, searchValue) {
    for (const element of array) {
        console.info(`Iterasi ${element}`);
        if(element === searchValue){
            return true;
        }
    }
    return false;
}

const array = [1, 2,3,4,5,5,666,77,65,5,443,45,654,55];
const search = 10;
const found = isContains(array, search);

console.log(found);

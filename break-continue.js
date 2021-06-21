
// Break

let counter = 1;

while (true) {
    console.log(`Perulangan ke ${counter}`);
    counter++;

    if(counter > 10) {
        break;
    }
}


// Continue

for(let i = 1; i <= 100; i++) {
    if(i%2 === 0) {
        continue;
    }
    console.log(`Perulangan Ganjil ${i}`);
}
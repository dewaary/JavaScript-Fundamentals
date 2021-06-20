const person = {};

let country = person.address.country;

if (person.address !== undefined && person.address !== null) {
    country = person.address.country;
}

console.log(country);
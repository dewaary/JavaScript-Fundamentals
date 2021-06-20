const person = {};

let country;


if (person.address !== undefined && person.address !== null) {
    country = person.address.country;
}

console.log(country);
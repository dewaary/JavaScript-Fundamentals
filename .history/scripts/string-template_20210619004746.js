
/* Subtitution Variabel */

const middleName = "Dewa Gede Agung Ari Septiyadi";
const firstName = "Dewa Gede Agung";
const lastName = "Ari Septiyadi";
const template = `Name : ${firstName} ${lastName} ${middleName}`;

console.info(template);


/* Expression Variabel */

const nilai = 50
const template2 = `Name : ${middleName}, Lulus : ${nilai > 70}`;

console.info(template2);

/* Multiline Variabel String */

let multiLineString = `Nama Saya Dewa Gede Agung Ari,
Sekarang kerja,
saya baik orangnya,
tetap menyerah dan jangan semangat`;

document.writeln("<pre>");
document.writeln(multiLineString);
document.writeln("</pre>");
/*

OPERATOR LOGIKA



*/

const nilaiUjian = 70;
const nilaiAbsensi = 70;

const lulusUjia = nilaiUjian > 75;
const lulusAbsensi = nilaiAbsensi > 75;

const lulus = lulusUjian && lulusAbsensi;

document.writeln(lulus);
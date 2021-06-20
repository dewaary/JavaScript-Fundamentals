/*
OPERATOR ARITMATIKA

    + = Pertamabahan
    - = Pengurangan
    * = Perkalian
    ** = Exponsial (Pemangkatan)
    / = Pembagian
    % = Modulus
*/

let result = 1 + 2;
document.writeln("<p> 1 + 2 = " + result + "</p>");
let orginalResult = result;


result = result - 1;
document.writeln("<p>" + orginalResult + " -1 = " +result+ "</p>")
orginalResult = result;

result = result * 2;
document.writeln("<p>" + orginalResult + " * 2 = " +result+ "</p>")


/*

OPERATION AUGMENTED ASSIGNMENT

    result = result + 10 => result += 10
    result = result - 10 => result -= 10
    result = result * 10 => result *= 10
    result = result ** 10 => result **= 10
    result = result / 10 => result /= 10
    result = result % 10 => result %= 10

*/

let result = 1 + 2;
document.writeln("<p> 1 + 2 = " + result + "</p>");
let orginalResult = result;


result -= 1;
document.writeln("<p>" + orginalResult + " -1 = " +result+ "</p>")
orginalResult = result;

result *= 2;
document.writeln("<p>" + orginalResult + " * 2 = " +result+ "</p>")

/*

OPERATION UNARY

    + => Menandakan nilai positif
    - => Menandakan nilai negatif
    ++ => Increment, menaikan 1 angka
    -- => Decrement, menurunkan 1 angka

*/

let result = +1;
document.writeln("<p>" + result + "</p>")

result--;
document.writeln("<p>" + result + "</p>")
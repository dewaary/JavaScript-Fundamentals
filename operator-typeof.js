/* 
Operator TypeOf

    Type            Operator TypeOf
    Undifined =>    "undifined"
    NUll    =>      "object"
    Boolean =>      "boolean"
    Number  =>      "number"
    BitInt  =>      "bigint"
    String  =>      "string"
    Symbol  =>      "symbol"
    Function    =>  "function"
*/

let data = 100;

const typeData = typeof data;
console.log(typeData);

// if(typeof data === number){
//     alert("Number");
// }
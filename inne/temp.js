let string1 = "primitives";
let string2 = string1;
string2 = "primitives after copy and change";

console.log("string1", string1);
console.log("string2", string2);
//zmienia się kopia zmiennej a oryginał pozostaje bez zmian,

let object1 = { nazwaStringu: "refernces" };
let object2 = object1;
object2.nazwaStringu = "references after copy and change ";

console.log("object1", object1.nazwaStringu);
console.log("object2", object2.nazwaStringu);
//zmienia się kopia zmiennej ORAZ oryginał, gdyż obie zmienne odnoszą się do tego samego adresu(referencji),

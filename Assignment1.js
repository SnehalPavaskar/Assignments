console.log(1+"2"+"2");
//Its loosely typed language so it performs automatic type conversion on values
//In above eg, there are some string type operands so it performs string concatenation
//hence converts the type of 1 to "1".so o/p is "122".
console.log(1+ +"2"+"2");
//here + sign before "2" treated as unary operator so it converts type of "2"to numeric
//and then perform addition and again convert it to type string because another operand is a string.
//o/p is "32"
console.log(1+ -"1"+"2");
//Same as above eg. just perform substraction instead of addition.
//o,p is "02"
console.log(+"1"+"1"+"2");
//First it coverts "1" to numeric type because + sign before it but immediately it converts to string because another operands are in string.
//o/p is "112"
console.log("A"-"B"+"2");
//Its returns NaN because there are some non numeric operands which is then concatenated with string
//o/p is "NaN2" 
console.log("A"-"B"+2);
//Same as above but instead of string here is a no. so here o/p is only NaN
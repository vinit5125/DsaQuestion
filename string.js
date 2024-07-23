function reverseString (str){


    let String = "";
    for (let i = str.length - 1; i >= 0; i--) {
        String += str[i];
    }
    return String;
}

let string = "Vinit";

let result = reverseString(string);
console.log(result);


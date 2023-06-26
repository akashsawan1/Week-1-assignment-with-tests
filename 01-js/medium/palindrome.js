/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/
  console.log(str1);
  console.log(str2);
function reverse(string){
  let output = "";
  for(var i= string.length-1; i>=0; i--){
    output += string[i];
  }
  return output;
}
function onlyletter(str){
  let output = "";
  for(var i =0; i<str.length;i++){
    if(str[i] === " " || str[i] === "?" || str[i] === "," || str[i] === "!" || str[i] === "."){
      continue;
    }
    else {
      output += str[i]
    }

  }
  return output;
}
function isPalindrome(str) {
  str = str.toLowerCase();
  const str1 = onlyletter(str);
  const str2 = reverse(str1);
  if (str1 === str2) {
    return true;
  } else {
    return false;
  }
}

module.exports = isPalindrome;

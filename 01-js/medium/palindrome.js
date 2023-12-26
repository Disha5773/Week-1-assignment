/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/
function split(str){
  let s = "";
  for(let i = str.length-1;i>=0;i--){
  s+=str[i];
}
return s;
}
function isPalindrome(str) {
  let reverse = split(str);
   if(str.toLowerCase()===reverse.toLowerCase()){
   return true; 
   }
  else{
    return false;
  }
}
let result= isPalindrome("Nan");
console.log(result);

module.exports = isPalindrome;

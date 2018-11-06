function telephoneCheck(str) {

  let regexPhone =/^[1\s]*[\d]{3}-[\d]{3}-[\d]{4}|^[1\s]*\([\d]{3}\)\s{0,1}[\d]{3}-[\d]{4}|^[1\s]*[\d]{10}|^[1\s]*[\d]{3}\s[\d]{3}\s[\d]{4}/;

  return str.match(regexPhone) == str;
}

console.log(telephoneCheck("555 555 5555")); // returns true
console.log(telephoneCheck("2 757 622-7382")); // returns false
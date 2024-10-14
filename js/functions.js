function checkStringLength(string, number) {
  return string.length <= number;
}

console.log("октябрь 20 = " + checkStringLength('октябрь', 20));
console.log("октябрь 2 = " + checkStringLength('октябрь', 2));

function isPalindrome(string) {
  let newString = string.split('').reverse().join('');
  let result;
  if (newString === string) {
    result = 'Да, это палиндром';
  }
  else {
    result = 'Нет, не палиндром';
  }
  return result;
}

console.log("топот = " + isPalindrome('топот'));
console.log("шишка = " + isPalindrome('шишка'));


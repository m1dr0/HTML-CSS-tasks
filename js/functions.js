//1
let str = 'Чешир ришеЧ';
const palindrome = (str) => {
	for (i = 0; i < ~~(str.length / 2); i++) {
		if (str[i] != str[str.length - i - 1])
			return false
	}
	return true
};
console.log(palindrome(str));


//2
let num_str = '1 каштан, 0.5 банана';
const nums = (str) => {
	let num = str.match(/\d/g);
  if (num === null) {
    return NaN;
  }
  return parseInt(num.join(""), 10);
};
console.log(nums(num_str));


//3
const addChars = (str, minLength, chars) => {
	if ([...str].length >= minLength)
		return str;
	let res = ''
	while ([...str].length < minLength--)
		res += chars;
	return res + str;
}
console.log(addChars('23', 0, 'daw'))
console.log(addChars('152', 10, '0'))
console.log(addChars('😄', 5, '0')) // приколюха в том, что смайлик - 2 символа(че то там с энкодингом вроде), поэтому используем спред оператор на строке :)


//4
const checkLength = (str, length) => {
	return [...str].length <= length
}
console.log(checkLength('проверяемая строка', 17))
console.log(checkLength('проверяемая строка', 18))
console.log(checkLength('проверяемая строка', 19))
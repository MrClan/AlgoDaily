/*
    You are given with a string . Your task is to remove atmost two substrings of any length from the given string such that the remaining string contains vowels('a','e','i','o','u') only. Your aim is the maximise the length of the remaining string. Output the length of remaining string after removal of atmost two substrings.
    NOTE: The answer may be 0, i.e. removing the entire string.

    Sample Input
    2
    earthproblem
    letsgosomewhere
    
    Sample Output
    3
    2
*/

/*
    Approach:
    - find the vowels count from the beginning or the end
    - find the longest substring in S that all the chars in this substring are vowels

    a a a y y y a a y y a y a a a y a y a a a
    ^ ^ ^ - - - * * - - * - * * * - * - ^ ^ ^

    Result = 3 + (2 or 1 or 3) + 3 = 9

    Time    O(N)
    Space   O(1)
*/
const isVowel = (c) => {
	return c == "a" || c == "e" || c == "i" || c == "o" || c == "u";
};

const longestCombinedVowels = (s) => {
	let startVowelCount = 0;
	let endVowelCount = 0;
	const n = s.length;
	let i = 0;
	let j = n - 1;
	for (i = 0; i < n; i++) {
		if (!isVowel(s[i])) {
			break;
		}
		startVowelCount += 1;
	}
	// all characters are vowels
	if (i == n) {
		return s.length;
	}
	// find the longest vowels substring in the middle
	for (j = n - 1; j >= 0; j--) {
		if (!isVowel(s[j])) {
			break;
		}
		endVowelCount += 1;
	}
	let longestInMiddle = 0;
	let curCount = 0;
	for (let k = i; k <= j; k++) {
		if (isVowel(s[k])) {
			curCount += 1;
		} else {
			curCount = 0;
		}
		longestInMiddle = Math.max(longestInMiddle, curCount);
	}
	return startVowelCount + longestInMiddle + endVowelCount;
};

let a = "aaayyyaayyayaaayayaaa";
console.log(longestCombinedVowels(a));

a = "yyyaayyayaaayayaaa";
console.log(longestCombinedVowels(a));

a = "aaayyyaayyayaaayay";
console.log(longestCombinedVowels(a));

a = "earthproblem";
console.log(longestCombinedVowels(a));

a = "letsgosomewhere";
console.log(longestCombinedVowels(a));

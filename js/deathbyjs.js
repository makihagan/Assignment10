//STEP 1
let str;
function alphaOrder(str) {
    return str.split('').sort().join('');
}
str = 'webmaster';
console.log(alphaOrder(str));

//STEP 2
// let str;
// function cap(str) {
//     let arrStr = str.split(' ');
//     let arrCap = [];
//     for (let i = 0; i < arrStr.length; i++) {
//         arrCap.push(arrStr[i].charAt(0).toUpperCase() + arrStr[i].slice(1));
//     }
//     return arrCap.join(' ');
// }
// str = 'the quick brown fox';
// console.log(cap(str));

//STEP 3
// let str;
// function vowels(str) {
//     let vowelLet = 'aeiouAEIOU';
//     let vowelCount = 0;

//     for (let i = 0; i < str.length; i++) {
//         if(vowelLet.indexOf(str[i]) !== -1) {
//             vowelCount += 1;
//         }
//     }
//     return vowelCount;
// }
// str = 'The quick brown fox';
// console.log(vowels(str));

//STEP 4
// function stringId(length) {
//     let newId = "";
//     let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//     for (let i = 0; i < length; i++) {
//         newId += letters.charAt(Math.floor(Math.random()*letters.length))
//     }
//     return newId;
// }
// console.log(stringId(8));

//STEP 5
// let countryNames = [];
// function longestCountryName(countryNames) {
//     return countryNames.reduce(function(longest, country){
//         return longest.length > country.length ? longest : country;
//     },"");
// }
// countryNames = ['Australia', 'Germany', 'United States of America'];
// console.log(longestCountryName(countryNames));
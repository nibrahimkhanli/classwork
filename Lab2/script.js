// let fullName = 'Nihad Ibrahimxanli Zeynal'
// const lettersArray = fullName.split('');
// console.log(lettersArray);



let fullName = 'Nihad Ibrahimxanli Zeynal';
let names = fullName.split(' ');
let changedNames = [names[1], names[0], names[2]];
console.log(changedNames);
let changedFullName = changedNames.join(' ');
console.log(changedFullName);

let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]
console.log(arr.length)
let occurrencesOf5 = arr.filter(num => num === 5);
console.log(occurrencesOf5)
let countOf5 = occurrencesOf5.length;
console.log(countOf5);

let sum = arr.reduce((acc, num) => acc + num, 0);
console.log(sum)

// arr.sort((a, b) => a - b)
// console.log(arr);

let maxNumber = Math.max(...arr)
console.log(maxNumber)

let occurrencesOfMaxNumber = arr.filter(num => num === maxNumber);
let countOfMaxNumber = occurrencesOfMaxNumber.length;
console.log(countOfMaxNumber);

//Nihad
//5
//5 arrayde yoxla
let name = 'Nihad'
console.log(name.length)
let occurrencesOfNameLength = arr.filter(num => num === name.length);
console.log(occurrencesOfNameLength)

if (occurrencesOfNameLength.length > 0)
console.log(true);
else 
console.log(false)

//3e bol, qaliq 2
//1nci reqem
//arraydeki indexi

const result = arr.findIndex(item => item%3==2)
console.log(result)

//arraydaki en boyuk reqemin ilk indexini tapin
let maxNum = Math.max(...arr)
let indexOfMax = arr.indexOf(maxNum);
console.log(indexOfMax)
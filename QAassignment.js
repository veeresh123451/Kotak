//Find the Max and Min num bin an Array

// const numbers = [10, 25, 7, 98, 3, 65];

// const max = Math.max(...numbers)
// const min = Math.min(...numbers)

// console.log('Max:', max);
// console.log('Min:',min);

//-----

// const num = [10, 25, 7, 98, 3, 65]

// let max = num[0]
// let min = num[0]

// for(let i=1; i<num.length; i++){
//     if(num[i] > max){
//         max = num[i]
//     }
//     if(num[i] < min){
//         min = num[i]
//     }
// }
// console.log('Max:', max);
// console.log('Min:',min);



//2)	Find a 2nd maximum and Minimum number in an array 

// const arr = [14,25,18,21,2,3,5,4]

// const quniueArray = [...new Set(arr)]

// quniueArray.sort((a,b) => a-b)

// const secondMax = quniueArray[quniueArray.length-2]
// const secondMin = quniueArray[1]

// console.log('2nd Max:',secondMax);
// console.log('2nd Min:',secondMin);

//----

// let arr = [14, 5, 7, 22, 9, 22, 3]

// function secondLargest(num){
//     let firstMax = -Infinity
//     let secondMax = -Infinity

//     for(let i=0;i<num.length;i++){
//         let data = num[i]

//         if(data > firstMax){
//             secondMax = firstMax
//             firstMax = data
//         }
//         else if(data > secondMax && data !== firstMax){
//             secondMax = data
//         }
//     }
//     console.log('Second Largest:',secondMax);
// }
// secondLargest(arr)


//secondminimum

// let arr = [14, 5, 7, 22, 9, 22, 3]

// function findSecondMin(data){
//     let firstMin = Infinity
//     let secondMin = Infinity

//     for(let i=0; i<data.length; i++){
//         let num = data[i]

//         if(num < firstMin){
//             secondMin = firstMin
//             firstMin = num
//         }
//         else if(num > secondMin && num < firstMin){
//             secondMin = num
//         }
//     }
//     console.log('secondMin:', secondMin);
    
// }
// findSecondMin(arr)


//Sort an array using built-in and without built-in method


// const arr = [12, 5, 3, 8, 1, 7];

// const result = arr.sort((a,b) => b-a)
// console.log(result);

//----

// const arr = [12, 5, 3, 8, 1, 7];

// function sortedArray(array){
//     let n = array.length;

//     for(let i=0; i<n-1; i++){
//         for(let j=0; j<n-1-i; j++){
//             if(array[j] >array[j+1]){
//                 let temp = array[j]
//                 array[j] = array[j+1]
//                 array[j+1] = temp

//             }
//         }
//     }
//     return array
// }
// console.log('Sorted Array:',sortedArray(arr));


//write a function to remove the duplicate element from an array

// function removeDuplicatesArray(arr){

//     const uniqueArray = [...new Set(arr)]
//     return uniqueArray 
// }
// console.log(removeDuplicatesArray([1,1,2,2,3,3,4,5,5,6,9,8,97]));

//----


// function removeDuplicatesArray(arr){
//     let uniqueArray = []

//     for(let i=0; i<arr.length; i++){
//         let exists = false

//         for(let j=0; j<uniqueArray.length; j++){
//             if(arr[i] === uniqueArray[j]){
//                 exists = true
//                 break
//             }
//         }
//         if(!exists){
//             uniqueArray.push(arr[i])
//         }
//     }
//     return uniqueArray
// }
// console.log(removeDuplicatesArray([1,1,2,2,3,3,4,5,5,6,9,8,97]));


//write a function to remove duplicate elements in a string "HelloWorld"

// function removeDuplicateStringChar(str){
    
//     const uniqueStr = [...new Set(str)].join('')
//     return uniqueStr
// }
// console.log(removeDuplicateStringChar('HelloWorld'));

//---

// function removeDuplicateStringChar(str){
//     let uniqueStr = ''

//     for(let i=0; i<str.length; i++){
//         let exists = false

//         for(let j=0; j<uniqueStr.length; j++){
//             if(str[i] === uniqueStr[j]){
//                 exists = true
//                 break
//             }
//         }
//         if(!exists){
//             uniqueStr= uniqueStr+str[i]
//         }
//     }
//     return uniqueStr
// }
// console.log(removeDuplicateStringChar('HelloWorld'));


//Write function to convert camelCase to snake case

// function camelToSnake(str){
//     return str.replace(/([A-Z])/g,'_$1').toLowerCase()
// }
// console.log(camelToSnake('camelCaseToSnakeCase'));

//---

// function camelToSnakeCase(str){
//     let result = ''

//     for(let i=0; i<str.length; i++){
//         let char = str[i]

//         if(char >= 'A' && char <= 'Z'){
//             result += '_'+char.toLowerCase();
//         }
//         else{
//             result+=char
//         }
//     }
//     return result
// }
// console.log(camelToSnakeCase('camelCaseToSnakeCase'));


//write a function to convert snake case to camelCase

// function snakeToCamel(str){
//     return str.split('_').map((word,index) =>{
//         if(index === 0) return word
//         return word.charAt(0).toUpperCase()+word.slice(1)
//     }).join('')
// }
// console.log(snakeToCamel('snake_case_to_camel_case'));

//--

// function snakeToCamel(str){
//     let result = ''
//     let captilizeNext = false

//     for(let i=0; i<str.length; i++){
//        let char = str[i]

//        if(char === '_'){
//         captilizeNext = true
//        }else{
//             if(captilizeNext){
//                 result+=char.toUpperCase()
//                 captilizeNext = false
//             }else{
//                 result+=char
//             }
//        }

//     }
//     return result

// }
// console.log(snakeToCamel('snake_case_to_camel_case'));


//write a function to flatten the nested array

// function flattenArray(nested){
//     return nested.flat(Infinity)
// }
// console.log(flattenArray([1, [2, [3, [4]], 5], 6]))

//----

// function flatterArray(arr){
// 		let result = []
// 		let idx = 0

// 		for(let i=0; i<arr.length; i++){
// 			if(arr[i] && typeof arr[i] === 'object' && arr[i].constructor === Array){
// 				let flat = flatterArray(arr[i])

// 				for(let j=0; j<flat.length; j++){
// 						result[idx++] = flat[j]
// 				}
// 			}
// 			else{
// 					result[idx++] = arr[i]
// 				}
// 		}
// 	return result

// }
// console.log(flatterArray([1, [2, [3, [4]], 5], 6]));



//Write a function to find the 2nd largest number in a nested array

// function findSecondLargestNestedArray(arr){
//     const flatten = arr.flat(Infinity)

//     const  removeDuplicate = [...new Set(flatten)]

//     removeDuplicate.sort((a,b) => b-a)

//     return removeDuplicate[1]
// }
// console.log(findSecondLargestNestedArray([1, [4, 7], [9, [10, 12]], 3]));


//write a function to generate below pattern
	// 1
	// 2 9
    // 3 8 10
	// 4 7 11 14
    // 5 6 12 13 15



//program for adding zeros after 3 values in array 
// a.	Example: [1, 2,3,4,5,6,6,7,8]
// b.	Output: [1, 2,3,0,4,5,6,0,6,7,8,0]


// function insertZeroBuiltIn(arr){
//     let result = []

    
//     for(let i=0; i<arr.length; i++){
//         result.push(arr[i])

//         if((i+1) % 3 === 0){
//         result.push(0)
//     }
//     }    
//     return result
// }
// console.log(insertZeroBuiltIn([6,6,6,6,6,6,6,6,6,2]));

//----

// function insertZeroManual(arr){
//     let result = []
//     let resultIndex = 0
//     let count = 0

//     for(let i=0; i<arr.length; i++){
//         result[resultIndex++] = arr[i]
//         count++

//         if(count === 3){
//             result[resultIndex++] = 0
//             count = 0
//         }
//     }
//     return result
// }
// console.log(insertZeroManual([14,7,8,5,4,2,6,5,4,7,9]));


//Reverse a string a without using built in method 

// function reverseString(str){
//     return str.split('').reverse().join('')
// }
// console.log(reverseString('Hello World'));

//---

// function reverseString(str){
//     let reverse = '';

//     for(let i=str.length-1; i>=0; i--){
//         reverse += str[i]
//     }
//     return reverse
// }
// console.log(reverseString('Morning'));


//Write a function to return a Fibonacci series


// function fibonacciBuiltIn(){
//     let fibonacci = [0,1]

//     for(let i=2; i<=10; i++){
//         fibonacci.push(fibonacci[i-1] + fibonacci[i-2])
//     }
//     return fibonacci
// }
// console.log(fibonacciBuiltIn());

//----

// function fibonacci(n){
//     let fib = []
//     fib[0] = 0
//     fib[1] = 1

//     for(let i=2; i<=n; i++){
//         fib[i] = fib[i-1] + fib[i-2]
//     }
//     // let result = '';
//     // for (let i = 0; i < n; i++) {
//     //     result += fib[i] + (i < n - 1 ? ', ' : '');   //Build String manually is optional logic 
//     // }

//     return result;
// }
// console.log(fibonacci(10));


//14)	Implement a deep clone(copy) function in JavaScript that creates a copy of a nested object or array without any reference to the original. 


// function deepCloneData(data){
// 	return structuredClone(data)
// }

// const original = { a: 1, b: { c: 2 }, d: [3, 4] };		//working correct in modern browser
// const copy = deepCloneData(original)

// copy.b.c = 100
// copy.d[2] = 99
// console.log('Original:', original);
// console.log('Copy:', copy);

//-----

// function deepCloneData(value){
// 	if(value === null ||typeof value !== 'object'){
// 		return value;
// }

// //Handles Arrays
// if(Array.isArray(value)){
// 	let newArray = [];

// 	for(let i=0; i<value.length; i++){
// 		newArray[i] = deepCloneData(value)
// 	}
// 	return newArray
// }

// //Handles objects
// let newObj = {}
// for(let key in value){
// 	if(value.hasOwnProperty(key)){
// 		newObj[key] = deepCloneData(value[key])
// 	}
// }
// return newObj
// }

// const original = {name: "John", address: {city: "New York",location: { lat: 40.7128, lng: -74.006 }}}

// const clone = deepCloneData(original)
// clone.address.city = 'Bengalore'
// clone.hobbies[2] = 'carram'

// console.log('Original:', original);
// console.log('Copy:', clone);


//15)	write a function to find how many times an elements are repeated in an array [1,2,3,3,5,2,1,7,6,8,7,8] and in string "abcdaabdlfjl'

// function countAccorencessBuiltIn(input){
// 	const count = new Map()
// 	const elements = typeof input === 'String' ? input.split(''):input;

// 	elements.forEach(ele => {
// 		count.set(ele, (count.get(ele) || 0) + 1)
// 	});
// 	return count
// }

// const arrayInput = [1,2,3,3,5,2,1,7,6,8,7,8]
// console.log('Array Count:', Object.fromEntries(countAccorencessBuiltIn(arrayInput)));


//--

// function builtINMethods(arr){
// 	const counts = new Map();

// 	arr.forEach(ele => {
// 		counts.set(ele, (counts.get(ele) || 0) +1)
// 	})
// 	return counts
// }
// // const array = [1, 2, 3, 3, 5, 2, 1, 7, 6, 8, 7, 8]
// // console.log(builtINMethods(array));



//--

// function countElementsManual(arr){
// 	let result = {}

// 	for(let i=0; i<arr.length; i++){
// 		let el = arr[i]

// 		if(result[el] === undefined){
// 			result[el] = 1
// 		}
// 		else{
// 			result[el] += 1
// 		}
// 	}
// 	return result
// }
// console.log(countElementsManual("abcdaabdlfjl"));


// function countsCharsBuiltIn(str){
// 	const map = new Map();

// 	[...str].forEach(char =>{
// 		map.set(char, (map.get(char) ||0) +1)
// 	})
// 	return map
// }
// console.log(countsCharsBuiltIn('abcdaabdlfjl'));


//write a function to capitalize the each words first letter to capital 
	// Ex : ['abc','def','ghi']
	// output : ['Abc', 'Def','Ghi"]


// function captilizeFirstChar(arr){
// 	return arr.map(word =>{
// 		return word.charAt(0).toUpperCase() + word.slice(1)
// 	})
// }
// console.log(captilizeFirstChar(['abc','def','ghi']));

//---

// function capitalizeWordsManual(arr) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         let word = arr[i];
//         let capitalized = '';

//         // Convert first letter to uppercase manually (ASCII logic)
//         let firstChar = word[0];
//         let upperFirstChar = String.fromCharCode(
//             firstChar.charCodeAt(0) >= 97 && firstChar.charCodeAt(0) <= 122
//                 ? firstChar.charCodeAt(0) - 32
//                 : firstChar.charCodeAt(0)
//         );

//         // Build the full word
//         capitalized = upperFirstChar;

//         for (let j = 1; j < word.length; j++) {
//             capitalized += word[j];
//         }

//         result[result.length] = capitalized; // Manual push
//     }

//     return result;
// }

// console.log(capitalizeWordsManual(['abc', 'def', 'ghi']));


//---
//ex : [{sub:'Maths', marks:60},{sub:'Science', marks:70},{sub:'English', marks:90}]

// function totalMarks(subjects){
// 	return subjects.reduce((sum,item) => {
// 		return sum + item.marks;
// 	},0)
// }
// const data = [
// 				{sub:'Maths', marks:60},
// 				{sub:'Science', marks:70},
// 				{sub:'English', marks:90}
// 			];

// console.log('Sumtotal:', totalMarks(data));

//----

// function totalMarks(subjects){
// 	let Sumtotal = 0

// 	for(let i=0; i<subjects.length; i++){
// 		Sumtotal = Sumtotal + subjects[i].price
// 	}
// 	return Sumtotal
// }
// const data = [
// 				{product:'showe', price:500},
// 				{product:'Freedze', price:1500},
// 				{product:'bike', price:2000},
// 				{product:'Car', price:1000},

// ]
// console.log('Total Product Amount:', totalMarks(data));


//Create a TO-do list application add the functionality to add, remove and edit make sure the application is responsive should have a good styling




// function addTask() {
//   const input = document.getElementById('taskInput');
//   const taskText = input.value.trim();
//   if (!taskText) return;

//   const li = document.createElement('li');
//   li.className = 'task-item';

//   const taskInput = document.createElement('input');
//   taskInput.type = 'text';
//   taskInput.value = taskText;
//   taskInput.setAttribute('readonly', true);

//   const btnWrapper = document.createElement('div');
//   btnWrapper.className = 'task-buttons';

//   const editBtn = document.createElement('button');
//   editBtn.textContent = 'Edit';
//   editBtn.className = 'edit-btn';

//   editBtn.onclick = function () {
//     if (taskInput.hasAttribute('readonly')) {
//       taskInput.removeAttribute('readonly');
//       taskInput.focus();
//       editBtn.textContent = 'Save';
//     } else {
//       taskInput.setAttribute('readonly', true);
//       editBtn.textContent = 'Edit';
//     }
//   };

//   const deleteBtn = document.createElement('button');
//   deleteBtn.textContent = 'Delete';
//   deleteBtn.className = 'delete-btn';

//   deleteBtn.onclick = function () {
//     li.remove();
//   };

//   btnWrapper.appendChild(editBtn);
//   btnWrapper.appendChild(deleteBtn);
//   li.appendChild(taskInput);
//   li.appendChild(btnWrapper);

//   document.getElementById('taskList').appendChild(li);
//   input.value = '';
// }






// function fetchUsers() {
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => {
//       const tableBody = document.getElementById('userTableBody');
//       tableBody.innerHTML = ''; // clear previous data

//       users.slice(0, 5).forEach(user => {

//         const row = document.createElement('tr');

//         const idCell = document.createElement('td');
//         idCell.textContent = user.id;

//         const nameCell = document.createElement('td');
//         nameCell.textContent = user.name;

//         const emailCell = document.createElement('td');
//         emailCell.textContent = user.email;

//         row.appendChild(idCell);
//         row.appendChild(nameCell);
//         row.appendChild(emailCell);

//         tableBody.appendChild(row);
//       });

//     })

//     .catch(error => {
//       console.error('Error fetching users:', error);
//     });
// }



//Write a function to remove the duplicate from 2 arrays, let a = [1,2,3,4,5] let b = [5,3,7,8,9]

// function mergeAndRemoveDuplicate(a,b){
// 	let combine = a.concat(b)
// 	let unique = [...new Set(combine)]
// 	return unique

// }
// let a = [1,2,3,4,5]
// let b = [5,3,7,8,9]
// console.log(mergeAndRemoveDuplicate(a,b));


//----

// function mergeAndRemoveDuplicate(a,b){
// 	let combined = []
// 	for(let i=0; i<a.length; i++){
// 		if(!existsInArray(combined,a[i])){
// 			combined[combined.length] = a[i]
// 		}
// 	}
// 	for(let i=0; i<b.length; i++){
// 		if(!existsInArray(combined,b[i])){
// 			combined[combined.length] = b[i]
// 		}
// 	}
// 	return combined
// }
// function existsInArray(arr, val){
// 	for(let j=0; j<arr.length; j++){
// 		if(arr[j] === val) return true
// 	}
// 	return false
// }
// let a = [1,2,3,4,5]
// let b = [5,3,7,8,9]
// console.log(mergeAndRemoveDuplicate(a,b));


//23)	Write a JavaScript program that takes an array like [1, 1, 2, 3, 3, 3] and returns an object where the keys are the elements and the values
		//  are the count of how many times each element appears

	
	// function countFrequencyBuiltIn(arr){
	// 	let result = {}

	// 	arr.forEach(item => {
	// 		if(result[item]){
	// 			result[item]+=1
	// 		}
	// 		else{
	// 			result[item] = 1
	// 		}
	// 	})
	// 	return result
	// }
	// console.log(countFrequencyBuiltIn([1, 1, 2, 3, 3, 3]));
	

	//-----

  

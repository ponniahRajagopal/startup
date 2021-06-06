/**
Bonus: Make it so it organizes strings differently from number types. i.e. 

Input: 

[1, "2", "3", 2] should return 


- Split Create two arrays of numbers and strings

- Number Sort number array and ordinary sort strings
- Add two arrays in an array and return

Output: 

[[1,2], ["2", "3"]]

**/


const mixed = 	[1, "2", "3", 2,5,6,7,8,9,"10"];

let sorted	=	mixed.reduce((acc, current,ind,arr)=>{

	if(typeof(current)=="number"){
		console.log(`the number is ${current}, the type is ${typeof(current)}  and the number length ${acc[0].length}`);
		acc[0][acc[0].length]	=	current;
	}else if (typeof(current)=="string"){
		console.log(`the string is ${current}, the type is ${typeof(current)}   and the string length ${acc[1].length}`);
		acc[1][acc[1].length]	=	current;
	}
	acc[0].sort((a,b)=>a-b);
	acc[1].sort((a,b)=>a-b);
	return acc;

},[[],[]])




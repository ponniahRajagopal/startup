/**
 Write a javascript function that takes an array of numbers and a target number. 
 The function should find two different numbers in the array that, when added together, give the target number. 

 For example: answer([1,2,3], 4)should return 


Input: 

answer([1,2,3, 4, 2,4,0], 4) should return 
	- [1,3], [2,2], [4,0], [4,0]


- Loop for every elemtn in the array 
	- compare the elements in rest of the array to check (a+b==c)
		- if true => add the pair to accumulator 
	- return accumulator

Output: 

[[1,3],[2,2],[4,0],4,0]]

**/


const array	=	[1,2,3, 4, 2,4,0];

console.log(answer(array,4));

function answer(arr,numChk){
	let j 	=	0;
	const ans 	=	arr.reduce((acc,currentE,index,arra)=>{

			for(i=index+1;i<=arr.length-1;i++){
				if(currentE+arra[i]==numChk){
					acc[j]=[currentE,arra[i]];
					j++
				}
			}

		return acc;
	},[])
	return ans;
}




/**

Sort Array -> default is string sort; change to numeric sort
iterate Array using reduce
	filter parent array by each element (only when the element is not suplicate)
		what is resulting has to be pushed to accumulator - which was an empty array to start with
**/

const array	= [3,5,2, 25, 32,5,1,99,2,4,2,2,2,2,5];
let sorted = array.sort((a,b)=>a-b);
console.log(`Sorted array ${sorted}`)
let temp;

const sortedAndSubARRAY = array.reduce((accumulator,currentValue,index,arr)=>{
	if (temp!=currentValue){ // to eliminate duplicate 
		iterator=index;
		const filteredArray=arr.filter(currentFilterValue=>currentFilterValue==currentValue);
		if (filteredArray.length==1){
			accumulator[iterator]	=	filteredArray[0];
		}else{
			accumulator[iterator]	=	filteredArray;	
		}
		temp=currentValue;	// to check for duplicates
	}
	return accumulator;
	},[])





const array	= [3,5,2, 25, 32,5,1,99,2,4,2,2,2,2,5];
let sorted = array.sort((a,b)=>a-b);
console.log(`Sorted array ${sorted}`)
let temp;

const sortedAndSubARRAY = array.reduce((accumulator,currentValue,index,arr)=>{
	if (temp!=currentValue){ // to eliminate duplicate 
		iterator=index;
		//console.log(`Accumulator ${accumulator} current value ${currentValue} index ${index} and array${arr}`);
		const filteredArray=arr.filter(currentFilterValue=>currentFilterValue==currentValue);
		if (filteredArray.length==1){
			accumulator[iterator]	=	filteredArray[0];
			// ullen iyya
			console.log(`Ullen ayya .... Accumulator ${accumulator} current value ${currentValue} index ${index} and array${arr}`);
		}else{
			accumulator[iterator]	=	filteredArray;	
		}
		//console.log(filteredArray);
		//accumulator.push(filteredArray);
		temp=currentValue;

	}
	return accumulator;
	},[])




/**

Sort Array
iterate Array 
filter by each element 
what is resulting has to be pushed to an empty array
	check for duplicate 
**/
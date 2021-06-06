const array	= [3,5,2];

function sort (array){

	for (i=1;i<array.length;i++){
		let current = array[i];
		console.log("Current item",current);
		console.log("Iterator L1", i);
		for(j=i-1;j>0;j--){
			console.log("Iterator L2", j);
			console.log("Comparint ", current, array[j]);
			if(current<array[j]){
				console.log("swapping",current, array[j]);
				swap(array,i,j);

			}
		}
	}
	console.log(array);
}

function swap(array, sIndex1, sIndex2){

	let temp = array[sIndex1];
	array[sIndex1] 	=	array[sIndex2];
	array[sIndex2]	=	temp;
	return array;

}

let sorted = sort(array);



// Sorting 
// Compare and Swap



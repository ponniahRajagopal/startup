
//const array	= [3,5,2];


const arr	= [3,5,2, 1];
//let sorted = sort(array);

function sort (array){

	for (i=0;i<array.length-1;i++){
		if (array[i]>array[i+1]){
			swap(array,i,i+1)
		}
		for(j=i;j>0;j--){
			if (array[j]<array[j-1]){
				swap(array,j,j-1)
			}
		}
	}
	return array;
}

function swap(array, sIndex1, sIndex2){

	let temp = array[sIndex1];
	array[sIndex1] 	=	array[sIndex2];
	array[sIndex2]	=	temp;
	return array;

}

let sorted = sort(arr);



// Sorting 
// Compare and Swap



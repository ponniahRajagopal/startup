/**
Question 3: Write a function that converts HEX to RGB. 
Then Make that function auto-dect the formats so that 
if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.


Input: colourConvert(r,g,b)

Output: HEXColour

Input: colourConvert(HEXColour)

Output: RGB



Approach 

- Make first as mandatory parameters and the rest optional
	- check if either 1 or three parameters are provided
		- throw error
			- if two
			- if one it has to be string 
			- if three all has to be number 
		- If RGB is provided
			- ReturnHEX
				- convert integer to hex
			- Correct o/p
				- if string length is 1 prepend 0
			- Throw error
				- if the number is more than 255 
		- if HEX is provided 
			- RETURN RGB Array
				- convert string to integer 
				- throw error
					- if the i/p has more than 8 bits for RGB (is more than 255)

**/


function colourConvert(a,b=0,c=0){

	if ((typeof(a)==typeof(b))&&(typeof(a)==typeof(c))&&(typeof(b)==typeof(c))&&typeof(a)=='number'&&(a<=255&&b<=255&&c<=255)){
		//console.log("valid number i/p");
		let R = a.toString(16).length==1?"0"+a.toString(16):a.toString(16);
		let G = b.toString(16).length==1?"0"+b.toString(16):b.toString(16);
		let B = c.toString(16).length==1?"0"+c.toString(16):c.toString(16);
		return "#"+R+G+B;

	}else if((typeof(a)=='string')&&(b==0&&c==0)&&a.length==7) {
		//console.log("valid string i/p");
		return [parseInt(a.substring(1,3),16),parseInt(a.substring(3,5),16),parseInt(a.substring(5,7),16)]

	}else {
		return "invalid i/p";
		//console.log("invalid input");
	}

}

let converted = colourConvert(266,0,0);
let converted = colourConvert("#FF00FF");



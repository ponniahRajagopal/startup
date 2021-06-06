var css 	= 	document.querySelector("h3");
var color1 	= 	document.querySelector(".color1");
var color2 	= 	document.querySelector(".color2");
var body 	= 	document.getElementById("gradient");
var random 	=	document.getElementById("random");

function setDefault(c1,c2){
	color1.setAttribute("value", c1);
	color2.setAttribute("value", c2);
	css.textContent = getComputedStyle(body).background + ";+ ";
}



function setGradient() {
	body.style.background = 
	"linear-gradient(to left, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";+ ";
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


function appendZero(hex) {
	if (hex.length ==1){
		hex	=	"0"+hex;
	}
	return hex;
}

function setRandomBackGround(){
	//console.log("step1");
	//linear-gradient(to left, rgb(255, 0, 0), rgb(255, 255, 0))

	// Picking a random number for R , G & B

	var r1 = getRandomInt(0,256);
	var r2 = getRandomInt(0,256);
	var r3 = getRandomInt(0,256);
	var r4 = getRandomInt(0,256);
	var r5 = getRandomInt(0,256);
	var r6 = getRandomInt(0,256);


	// Converting colour to HEX

	var cc1	=	"#"+appendZero(Number(r1).toString(16))+appendZero(Number(r2).toString(16))+appendZero(Number(r3).toString(16));
	var cc2	=	"#"+appendZero(Number(r4).toString(16))+appendZero(Number(r5).toString(16))+appendZero(Number(r6).toString(16));


	body.style.background = 
	"linear-gradient(to left, " 
	+ "rgb("+r1+", "+r2+", "+ r3+")"
	+ ", " 
	+ "rgb("+r4+", "+r5+", "+ r6+")" 
	+ ")";
	setDefault(cc1,cc2);
	css.textContent = body.style.background + ";+ ";

}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", setRandomBackGround);

setDefault("#FF0000","#FFFF00");
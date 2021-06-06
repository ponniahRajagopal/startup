var button 	= 	document.getElementById("add");
var todo	=	document.getElementById("todo");
var ol 		=	document.querySelector("ol");
var todoLength	=	todo.value.length;

function createListElement(){
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(todo.value));
		ol.appendChild(li);
		todo.value	="";
}

function addContentOnButtonClick(){
	if (todo.value.length >0){
		createListElement();
	}
}

function addContentOnEnter(event){
	console.log(event);
	if (todo.value.length >0 && event.which==13){
		createListElement();	
	}
}

button.addEventListener("click",addContentOnButtonClick);

todo.addEventListener("keypress",addContentOnEnter);
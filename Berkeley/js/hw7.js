document.addEventListener("DOMContentLoaded", function() { //event listener (Step 1.1 )
	//btnSave.onclick = fSave; //(Step 1.2, 2.1)
	//btnCancel.onclick = fCancel; //(Step 1.2, 2.1 )
	//btnHelp.onclick = fHelp; //(Step 1.2, 2.1 )
	divMain.onclick = fSaveCancelHelp; //event listener (Step 2.2)
	divMain.addEventListener('focus',function(event){fGotFocus(event);}, true); //(Step 4.1, 4.2)
	//focus and blur event does not get bubbled but by default its bubble, 
	//so, to execute these we need to set capture
	divMain.addEventListener('blur',function(event){fLostFocus(event);}, true); //(Step 4.1, 4.2)
	fGetAllElements(); //function invoke (Step 5.1)
});

function fSaveCancelHelp(e){ //function declaration (Step 2.3)
	var upper = e.target.id.toUpperCase(); 
	//getting the value of target element and converting it to upper case (Step 2.3)
	var edited = upper.slice(3); //removing the prefix (Step 3.1)
	//alert (edited);
	switch(edited) { //switch statement (Step 2.4)
		case "Save".toUpperCase(): //prefix btn removed (Step 3.2)
			alert("Data has been saved!");
		break;
		case "Cancel".toUpperCase():
			alert("Operation has been canceled!");
		break;	
		case "Help".toUpperCase(): 
			alert ("Help is not available!");
		break;
	}
}

//function declaration (Step 4.3, 4.4)
function fGotFocus(e){
	if (e.target.type == "text"){
		e.target.style.backgroundColor = "yellow"; //set background color when text element is in focus
		//document.getElementById("message").value += "Tar:" + e.currentTarget +"Typ:"+e.type+ "Phs:" + e.eventPhase + " -> ";
		//above commented line can be used to test what phase is active when the method is called
	}
}

//function declaration (Step 4.3, 4.5)
function fLostFocus(e){
	if (e.target.type == "text"){
		e.target.style.backgroundColor = ""; //remove background color when out of focus
	}
}

//function declaration (Step 5.2)
function fGetAllElements(){ 
	var arrElements = document.querySelectorAll('#divMain > *[type="button"], #divMain > * > *[type="input"]' );
	//search all element in divMain and its child with type=button (Step 5.3)
	//search all element in divMain's grandchildren with type=input (Step 5.3)
	//alert ("arrElements is:" + arrElements);
	for (var i = 0; i < arrElements.length; i++) { //looping through the array (Step 5.4)
		alert ("The element is: " + arrElements[i].id); //getting the id value for each element in the array (Step 5.4)
	}
	$("#divJQuery").fadeIn(3000); //jQuery fadeIn method (Step 5.5)
}

/* //(Step 1.3) Declaring functions
function fSave(){
	alert("Data has been saved!");
}

function fCancel(){
	alert("Operation has been canceled!");
}

function fHelp(){
	alert("Help is not available!");
} */
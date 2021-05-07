function validateForm() {
  var x1 = document.forms["myForm"]["fname"].value;
  var x2 = document.forms["myForm"]["lname"].value;
  var x3 = document.forms["myForm"]["Web"].value;
  var x4 = document.forms["myForm"]["phone"].value;
  var x5 = document.forms["myForm"]["email"].value;
  var x6 = document.forms["myForm"]["Username"].value;
  var x7 = document.forms["myForm"]["Pass"].value;
  var x8 = document.forms["myForm"]["Degree"].value;
  var x9 = document.forms["myForm"]["graduate"].value;
  var x10 = document.forms["myForm"]["CV"].value;
  if (!isNaN(x1)) 
  {
    alert("please enter first name");
	document.getElementById("fname").style.border = "1px solid #ddd"; 
    document.getElementById("fname").style.borderColor = "red"; 
    return false;
  }
  else 
  {
	document.getElementById("fname").style.border = "1px solid black"; 
    document.getElementById("fname").style.borderColor = "black"; 
  }
  if (!isNaN(x2)) 
  {
     alert("please enter last name");
	document.getElementById("lname").style.border = "1px solid #ddd"; 
    document.getElementById("lname").style.borderColor = "red"; 
    return false;
}
else
{
	document.getElementById("lname").style.border = "1px solid black"; 
    document.getElementById("lname").style.borderColor = "black"; 
}
  if (!isNaN(x3))  
{
     alert("please enter Website");
	document.getElementById("Web").style.border = "1px solid #ddd"; 
    document.getElementById("Web").style.borderColor = "red"; 
    return false;
}
else
{
	document.getElementById("Web").style.border = "1px solid  black"; 
    document.getElementById("Web").style.borderColor = "black"; 
}
  if (!isNaN(x4))  
  {
     alert("please enter phone number");
	document.getElementById("phone").style.border = "1px solid #ddd"; 
    document.getElementById("phone").style.borderColor = "red"; 
    return false;
}
else
{
	document.getElementById("phone").style.border = "1px solid  black"; 
    document.getElementById("phone").style.borderColor = "black"; 
}
  if (!isNaN(x5))   
  {
    alert("please enter email");
	document.getElementById("email").style.border = "1px solid #ddd"; 
    document.getElementById("email").style.borderColor = "red"; 
    return false;
}
else
{
	document.getElementById("email").style.border = "1px solid  black"; 
    document.getElementById("email").style.borderColor = "black"; 
}
  if (!isNaN(x6))   
  {
     alert("please enter Username");
	document.getElementById("Username").style.border = "1px solid #ddd"; 
    document.getElementById("Username").style.borderColor = "red"; 
    return false;
}
else
{
	document.getElementById("Username").style.border = "1px solid black"; 
    document.getElementById("Username").style.borderColor = "black"; 
}
  if (!isNaN(x7))   
  {
     alert("please enter Password");
	document.getElementById("Pass").style.border = "1px solid #ddd"; 
    document.getElementById("Pass").style.borderColor = "red"; 
    return false;
}
else
{
	document.getElementById("Pass").style.border = "1px solid black"; 
    document.getElementById("Pass").style.borderColor = "black";
}
 if (!isNaN(x8))
	 {
     alert("please enter Degree");
	document.getElementById("Degree").style.border = "1px solid #ddd"; 
    document.getElementById("Degree").style.borderColor = "red"; 
    return false;
  }
  else
  {
	 document.getElementById("Degree").style.border = "1px solid black"; 
    document.getElementById("Degree").style.borderColor = "black"; 
  }
   if (!isNaN(x9))
	   {
     alert("please enter graduate");
	document.getElementById("graduate").style.border = "1px solid #ddd"; 
    document.getElementById("graduate").style.borderColor = "red"; 
    return false;
  }
  else
  {
	document.getElementById("graduate").style.border = "1px solid black"; 
    document.getElementById("graduate").style.borderColor = "black"; 
  }
   if (!isNaN(x10))
	   {
     alert("please enter CV");
	document.getElementById("CV").style.border = "1px solid #ddd"; 
    document.getElementById("CV").style.borderColor = "red"; 
    return false;
  }
  else
  {
	document.getElementById("CV").style.border = "1px solid black"; 
    document.getElementById("CV").style.borderColor = "black"; 
  }
}
function Save()
{
var x = document.forms["myForm"]["email"].value;
var flag=1;
var text=" ";
var i;
 if (!isNaN(x))
 {
	 alert("please enter your email");
	document.getElementById("email").style.border = "1px solid #ddd"; 
    document.getElementById("email").style.borderColor = "red"; 
	return false;
 }
 else
 {
	document.getElementById("email").style.border = "1px solid black"; 
    document.getElementById("email").style.borderColor = "black"; 
	 for(i=0;i<x.length&&flag;i++)
	 {
		 if(x[i] !== "@")
		 {
			 text+=x[i];
		 }
		 else
		 {
			 flag=0;
		 }
	 }
	alert("The application of [" + text + " ] is saved!");
 }
}
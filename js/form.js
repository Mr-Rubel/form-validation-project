// Database store
var dbnam = "mijan";
var dbmail = "mmmm@gmail.com";
var dbpwd = "asdf";
var dbman1 = "admin";
var dbman2 = "modaretor";
var dbman3 = "user";
	// Database store

document.querySelector("#btn-submit").addEventListener("click",function(){

	// selecting inputs
	var username = document.querySelector("#name").value;
	var usermail = document.querySelector("#email").value;
	var userpwd = document.querySelector("#pwd").value;
	var usercpwd = document.querySelector("#cpwd").value;
	var userwho = document.querySelector("#who").value;
// selecting inputs

	// condition start
	if (username === "" || usermail === "" || userpwd === "" || usercpwd === "" || userwho===""){

		document.querySelector(".all-field").innerHTML = "You must fill all blanks";

	} else if(username !== dbnam){

		document.querySelector(".error-name").innerHTML = "Invalid Username";

	} else if(usermail !== dbmail) {

		document.querySelector(".error-mail").innerHTML = "Invalid mail";

	}else if (userpwd !== dbpwd) {

		document.querySelector(".error-pwd").innerHTML = "Invalid password";

	} else if (userpwd !== usercpwd) {

		document.querySelector(".error-cpwd").innerHTML = "password not matching";

	}else if ((username === dbnam) && (usermail === dbmail) && (userpwd === dbpwd) && (userpwd === usercpwd)){

		document.querySelector(".form-div").style.display="none";

		// nasted condition start
		
		  if(userwho === dbman1){
			document.querySelector(".welcome").innerHTML = "Welcome admin sir, You can access everything";
		}else  if (userwho === dbman2) {
			document.querySelector(".welcome").innerHTML = "Welcome modaretor Bro, You have some restriction";
		} else if (userwho === dbman3) {
			document.querySelector(".welcome").innerHTML = "Welcome , You are just a user";
		}

		// nasted condition start
	}
	else{
		document.querySelector(".all-field").innerHTML = "You are todako";
	}
	// condition end
	
});
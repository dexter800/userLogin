


var database = [{
	username: "Prati",
	password: "sarita"
}, 
{
	username: "Bob",
	password:"1234"
},
{
	username:"Reo",
	password:"all"
}
];
var newFeeds = [
{
	username: "Sally", 
	timeline: "Hello,I an sally!"
},
{
	username:"Bineet", 
	timeline: "I am cool"
}, 
{
	username:"Reo",
	timeline:"All good"
}
]; 
function isUserValid(username,password){
	for(i=0; i< database.length; i++) {
		if(database[i].username === username &&
			database[i].password === password){
			return true;
		} 
	}
	return false;
}

function signIn(username, password) {
	if (isUserValid(username, password)){
		console.log(newFeeds);
	} else {
		alert("Your username and password is Wrong");
	}
}


var userNamePrompt = prompt("What is your username?");
var userPassWord = prompt("What is your password"); 


signIn(userNamePrompt, userPassWord); 

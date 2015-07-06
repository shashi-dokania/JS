
var youDontNeedToWorryAboutAnythingInHere = function() {
	
	var NameArray = ['Noel Plain', 'Steffanie Plain', 'Hester Sanderfur', 'Retta Plain', 'Idella Saur','Shila Plain', "Marybeth Peavler", "Chadwick Jin", "Jerold Chauez", "Roselle Plain", "Doria Figgins", "Seth Arvizu", 'Gloria Wyche', "Melodi Plain", "Robin Shackleford", "Jack Plain", "Marina Prost", "Melvina Plain", "Ryan Plemons", "Janis Ohare", "Assata Shakur", "Kanye West", "Jay-Z", "Mariah Carey", "Bianca Gandolfo", "Cedric the Entertainer", "Chloe Plain"];
	
	var JobArray = ['Mortician', 'Broadcaster', 'Craftsperson', 'Engineer', 'Interior designer', 'Nun'];
	
	var CityArray = ["Scottsdale, Arizona", "Oakland, California", "Stockton, California", "New York, NY"];
	
	var emptyNetwork = [];
	
	function createNetwork(collection){

		for (var i = 0; i < NameArray.length; i++) {
			
			var randomJob = JobArray[Math.floor(Math.random() * JobArray.length)];
			var randomCity = CityArray[Math.floor(Math.random() * CityArray.length)];

			collection.push(createNewUser(NameArray[i], randomJob, randomCity));
		}
		return collection
	};
	return createNetwork(emptyNetwork);
};

function createNewUser(username, job, city){
	var newUser = {
		username: username,
		job: job,
		city: city,
		friends: [],
		family: [],
		coworkers: [],
	};

	return newUser;
};

// creating the user you're going to be adding to
var joeyProfile = createNewUser('Joey Plain', 'Engineer', 'Oakland, California');
// creating the network collection you're going to be pulling
var allUsers = youDontNeedToWorryAboutAnythingInHere();
// check the console to see what these look like
//console.log(allUsers);

//console.dir(ourUser);
//console.dir(userNetwork);
//console.dir(joeyProfile);

// YOUR CODE HERE
/*we are creating a profile for each user with their name, job & city
we will be using the given list of user name, ocuupation and city to create each users profile
to create a network for each user we iterate through their names and assign them a random job and a random city.
we create a list with all users details*/
//adding friends to Joeysprofile if they are from the same city

for(var key in allUsers){
	if(typeof allUsers[key] === 'object' && allUsers[key].city === 'Oakland, California'){
		joeyProfile.friends.push(allUsers[key].username);
	}
}

for(var key in allUsers){
	if(typeof allUsers[key] === 'object' && allUsers[key].job === 'Engineer'){
		joeyProfile.coworkers.push(allUsers[key].username);
	}
}

for(var key in allUsers){
	var allUsersName = allUsers[key].username.split(" ");
	if(typeof allUsers[key] === 'object' && allUsersName[1] === 'Plain'){
		joeyProfile.family.push(allUsers[key].username)
	}	
}
	
//console.log(joeyProfile);

for(var i = 0; i < joeyProfile.friends.length; i++){
	for(var j = 0; j < joeyProfile.family.length; j++){
		if(joeyProfile.friends[i] === joeyProfile.family[j]){
			joeyProfile['friends'].splice(i);
		}
	}
}

for(var i = 0; i < joeyProfile.friends.length; i++){
	for(var j = 0; j < joeyProfile.coworkers.length; j++){
		if(joeyProfile.friends[i] === joeyProfile.coworkers[j]){
			joeyProfile['coworkers'].splice(j);
		}
	}
}
//console.dir(joeyProfile);
function nameSort(arr){
	return arr.sort();
};

var friendsArray = joeyProfile.friends;
var familyArray = joeyProfile.family;
var coworkersArray = joeyProfile.coworkers;

nameSort(friendsArray);
nameSort(familyArray);
nameSort(coworkersArray);

console.log(friendsArray);
console.log(familyArray);
console.log(coworkersArray);
//console.log(joeyProfile);

function networkCheck(arr, name){
	for(var i = 0; i < arr.length; i++){
		if(arr[i] === name){
			for(var key in allUsers){
				var details = allUsers[key];
					if(allUsers[key].username === name){
						return details;
					}
			}	
		}		
	}
};

function networkCheck(arr, name){
	var flag = 0;
	for(var j = 0; j<allUsers.length; j++){
		if(allUsers[j].username === name){
			flag++;
		}
	}
	if(flag === 0){
		var jobType = prompt("please enter your job type: ");
		var city1 = prompt("please enter your city: ");
		var newObj = createNewUser(name, jobType, city1);
		allUsers.push(newObj);
		return allUsers[allUsers.length - 1];
	}
	for(var i = 0; i < arr.length; i++){
		for(var j = 0; j<allUsers.length; j++){
			if(allUsers[j].username === name && arr[i] === name){
				var str = "'Name: " + allUsers[j].username + "\n" + " Job: " + allUsers[j].job + "\n" + " City: " + allUsers[j].city + "\n" + " Friends: " + allUsers[j].friends.length + ",\n" + " Family: " + allUsers[j].family.length + ",\n" + " Coworkers: " + allUsers[j].username.length + "'";
				return str;
			}				
		}					
	}	
};

var friendsArray = joeyProfile.friends;
console.log(friendsArray);
var networkInfo = networkCheck(friendsArray,'Doria Figgins');
console.log(networkInfo);
//networkCheck(friendsArray, 'Solomon Daniels');

/*for(var key in allUsers){
	console.log(allUsers[key].username);
}*/

 
 
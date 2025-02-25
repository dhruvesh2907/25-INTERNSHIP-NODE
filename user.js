console.log("user file loaded....") 
 var userName = "Ram" 
 var userAge = 23 

const printUserData = (a)=>{ 
console.log("print userdata function called from user.js file...",a) 
}
//export 
// module.exports = userName 
// module.exports = userAge 

module.exports = { 
userName, userAge, printUserData 

} 
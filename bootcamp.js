/* Javascript Bootcamp */
/* Jesse Izeboud MD2A */


(function(){
    console.log("Page Loaded.");
})();


function sayHello(name) {
  var text = 'Hello ' + name;
  var say = function() { console.log(text); }
  return say;
}
var say = sayHello('Bob');
say();

function mulitply(x,y) {
  console.log(x * y);
  return x * y;
}

function add(x,y) {
  console.log(x * y);
  return x + y;
}

var x = function add() {
  console.log(x + y);
  return x + y;
}

var y = function mulitply() {
  console.log(x * y);
  return x * y;
}

var age = function () {
  console.log(user.age);
  return user.age;
}

var fullName = function () {
  console.log(user.firstName + " " + user.lastName);
  return user.firstName + " " + user.lastName;
}

var artist = "Tyler, The Creator";

function setArtist(a) {
  console.log(artist);
  artist = a;
  console.log(artist);
  var artist = "Tyler, The Creator"
}

setArtist("Kid Cudi");
console.log(artist);

 var user = {
   firstName: "Jesse",
   lastName: "Izeboud",
   age: 16,
   isMale: true,
   isFemale: false,
   height: 1.78,
   weight: 62,
   zipCode: "1521 BV",
   street: "Celebesstraat",
   houseNumber: 60,
   country: "The Netherlands",
   countryCode: "NL",
   phoneNumber: 0642342549,
   isMarried: false,
   email: "jesseizeboud@gmail.com",
 };

 function listProperties(obj) {
    var propList = "";
    for(var propName in obj) {
       if(typeof(obj[propName]) != undefined) {
          propList = propList + propName + " = " + typeof(obj[propName]) + "\r\n"
       }
    }
    console.log(propList);
 }


listProperties(user);

// Number + String
console.log(user.firstName = user.firstName + user.age);
// Number + Boolean
console.log(user.age = user.age + user.isMale);
// String + Boolean
console.log(user.country = user.country + user.isMale);
// Number + String Number
console.log(user.weight = user.weight + "12");
// String Number + String Number
console.log("12" + "12");

listProperties(user);

// Arrays

var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

var names = ["Stan","Nelson","Tom","Jesse","Bas","Vince","Emilio","Noah","James"];

var teachers = ["Ed","Theo","Hjalmar"];

var numbers = [0,6,3,1,4,5,7,9,34,9,10];

console.log("Countries Length: " + countries.length);
console.log("Names Length: " + names.length);
console.log("Teachers Length: " + teachers.length);

var z = [];
z.push("a");

names.splice(0, 1);
names.splice(2, 1);
console.log(names);

names.pop();
console.log(names);

names.shift();
console.log(names);

names.sort();
console.log(names);

names.reverse();
console.log(names);

numbers.sort();
console.log(numbers);

var teachers2 = teachers.slice(1, 3);
console.log(teachers2);

teachers.push("Test");
console.log(teachers);

var array = new Array(1,3,5,7,9);
var array2 = [35,21,35,51,8];
// Chosen Style Guide: https://github.com/jshttp/style-guide/

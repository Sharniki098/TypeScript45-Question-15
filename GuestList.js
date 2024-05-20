var Gust_List = ["Muskan", "Aria", "Mel"];
for (var i = 0; i < Gust_List.length; i++) {
    console.log("Dear Miss." + Gust_List[i] + ",\n\nit is our pleauusr to invite you in our party. \n\nThank You!");
}
var absentGuest = "Muskan";
var newGuest = "Gurya";
for (var i = 0; i < Gust_List.length; i++) {
    console.log("Dear Miss." + Gust_List[i] + ",\n\nit is our pleauusr to invite you in our party. \n\nThank You!");
}
Gust_List[0] = newGuest;
console.log("Miss. ".concat(absentGuest, " is not coming to the party. "));

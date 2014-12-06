//Cache the shield selector
var $shield = $("#shield");

//Declare the color values
var orColor = "#FFFF22";
var argentColor = "#FFFFFF";
var azureColor = "#0033CC";
var gulesColor = "#FF0000";
var purpureColor = "#CC3399";
var sableColor = "#000000";
var vertColor = "#009900";

//Button color controls
$("#or").click( function() {
  $shield.css("background-color", orColor);
});

$("#argent").click( function() {
  $shield.css("background-color", argentColor);
});

$("#azure").click( function() {
  $shield.css("background-color", azureColor);
});

$("#gules").click( function() {
  $shield.css("background-color", gulesColor);
});

$("#purpure").click( function() {
  $shield.css("background-color", purpureColor);
});

$("#sable").click( function() {
  $shield.css("background-color", sableColor);
});

$("#vert").click( function() {
  $shield.css("background-color", vertColor);
});
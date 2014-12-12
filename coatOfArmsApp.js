//Cache the shield selector
var $shield = $("#shield");

//Button color controls

function removeColor(jQueryObj) {
  jQueryObj.removeClass("defaultColor").removeClass("orColor").removeClass("argentColor").removeClass("azureColor").removeClass("gulesColor").removeClass("purpureColor").removeClass("sableColor").removeClass("vertColor");
  return jQueryObj;
}

$("#or").click(function() {
  removeColor($shield).addClass("orColor");
});

$("#argent").click(function() {
  removeColor($shield).addClass("argentColor");
});

$("#azure").click(function() {
  removeColor($shield).addClass("azureColor");
});

$("#gules").click(function() {
  removeColor($shield).addClass("gulesColor");
});

$("#purpure").click(function() {
  removeColor($shield).addClass("purpureColor");
});

$("#sable").click(function() {
  removeColor($shield).addClass("sableColor");
});

$("#vert").click(function() {
  removeColor($shield).addClass("vertColor");
});

//Ordinary dropdown menu controls
$(".dropdown-menu li a").click(function(event){
  event.preventDefault();
  $shield.html("<div id='parallelogram'></div>");
});
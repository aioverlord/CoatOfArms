//Cache the shield selector
var $shield = $("#shield"),
    pastFieldColor = "",
    pastOrdinaryColor = "";

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



// Click controls for Field Color
$("#fieldColor").next(".dropdown-menu").find("li a").click(function(event) {
  event.preventDefault();
  removeColor($shield).addClass($(event.target).attr("data-value"));
  //   //removeColor($shield).addClass($target.val());
  //   removeColor($shield).addClass("orColor");
});

// Click controls for Ordinary Type
$("#ordinaryType").next(".dropdown-menu").find("li a").click(function(event) {
  event.preventDefault();
  $shield.html("<div id=" + $(event.target).attr("data-value") + " class='defaultColor'></div>");
});

// Click controls for Ordinary Color
$("#ordinaryColor").next(".dropdown-menu").find("li a").click(function(event) {
  event.preventDefault();
  $ordinary = $shield.children("div");
  removeColor($ordinary).addClass($(event.target).attr("data-value"));
  //   //removeColor($shield).addClass($target.val());
  //   removeColor($shield).addClass("orColor");
});



// Hover controls for Field Color
$("#fieldColor").next(".dropdown-menu").find("li a").hover(function(event) {
  var $target = $(event.target);
  console.log($target.attr("data-value"));
  //   //removeColor($shield).addClass($target.val());
  //   removeColor($shield).addClass("orColor");
});



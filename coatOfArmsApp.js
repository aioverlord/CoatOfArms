//Cache the shield selector
var $shield = $("#shield"),
//Cache colors for hover function
    pastFieldColor = "",
    pastOrdinaryColor = "";

//Custom function to remove color classes
function removeColor(jQueryObj) {
  jQueryObj.removeClass("defaultColor").removeClass("orColor").removeClass("argentColor").removeClass("azureColor").removeClass("gulesColor").removeClass("purpureColor").removeClass("sableColor").removeClass("vertColor");
  return jQueryObj;
}


// Click controls for Field Color
$("#fieldColor").next(".dropdown-menu").find("li a").click(function(event) {
  event.preventDefault();
  removeColor($shield).addClass($(event.target).attr("data-value"));
});

// Click controls for Ordinary Type
$("#ordinaryType").next(".dropdown-menu").find("li a").click(function(event) {
  event.preventDefault();
  var value = $(event.target).attr("data-value")
  switch(value) {
    case "chevron":
    case "cross":
    case "saltire":
      $shield.html("<div id='" + value + "1' class='defaultColor'></div><div id='" + value + "2' class='defaultColor'></div>");
      break;
    default:
      $shield.html("<div id='" + value + "' class='defaultColor'></div>");
  } 
});

// Click controls for Ordinary Color
$("#ordinaryColor").next(".dropdown-menu").find("li a").click(function(event) {
  event.preventDefault();
  $ordinary = $shield.children("div");
  removeColor($ordinary).addClass($(event.target).attr("data-value"));
});



// Hover controls for Field Color
$("#fieldColor").next(".dropdown-menu").find("li a").hover(function(event) {
  var $target = $(event.target);
  console.log($target.attr("data-value"));
  //   //removeColor($shield).addClass($target.val());
  //   removeColor($shield).addClass("orColor");
});



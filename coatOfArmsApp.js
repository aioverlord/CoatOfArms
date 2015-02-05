jQuery.noConflict();
console.log(jQuery);
//Cache the shield selector
var jQueryshield = jQuery("#shield"),
//Cache colors for hover function
    pastFieldColor = "",
    pastOrdinaryColor = "";

//Custom function to remove color classes
function removeColor(jQueryObj) {
  jQueryObj.removeClass("defaultColor").removeClass("orColor").removeClass("argentColor").removeClass("azureColor").removeClass("gulesColor").removeClass("purpureColor").removeClass("sableColor").removeClass("vertColor");
  return jQueryObj;
}


// Click controls for Field Color
jQuery("#fieldColor").next(".dropdown-menu").find("li a").click(function(event) {
  event.preventDefault();
  removeColor(jQueryshield).addClass(jQuery(event.target).attr("data-value"));
});

// Click controls for Ordinary Type
jQuery("#ordinaryType").next(".dropdown-menu").find("li a").click(function(event) {
  event.preventDefault();
  var value = jQuery(event.target).attr("data-value")
  switch(value) {
    case "chevron":
    case "cross":
    case "saltire":
      jQueryshield.html("<div id='" + value + "1' class='defaultColor'></div><div id='" + value + "2' class='defaultColor'></div>");
      break;
    default:
      jQueryshield.html("<div id='" + value + "' class='defaultColor'></div>");
  } 
});

// Click controls for Ordinary Color
jQuery("#ordinaryColor").next(".dropdown-menu").find("li a").click(function(event) {
  event.preventDefault();
  jQueryordinary = jQueryshield.children("div");
  removeColor(jQueryordinary).addClass(jQuery(event.target).attr("data-value"));
});



// Hover controls for Field Color
jQuery("#fieldColor").next(".dropdown-menu").find("li a").hover(function(event) {
  var jQuerytarget = jQuery(event.target);
  console.log(jQuerytarget.attr("data-value"));
  //   //removeColor($shield).addClass($target.val());
  //   removeColor($shield).addClass("orColor");
});
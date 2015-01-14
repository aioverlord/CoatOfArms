//Cache the shield selector
var $shield = $("#shield"),
    pastFieldColor = "",
    pastOrdinaryColor = "";

//Button color controls

function removeColor(jQueryObj) {
  jQueryObj.removeClass("defaultColor").removeClass("orColor").removeClass("argentColor").removeClass("azureColor").removeClass("gulesColor").removeClass("purpureColor").removeClass("sableColor").removeClass("vertColor");
  return jQueryObj;
}


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
  var value = $(event.target).attr("data-value")
  switch(value) {
    case "chevron":
        $shield.html("<div id='chevron1' class='defaultColor'></div><div id='chevron2' class='defaultColor'></div>");
        break;
    case "cross":
    //code block
    break;
    case "saltire":
        $shield.html("<div id='saltire1' class='defaultColor'></div><div id='saltire2' class='defaultColor'></div>");
        break;
    default:
        $shield.html("<div id=" + value + " class='defaultColor'></div>");
  } 
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



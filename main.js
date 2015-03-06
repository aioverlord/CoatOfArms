(function(){
  var app = angular.module("main", []);

  app.controller("shieldController", function(){
    this.fieldColor = "defaultColor";
    this.ordinary =  {
      ordinaryType: "default",
      ordinaryColor: "defaultColor"
    };

    this.COLORS = [
      {data: "orColor", description: "Or - Gold "},
      {data: "argentColor", description: "Argent - Silver "},
      {data: "azureColor", description: "Azure - Blue "},
      {data: "gulesColor", description: "Gules - Red "},
      {data: "purpureColor", description: "Purpure - Purple "},
      {data: "sableColor", description: "Sable - Black "},
      {data: "vertColor", description: "Vert - Green "}
    ];

  });

  
})();
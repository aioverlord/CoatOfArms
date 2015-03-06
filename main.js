(function(){
  var app = angular.module("main", []);

  app.controller("shieldController", function(){
    this.fieldColor = "defaultColor";
    this.ordinary =  {
      ordinaryType: "default",
      ordinaryColor: "defaultColor"
    };

    this.COLORS = ["orColor", "argentColor", "azureColor", "gulesColor", "purpureColor", "sableColor", "vertColor"];
  });

  
})();
(function(){
  var app = angular.module("main", []);

  app.controller("shieldController", function(){
    this.fieldColor = "orColor";
    this.ordinary =  {
      ordinaryType: "default",
      ordinaryColor: "defaultColor"
    };
  });

  
})();
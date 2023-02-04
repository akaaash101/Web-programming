//Unit conversion functions

function ozToMl(oz) {
    return oz * 29.5735;
  }
  
  function mlToOz(ml) {
    return ml / 29.5735;
  }
  
  function lToMl(l) {
    return l * 1000;
  }
  
  function mlToL(ml) {
    return ml / 1000;
  }
  
  function inToCm(inches) {
    return inches * 2.54;
  }
  
  function cmToIn(cm) {
    return cm / 2.54;
  }
  
  function lbToKg(lb) {
    return lb / 2.20462;
  }
  
  function kgToLb(kg) {
    return kg * 2.20462;
  }
  
  //Button click events
  
  document.getElementById("ozToMlBtn").addEventListener("click", function() {
    var oz = document.getElementById("inputValue").value;
    var ml = ozToMl(oz).toFixed(2);
    document.getElementById("result").innerHTML = oz + " ounces = " + ml + " milliliters";
  });
  
  document.getElementById("mlToOzBtn").addEventListener("click", function() {
    var ml = document.getElementById("inputValue").value;
    var oz = mlToOz(ml).toFixed(2);
    document.getElementById("result").innerHTML = ml + " milliliters = " + oz + " ounces";
  });
  
  document.getElementById("lToMlBtn").addEventListener("click", function() {
    var l = document.getElementById("inputValue").value;
    var ml = lToMl(l).toFixed(2);
    document.getElementById("result").innerHTML = l + " liters = " + ml + " milliliters";
  });
  
  document.getElementById("mlToLBtn").addEventListener("click", function() {
    var ml = document.getElementById("inputValue").value;
    var l = mlToL(ml).toFixed(2);
    document.getElementById("result").innerHTML = ml + " milliliters = " + l + " liters";
  });
  
  document.getElementById("inToCmBtn").addEventListener("click", function() {
    var inches = document.getElementById("inputValue").value;
    var cm = inToCm(inches).toFixed(2);
    document.getElementById("result").innerHTML = inches + " inches = " + cm + " centimeters";
  });
  
  document.getElementById("cmToInBtn").addEventListener("click", function() {
    var cm = document.getElementById("inputValue").value;
    var inches = cmToIn(cm).toFixed(2);
    document.getElementById("result").innerHTML = cm + " centimeters = " + inches + " inches";
  });
  
  document.getElementById("lbToKgBtn").addEventListener("click", function () {
    var lb = document.getElementById("inputValue").value;
    var kilog = lbToKg(lb).toFixed(2);
    document.getElementById("result").innerHTML = lb + " lb = " + kilog + " kg";
  });
  
  document.getElementById("kgToLbBtn").addEventListener("click", function () {
    var kg = document.getElementById("inputValue").value;
    var pound = kgToLb(kg).toFixed(2);
    document.getElementById("result").innerHTML = kg + " kg = " + pound + " lb";
  });
  
   //all conversion functions

   // clear function

   document.getElementById("clearBtn").addEventListener("click", function() {
    document.getElementById("inputValue").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("inputValue").focus();
  });
  
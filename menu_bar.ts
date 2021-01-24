function myFunction() {
    var x = document.getElementById("MenuBar");
    if (x.className === "menu_bar") {
      x.className += " responsive";
    } else {
      x.className = "menu_bar";
    }
  }

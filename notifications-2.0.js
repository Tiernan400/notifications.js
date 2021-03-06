function notify(options) {
    if ( document.getElementById("notifcontainer") ) {
      //Get Notification Elements
      var element = document.getElementById("notifcontainer");
      var p = document.getElementById("notiftext");
      
      //Append Content
      p.innerHTML = options.text;
      if ( document.getElementById("notifbutton") ) {
        var button = document.getElementById("notifbutton");

        //Button Styles
        button.style.cursor = "pointer";
        button.style.border = "1px solid black";
        button.style.backgroundColor = "yellow";
        button.style.whiteSpace = "no-wrap";
        button.style.outline = "none";
        button.onmouseover = function(){button.style.backgroundColor = "white";}
        button.onmouseout = function(){button.style.backgroundColor = "yellow";}

        if ( options.isButton == true ) {
          button.innerHTML = options.buttonText;
          if ( options.buttonCallback != null ) {
            if ( options.withdrawOnClick == true ) {
              button.onclick = function(){
                options.buttonCallback();
                element.style.width = "0px";
                setTimeout(function() {element.style.display = "none";}, 1000);
            };
            } else {
              button.onclick = options.buttonCallback();
            }
          }
        } else {
            button.remove();
        }
      } else if ( options.isButton == true ) {
        var button = document.createElement("BUTTON");
        element.append(button);
        button.id = "notifbutton";
        button.innerHTML = options.buttonText;

        //Button Styles
        button.style.cursor = "pointer";
        button.style.border = "1px solid black";
        button.style.backgroundColor = "yellow";
        button.style.whiteSpace = "no-wrap";
        button.style.outline = "none";
        button.onmouseover = function(){button.style.backgroundColor = "white";}
        button.onmouseout = function(){button.style.backgroundColor = "yellow";}

        if ( options.buttonCallback != null ) {
          if ( options.withdrawOnClick == true ) {
            button.onclick = function(){
              element.style.width = "0px";
              options.buttonCallback();
              setTimeout(function() {element.style.display = "none";}, 1000);
            };
          } else {
            button.onclick = options.buttonCallback();
          }
        }
      }

      /* Styles */
      //Text
      p.style.display = "inline-block";
      p.style.whiteSpace = "no-wrap";
      p.style.margin = "5px";

      //Container
      element.style.display = "inline-block";
      element.style.width = "auto";
      element.style.paddingRight = "10px";
      element.style.paddingLeft = "5px";
      element.style.backgroundColor = "white";
      element.style.border = "1px solid black";
      element.style.overflow = "hidden";
      element.style.whiteSpace = "no-wrap";
      element.style.fontFamily = "arial";
      element.style.height = "30px";
      element.width = element.getBoundingClientRect().width;
      element.style.width = "0px";
      element.style.transition = "width 1s";
      setTimeout(function(){element.style.width = element.width;}, 100);

      //Hide Notification After 5 Seconds
      setTimeout(function() {
        element.style.width = "0px";
        setTimeout(function() {
            element.style.display = "none";
        }, 1000);
      }, 5000);
    } else {
      //Create Container
      var element = document.createElement("DIV");
      document.body.append(element);
      element.id = "notifcontainer";
      
      //Create Text
      var p = document.createElement("P");
      element.append(p);
      p.id = "notiftext";
      p.innerHTML = options.text;
      
      //Button
      if ( options.isButton == true ) {
        var button = document.createElement("BUTTON");
        element.append(button);
        button.id = "notifbutton";
        button.innerHTML = options.buttonText;

        //Button Styles
        button.style.cursor = "pointer";
        button.style.border = "1px solid black";
        button.style.backgroundColor = "yellow";
        button.style.whiteSpace = "no-wrap";
        button.style.outline = "none";
        button.onmouseover = function(){button.style.backgroundColor = "white";}
        button.onmouseout = function(){button.style.backgroundColor = "yellow";}

        if ( options.buttonCallback != null ) {
          if ( options.withdrawOnClick == true ) {
            button.onclick = function(){
              element.style.width = "0px";
              options.buttonCallback();
              setTimeout(function() {element.style.display = "none";}, 1000);
            };
          } else {
            button.onclick = options.buttonCallback();
          }
        }
      }
      
      /* Styles */
      //Text
      p.style.display = "inline-block";
      p.style.whiteSpace = "no-wrap";
      p.style.margin = "5px";

      //Container
      element.style.display = "inline-block";
      element.style.paddingRight = "10px";
      element.style.paddingLeft = "5px";
      element.style.backgroundColor = "white";
      element.style.zIndex = "9999999";
      element.style.position = "fixed";
      element.style.top = "15%";
      element.style.left = "0";
      element.style.width = "auto";
      element.style.border = "1px solid black";
      element.style.overflow = "hidden";
      element.style.whiteSpace = "pre";
      element.style.fontFamily = "arial";
      element.style.height = "30px";
      element.width = element.getBoundingClientRect().width;
      element.style.width = "0px";
      element.style.transition = "width 1s";
      setTimeout(function(){element.style.width = element.width;}, 100);
      
      //Hide Notification After 5 Seconds
      setTimeout(function() {
        element.style.width = "0px";
        setTimeout(function() {
            element.style.display = "none";
        }, 1000);
      }, 5000);
    }
}
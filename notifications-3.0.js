document.getElementsByTagName("html")[0].style.margin = 0;
document.body.style.margin = 0;

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

function cover(options) {
  //Default Options
  if ( typeof options != 'object' || options == null ) {
    options = {
      text: "Cover text",
      time: 5000,
      progress: true,
      bgcolor: "red",
      text_bgcolor: "white",
      color: "black",
      debug: false
    }
  }
  if ( options.text == undefined ) options.text = "Cover text";
  if ( options.time == undefined ) options.time = 5000;
  if ( options.progress == undefined ) options.progress = true;
  if ( options.bgcolor == undefined ) options.bgcolor = "red";
  if ( options.text_bgcolor == undefined ) options.text_bgcolor = "white";
  if ( options.color == undefined ) options.color = "black";
  if ( options.debug == undefined ) options.debug = false;

  //Check if function has been previously called
  if ( !document.getElementById("coverdiv") ) {
    //Create Stylesheet
    var style = document.createElement("STYLE");
    document.body.append(style);
    style.id = "notifstyle";
    style.innerHTML = '#coverdiv{position:absolute;top:200%;left:0px;opacity:1;transition:top .75s, opacity 1s;}';

    //Create Container
    var element = document.createElement("DIV");
    document.body.append(element);
    element.id = "coverdiv";
    
    //Create Text
    var h1 = document.createElement("H1");
    element.append(h1);
    h1.id = "covertext";
    h1.innerHTML = options.text;
    
    /* Styles */
    //Text
    h1.style.display = "inline-block";
    h1.style.whiteSpace = "no-wrap";
    h1.style.backgroundColor = options.text_bgcolor;
    h1.style.width = "100%";
    h1.style.fontSize = "40px";
    h1.style.height = "50px";
    h1.style.textAlign = "center";
    h1.style.paddingTop = "5px";
    h1.style.paddingBottom = "5px";

    //Container
    element.style.display = "flex";
    element.style.backgroundColor = options.bgcolor;
    element.style.color = options.color;
    element.style.zIndex = "999999";
    element.style.width = "99.5%";
    element.style.height = "99.5%";
    element.style.border = "1px solid black";
    element.style.overflow = "hidden";
    element.style.whiteSpace = "pre";
    element.style.fontFamily = "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif";
    element.style.justifyContent = "center";
    element.style.alignContent = "center";
    element.style.flexDirection = "column";
    setTimeout(function(){element.style.top = "0%";},100);
    
    if ( options.debug == true ) {
      console.log("Cover was called\nAdvanced: time="+options.time+", text="+options.text+", color="+options.color+", bgcolor="+options.bgcolor+", text_bgcolor="+options.text_bgcolor+", progress="+options.progress+", debug="+options.debug);
    }

    //Hide Cover After Custom Seconds
    setTimeout(function() {
      element.style.opacity = "0";
      setTimeout(function() {
        element.remove();
        h1.remove();
        style.remove();
      }, 1010);
    }, options.time);
  } else {
    console.warn("New cover was requested while previous one was still in use by the document");
  }
}
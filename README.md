# notifications.js

1. In your HTML/PHP file, point to notifications.js

  <script src="https://raw.githubusercontent.com/Tiernan400/notifications.js/main/notifications.js" ></script>
Or:
  <script src="notifications.js"></script>
2. Once you've done that, you can display a notification with the notify() function.
The format of the function is like so:

` notify(text, isButton, buttonText, buttonCallback, withdrawOnClick) `

* text is the text to display - must be a string

* isButton is whether to display a button or not - value must be boolean

* buttonText is self-explanatory - must be a string

* buttonCallback is the code to run when the button is clicked - value is like: function() { /* script */ } - is not mandatory

* withdrawOnClick is whether for the notification to disapear when the button is click - value must be boolean - is not mandatory

3. An example for mabye a messaging site:

`notify("New Message from "+user+"!", true, "Reply", function() { message(user); console.log("Message sent!") }, true);`

4. A live demo:
http://tiernan.tk/notificationjs

New Version
===========
* notifications-2.0.js
* https://raw.githubusercontent.com/Tiernan400/notifications.js/main/notifications-2.0.js

Improved Syntax
---------------
notify(options);

    notify({
        text: "New notification!",
        isButton: true,
        buttonText: "Ok",
        buttonCallback: function(){
            console.log("You clicked the button!");
        },
        withdrawOnClick: true
    });

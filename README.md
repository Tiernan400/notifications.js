# notifications.js

1. In your HTML/PHP file, point to main.js

  <script src="https://raw.githubusercontent.com/Tiernan400/notifications.js/main/main.js" ></script>
Or:
  <script src="notifications.js/main.js"></script>
2. Once you've done that, you can display a notification with the notify() function.
The format of the function is like so:

notify(text, isButton, buttonText, buttonCallback, withdrawOnClick)

* text is the text to display - must be a string

* isButton is whether to display a button or not - value must be boolean

* buttonText is self-explanatory - must be a string

* buttonCallback is the code to run when the button is clicked - value is like: function() { /* script */ } - is not mandatory

* withdrawOnClick is whether for the notification to disapear when the button is click - value must be boolean - is not mandatory

3. An example for mabye a messaging site:

notify("New Message from "+user+"!", true, "Reply", function() {

  message(user);
  
  window.addEventListener("messageSent", notify("Message sent!", false));
  
}, true);

4. A live demo:
http://tiernan.tk/notificationjs

Note
--------
One final thing - if you have withdrawOnClick set to true, then your buttonCallback will not be executed. Therefore the callback can only really be used for things like if
an app has a new release and you want to inform the user, just set buttonCallback to function() {} and withdrawOnClick to true.

Update
--------
New function added - now if you want to withdrawOnClick with a buttonCallback, use notifWithdraw() at the end of the callback function.
This stops any notification from coming out and withdraws it (The same as withdrawOnClick).

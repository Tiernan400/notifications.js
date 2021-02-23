# notifications.js

Version 2.0
===========
* notifications-2.0.js
* https://raw.githubusercontent.com/Tiernan400/notifications.js/main/notifications-2.0.js

Documentation
-------------
notifications.js Version 2.0 is simular to v1.0 except instead of multiple parameters in a specific order, there is only one called `options`, which is in object format.
It includes one function, `notify()` which calls the notifcation.
All the parameters are listed below.

*Mandatory*
* `text` is the text to display *string*
* `isButton` specifies whether to include a button *boolean*
* `buttonText` is the text to put in the button [Only mandatory if isButton is set to true] *string*

*Optional*
* `buttonCallback` is the action to take when the button is clicked *function*
* `withdrawOnClick` specifies whether to withdraw the notification when the button is clicked *boolean*

Syntax
------
`notify(options);`

Examples
--------

    notify({
        text: "New item added to cart!",
        isButton: true,
        buttonText: "Check it out",
        buttonCallback: function(){
            displayModal("cart");
        },
        withdrawOnClick: true
    });
Or

    notify({
        text: "File saved",
        isButton: false,
    });

# notifications.js

Version 3.0
===========
* notifications-3.0.js
* https://raw.githubusercontent.com/Tiernan400/notifications.js/main/notifications-3.0.js

Documentation
-------------
notifications.js Version 3.0 has improved on v2.0 by adding a new function, `cover()`.

*Functions*
1. `notify()`
Description: Calls a notifcation.
It has one parameter, `options`. This is in object format.
All the options are listed below.

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

2. `cover()`
Description: Brings a cover slide into the document.
It has a parameter called `options` which is in object format.
Its options are listed below. None of the options are mandatory, there are default values for all.

*Optional*
* `text` is the text to display *string*
* `time` how much milliseconds to keep the cover for *integer*
* `bgcolor` is the background color of the cover *string*
* `color` is the color of the text *string*
* `text_bgcolor` is the background color of the text *string*
* `debug` specifies whether to write debug information into the console. Errors such as requesting a new cover while the previous one is in use will be written in regardless of this value *boolean*

Syntax
------
`cover(options);`

Examples
--------

    cover({
        text: "Question 1",
        time: 7000,
        bgcolor: "purple",
        text_bgcolor: "white",
        color: "black",
        debug: false
    });
Or

    cover({
        text: "Get ready!"
    });

v1.0 & v2.0
===========
Documentation for older versions is in other README files.

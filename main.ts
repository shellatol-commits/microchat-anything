input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.showString("Press button A to choose letter. Press button B to type letter. Press logo to show your last received message. Press buttons A+B to send message. Long press logo to show this helper.")
    control.reset()
})
input.onButtonPressed(Button.A, function () {
    if (i == text_list.length) {
        i += 1
    } else {
        i = 0
    }
    selected = text_list[i]
    basic.showString("" + (selected))
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString(message)
    control.reset()
})
radio.onReceivedString(function (receivedString) {
    rm = receivedString
    basic.showString(rm)
})
input.onButtonPressed(Button.B, function () {
    message = "" + message + selected
})
function setup () {
    text_list = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "(",
    ")",
    "[",
    "]",
    "{",
    "}",
    "!",
    "\"",
    "£",
    "$",
    "%",
    "^",
    "&",
    "*",
    "/",
    "|",
    "\\",
    "`",
    "'",
    "@",
    ":",
    ".",
    ",",
    "?"
    ]
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString(rm)
})
let selected = ""
let text_list: string[] = []
let i = 0
let message = ""
let rm = ""
rm = ""
message = ""
i = -1
setup()

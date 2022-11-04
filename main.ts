let 方角 = 0
input.onButtonPressed(Button.A, function () {
    方角 = input.compassHeading()
    if (方角 < 45) {
        basic.showArrow(ArrowNames.North)
    } else if (方角 < 135) {
        basic.showArrow(ArrowNames.West)
    } else if (方角 < 225) {
        basic.showArrow(ArrowNames.South)
    } else if (方角 < 315) {
        basic.showArrow(ArrowNames.East)
    } else {
        basic.showArrow(ArrowNames.North)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})

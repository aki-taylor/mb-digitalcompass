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
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    方角 = input.compassHeading()
    if (方角 < 22) {
        basic.showArrow(ArrowNames.North)
    } else if (方角 < 67) {
        basic.showArrow(ArrowNames.NorthWest)
    } else if (方角 < 112) {
        basic.showArrow(ArrowNames.West)
    } else if (方角 < 157) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (方角 < 202) {
        basic.showArrow(ArrowNames.South)
    } else if (方角 < 247) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (方角 < 292) {
        basic.showArrow(ArrowNames.East)
    } else if (方角 < 337) {
        basic.showArrow(ArrowNames.NorthEast)
    } else {
        basic.showArrow(ArrowNames.North)
    }
    basic.pause(500)
    basic.clearScreen()
})

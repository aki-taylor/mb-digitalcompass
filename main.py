方角 = 0

def on_button_pressed_a():
    global 方角
    方角 = input.compass_heading()
    if 方角 < 45:
        basic.show_arrow(ArrowNames.NORTH)
    elif 方角 < 135:
        basic.show_arrow(ArrowNames.WEST)
    elif 方角 < 225:
        basic.show_arrow(ArrowNames.SOUTH)
    elif 方角 < 315:
        basic.show_arrow(ArrowNames.EAST)
    else:
        basic.show_arrow(ArrowNames.NORTH)
input.on_button_pressed(Button.A, on_button_pressed_a)

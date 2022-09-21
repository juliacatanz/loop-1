input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let index = 0; index <= 4; index++) {
        for (let number = 0; number <= 4; number++) {
            led.plot(index, number)
            basic.pause(100)
        }
    }
})
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})

let x = 0
let y = 0
let s = false
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 5; index++) {
        x = 0
        for (let x = 0; x <= 4; x++) {
            led.plot(x, y)
            basic.pause(500)
            led.unplot(x, y)
        }
        y += 1
    }
    y = 0
})
input.onGesture(Gesture.Shake, function () {
    s = true
    while (s == true) {
        music.playTone(370, music.beat(BeatFraction.Whole))
        basic.pause(500)
    }
})
input.onButtonPressed(Button.B, function () {
    s = false
})

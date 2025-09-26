let distancia = 0
basic.forever(function () {
    // Medir distancia con el sensor ultrasónico
    distancia = sonar.ping(
    DigitalPin.P5,
    DigitalPin.P8,
    PingUnit.Centimeters
    )
    if (distancia > 0 && distancia < 15) {
        pins.servoWritePin(AnalogPin.P16, 0)
        basic.pause(3000)
    } else {
        pins.servoWritePin(AnalogPin.P16, 100)
    }
})

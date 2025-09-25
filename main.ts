let distancia = 0
basic.forever(function () {
    // Medir distancia con el sensor ultrasónico
    distancia = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    if (distancia < 15 && distancia > 0) {
        // Algo se acercó a menos de 15cm - abrir puerta
        // Servo a 90° (sube puerta)
        pins.servoWritePin(AnalogPin.P0, 90)
    } else {
        // Nada cerca - cerrar puerta
        // Servo a 0° (bajar puerta)
        pins.servoWritePin(AnalogPin.P0, 0)
    }
    basic.pause(200)
})

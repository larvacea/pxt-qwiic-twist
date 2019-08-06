namespace twist {
    enum registers {
        id = 0,
        status = 1,
        version = 2,
        enableInts = 4,
        count = 5,
        difference = 7,
        lastEncoderEvent = 9,
        lastButtonEvent = 8,
        red = 13,
        green = 14,
        blue = 15,
        connectRed = 16,
        connectGreen = 18,
        connectBlue = 20,
        turnIntTimeout = 22,
        changeAddress = 24
    }

    //% address.defl=63 r.defl=255 g.defl=255 b.defl=255 address.min=0 address.max=255 r.min=0 r.max=255 g.min=0 g.max=255 b.min=0 b.max=255
    export function setColor(address: number, r: number, g: number, b: number) {
        pins.i2cWriteNumber(address, registers.red, NumberFormat.UInt8LE, true);
        pins.i2cWriteNumber(address, r, NumberFormat.UInt8LE, true);
        pins.i2cWriteNumber(address, g, NumberFormat.UInt8LE, true);
        pins.i2cWriteNumber(address, b, NumberFormat.UInt8LE, false);
    }
}
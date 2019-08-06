/**
 * Use the Sparkfun Qwiic Twist RGB encoder
 */
//% color=#007A4B weight=30 icon="\uf0d1"
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
        changeAddress = 24,
        limit = 25
    }

    /** Set the RGB color (light up the knob) */
    //% address.defl=63 r.defl=255 g.defl=255 b.defl=255 address.min=0 address.max=255 r.min=0 r.max=255 g.min=0 g.max=255 b.min=0 b.max=255
    //% blockId=twist_set_color
    //% block="Set color|address%address|red%r|green%g|blue%b"
    export function setColor(address: number, r: number, g: number, b: number): void {
        pins.i2cWriteNumber(address, registers.red, NumberFormat.UInt8LE, true);
        pins.i2cWriteNumber(address, r, NumberFormat.UInt8LE, true);
        pins.i2cWriteNumber(address, g, NumberFormat.UInt8LE, true);
        pins.i2cWriteNumber(address, b, NumberFormat.UInt8LE, false);
    }

    /** Set red (light up the knob) */
    //% address.defl=63 r.defl=255 address.min=0 address.max=255 r.min=0 r.max=255
    //% blockId=twist_set_red
    //% block="Set red|address%address|red%r"
    export function setRed(address: number, r: number) {
        pins.i2cWriteNumber(address, registers.red, NumberFormat.UInt8LE, true);
        pins.i2cWriteNumber(address, r, NumberFormat.UInt8LE, false);
    }

    /** Set green (light up the knob) */
    //% address.defl=63 g.defl=255 address.min=0 address.max=255 g.min=0 g.max=255
    //% blockId=twist_set_green
    //% block="Set green|address%address|green%g"
    export function setGreen(address: number, g: number) {
        pins.i2cWriteNumber(address, registers.green, NumberFormat.UInt8LE, true);
        pins.i2cWriteNumber(address, g, NumberFormat.UInt8LE, false);
    }

    /** Set blue (light up the knob) */
    //% address.defl=63 b.defl=255 address.min=0 address.max=255 b.min=0 b.max=255
    //% blockId=twist_set_blue
    //% block="Set blue|address%address|blue%b"
    export function setBlue(address: number, b: number) {
        pins.i2cWriteNumber(address, registers.blue, NumberFormat.UInt8LE, true);
        pins.i2cWriteNumber(address, b, NumberFormat.UInt8LE, false);
    }

    /** Get current red value */
    //% address.defl=63 address.min=0 address.max=255
    //% blockId=twist_get_red
    //% block="Get red|address%address"
    export function getRed(address: number): number {
        pins.i2cWriteNumber(address, registers.red, NumberFormat.UInt8LE, false);
        return pins.i2cReadNumber(address, NumberFormat.UInt8LE, false);
    }

    /** Get current green value */
    //% address.defl=63 address.min=0 address.max=255
    //% blockId=twist_get_green
    //% block="Get green|address%address"
    export function getGreen(address: number): number {
        pins.i2cWriteNumber(address, registers.green, NumberFormat.UInt8LE, false);
        return pins.i2cReadNumber(address, NumberFormat.UInt8LE, false);
    }

    /** Get current blue value */
    //% address.defl=63 address.min=0 address.max=255
    //% blockId=twist_get_blue
    //% block="Get blue|address%address"
    export function getBlue(address: number): number {
        pins.i2cWriteNumber(address, registers.blue, NumberFormat.UInt8LE, false);
        return pins.i2cReadNumber(address, NumberFormat.UInt8LE, false);
    }

    /** Get the current encoder count */
    //% address.defl=63 address.min=0 address.max=255
    //% blockId=twist_get_count
    //% block="Get count|address%address"
    export function getCount(address: number): number {
        pins.i2cWriteNumber(address, registers.count, NumberFormat.UInt8LE, false);
        return pins.i2cReadNumber(address, NumberFormat.Int16LE);
    }

    /** Get the current encoder count limit (0 = no limit) */
    //% address.defl=63 address.min=0 address.max=255
    //% blockId=twist_get_limit
    //% block="Get limit|address%address"
    export function getLimit(address: number): number {
        pins.i2cWriteNumber(address, registers.limit, NumberFormat.Int8LE);
        return pins.i2cReadNumber(address, NumberFormat.UInt16LE);
    }

    /** Set the current encoder count limit (0 = no limit) */
    //% address.defl=63 address.min=0 address.max=255 limit.defl=0 limit.min=0 limit.max=65535
    //% blockId=twist_set_limit
    //% block="Set limit|address%address|limit%limit"
    export function setLimit(address: number, limit: number): void {
        pins.i2cWriteNumber(address, registers.limit, NumberFormat.Int8LE, true);
        pins.i2cWriteNumber(address, limit, NumberFormat.UInt16LE);
    }
}
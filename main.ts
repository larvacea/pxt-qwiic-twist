/**
 * Communicate with the Sparkfun Qwiic Twist RGB encoder
 */
//% color=#007A4B weight=30 icon="\uf0d1"
namespace twist {
    enum TwistRegisters {
        Id = 0,
        Status = 1,
        Version = 2,
        EnableInts = 4,
        Count = 5,
        Difference = 7,
        LastEncoderEvent = 9,
        LastButtonEvent = 8,
        Red = 13,
        Green = 14,
        Blue = 15,
        ConnectRed = 16,
        ConnectGreen = 18,
        ConnectBlue = 20,
        TurnIntTimeout = 22,
        ChangeAddress = 24,
        Limit = 25
    }

    /** Set the RGB color (light up the knob) */
    //% address.defl=63 r.defl=255 g.defl=255 b.defl=255 address.min=0 address.max=255 r.min=0 r.max=255 g.min=0 g.max=255 b.min=0 b.max=255
    //% blockId=twist_set_color
    //% block="Set color|address%address|red%r|green%g|blue%b"
    export function setColor(address: number, r: number, g: number, b: number): void {
        pins.i2cWriteNumber(address, TwistRegisters.Red, NumberFormat.UInt8LE, true);
        pins.i2cWriteNumber(address, r, NumberFormat.UInt8LE, true);
        pins.i2cWriteNumber(address, g, NumberFormat.UInt8LE, true);
        pins.i2cWriteNumber(address, b, NumberFormat.UInt8LE, false);
    }

    /** Set red (light up the knob) */
    //% address.defl=63 r.defl=255 address.min=0 address.max=255 r.min=0 r.max=255
    //% blockId=twist_set_red
    //% block="Set red|address%address|red%r"
    export function setRed(address: number, r: number) {
        pins.i2cWriteNumber(address, TwistRegisters.Red, NumberFormat.UInt8LE, true);
        pins.i2cWriteNumber(address, r, NumberFormat.UInt8LE, false);
    }

    /** Set green (light up the knob) */
    //% address.defl=63 g.defl=255 address.min=0 address.max=255 g.min=0 g.max=255
    //% blockId=twist_set_green
    //% block="Set green|address%address|green%g"
    export function setGreen(address: number, g: number) {
        pins.i2cWriteNumber(address, TwistRegisters.Green, NumberFormat.UInt8LE, true);
        pins.i2cWriteNumber(address, g, NumberFormat.UInt8LE, false);
    }

    /** Set blue (light up the knob) */
    //% address.defl=63 b.defl=255 address.min=0 address.max=255 b.min=0 b.max=255
    //% blockId=twist_set_blue
    //% block="Set blue|address%address|blue%b"
    export function setBlue(address: number, b: number) {
        pins.i2cWriteNumber(address, TwistRegisters.Blue, NumberFormat.UInt8LE, true);
        pins.i2cWriteNumber(address, b, NumberFormat.UInt8LE, false);
    }

    /** Get current red value */
    //% address.defl=63 address.min=0 address.max=255
    //% blockId=twist_get_red
    //% block="Get red|address%address"
    export function getRed(address: number): number {
        pins.i2cWriteNumber(address, TwistRegisters.Red, NumberFormat.UInt8LE, false);
        return pins.i2cReadNumber(address, NumberFormat.UInt8LE, false);
    }

    /** Get current green value */
    //% address.defl=63 address.min=0 address.max=255
    //% blockId=twist_get_green
    //% block="Get green|address%address"
    export function getGreen(address: number): number {
        pins.i2cWriteNumber(address, TwistRegisters.Green, NumberFormat.UInt8LE, false);
        return pins.i2cReadNumber(address, NumberFormat.UInt8LE, false);
    }

    /** Get current blue value */
    //% address.defl=63 address.min=0 address.max=255
    //% blockId=twist_get_blue
    //% block="Get blue|address%address"
    export function getBlue(address: number): number {
        pins.i2cWriteNumber(address, TwistRegisters.Blue, NumberFormat.UInt8LE, false);
        return pins.i2cReadNumber(address, NumberFormat.UInt8LE, false);
    }

    /** Get the current encoder count */
    //% address.defl=63 address.min=0 address.max=255
    //% blockId=twist_get_count
    //% block="Get count|address%address"
    export function getCount(address: number): number {
        pins.i2cWriteNumber(address, TwistRegisters.Count, NumberFormat.UInt8LE, false);
        return pins.i2cReadNumber(address, NumberFormat.Int16LE);
    }

    /** Get the current encoder count limit (0 = no limit) */
    //% address.defl=63 address.min=0 address.max=255
    //% blockId=twist_get_limit
    //% block="Get limit|address%address"
    export function getLimit(address: number): number {
        pins.i2cWriteNumber(address, TwistRegisters.Limit, NumberFormat.Int8LE);
        return pins.i2cReadNumber(address, NumberFormat.UInt16LE);
    }

    /** Set the current encoder count limit (0 = no limit) */
    //% address.defl=63 address.min=0 address.max=255 limit.defl=0 limit.min=0 limit.max=65535
    //% blockId=twist_set_limit
    //% block="Set limit|address%address|limit%limit"
    export function setLimit(address: number, limit: number): void {
        pins.i2cWriteNumber(address, TwistRegisters.Limit, NumberFormat.Int8LE, true);
        pins.i2cWriteNumber(address, limit, NumberFormat.UInt16LE);
    }
}
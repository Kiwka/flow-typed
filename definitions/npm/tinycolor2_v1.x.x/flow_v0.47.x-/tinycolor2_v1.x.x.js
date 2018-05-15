declare module 'tinycolor2' {
  declare class TinyColor {
    getFormat(): Format;
    getOriginalInput(): string;
    isValid(): boolean;
    getBrightness(): HexNumber;
    isLight(): boolean;
    isDark(): boolean;
    getLuminance(): AlphaNumber;
    getAlpha(): AlphaNumber;
    setAlpha(AlphaNumber): this;
    toHsl(): Hsla;
    toHslString(): string;
    toHsv(): HsvaNumber;
    toHex(): string;
    toHexString(): string;
    toHex8(): string;
    toHex8String(): string;
    toRgb(): Rgba;
    toRgbString(): string;
    toPercentageRgb(): PercentageRgb;
    toPercentageRgbString(): string;
    toName(): string;
    toFilter(): string;
    toString(?Format): string;
    clone(): TinyColor;

    lighten(?number): this;
    brighten(?number): this;
    darken(?number): this;
    desaturate(?number): this;
    saturate(?number): this;
    greyscale(number): this;
    spin(?number): this;

    analagous(results: number, slices: number): Array<TinyColor>;
    monochromatic(results: number): Array<TinyColor>;
    splitcomplement(): Array<TinyColor>;
    triad(): Array<TinyColor>;
    tetrad(): Array<TinyColor>;
    complement(): Array<TinyColor>;
  }

  declare type HexNumber = number; // 0-255
  declare type AlphaNumber = number; // 0 - 1
  declare type ColorString = string; // #123 | #123456 | #12345678 | rgb(n, n, n) | ...

  declare type Format =
    | 'name'
    | 'rgb'
    | 'prgb'
    | 'hex'
    | 'hex3'
    | 'hex6'
    | 'hex4'
    | 'hex8'
    | 'hsl'
    | 'hsv';

  declare type Rgb = {|r: number, g: number, b: number|};
  declare type Rgba = {|...Rgb, a: number|};
  declare type Hsl = {|
    h: number | string,
    s: number | string,
    l: number | string
  |};
  declare type Hsla = {|...Hsl, a: number|};
  declare type Hsv = {|
    h: number | string,
    s: number | string,
    v: number | string
  |};
  declare type HsvNumber = {|h: number, s: number, v: number|};
  declare type Hsva = {|...Hsv, a: number|};
  declare type HsvaNumber = {|...HsvNumber, a: number|};
  declare type PercentageRgb = {|r: string, g: string, b: string, a: number|};
  declare type Color = ColorString | Rgb | Rgba | Hsl | Hsla | Hsv | Hsva;

  declare module.exports: {
    (value: Color): TinyColor, // If you try to call like a function, it will use this signature
    static: (value: Color) => TinyColor, // `static` property on the function
    equals: (TinyColor, TinyColor) => boolean,
    mix: (Color, Color, amount: number) => TinyColor,
    random: () => TinyColor,
    readability: (Color, Color) => number,
    isReadable: (Color, Color, Object) => boolean,
    fromRatio: Color => TinyColor
  };
}

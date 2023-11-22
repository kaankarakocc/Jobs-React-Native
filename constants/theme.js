const COLORS = {
    primary: "#312651",
    secondary: "#444262",
    tertiary: "#FF7754",

    gray: "#83829A",
    gray2: "#C1C0C8",

    white: "#F3F4F8",
    lightWhite: "#FAFAFC",
};

const FONT = {
    regular: "Roboto-Regular", // Standart metin için
    medium: "Roboto-Medium", // Vurgulanmış metin için
    bold: "Roboto-Bold", // Başlıklar ve önemli bilgiler için
    italic: "Roboto-Italic",
};

const SIZES = {
    xSmall: 10, // Çok küçük metin ve altbilgiler için
    small: 12, // Küçük metin ve açıklamalar için
    medium: 14, // Normal metin için
    large: 18, // Büyük metin ve başlıklar için
    xLarge: 24, // Çok büyük metin ve önemli başlıklar için
    xxLarge: 30, // En büyük başlıklar ve ekran üzerindeki önemli numaralar için
};

const SHADOWS = {
    small: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.10,
        shadowRadius: 1.84,
        elevation: 1,
    },
    medium: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5.84,
        elevation: 5,
    },
};

export { SHADOWS, SIZES, COLORS, FONT };
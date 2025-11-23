const texts = {
    title: 'Hello, I am Erfanul Islam Sifat. Welcome to my',
    subTitle: 'Portfolio',
    deviceSizeWarning: 'Currently this portfolio is designed for desktop/tablet only.'
}

const FONT_WEIGHTS = {
    title: {min: 100, max: 400, default: 100},
    subTitle: {min: 400, max: 900, default: 400},
} as const;

export {texts, FONT_WEIGHTS};
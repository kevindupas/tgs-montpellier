/* eslint-disable global-require */
module.exports = {
    mode:    'jit',
    content: [
        './src/**/*.html',
        './src/**/*.{js,jsx,ts,tsx}',
    ],

    theme: {
        height: (theme) => ({
            auto:   'auto',
            ...theme('spacing'),
            full:   '100%',
            screen: 'calc(var(--vh) * 100)',
        }),
        minHeight: (theme) => ({
            0:      '0',
            ...theme('spacing'),
            full:   '100%',
            screen: 'calc(var(--vh) * 100)',
        }),
        extend: {
            fontFamily: {
                tungsten:           ['Tungsten-Book', 'sans-serif'],
                tungstenb_semibold: ['Tungsten-Semibold', 'sans-serif'],
                microgramma:        ['MicrogrammaD', 'sans-serif'],
                heading_bold:       ['HeadingNow-Bold', 'sans-serif'],
            },
            backgroundImage: {
                'bg-pattern':     'url(\'./dist/images/pattern-dark.jpeg\')',
                'footer-texture': 'url(\'/img/footer-texture.png\')',
            },
            padding: {
                '1/2': '50%',
                full:  '100%',
            },

        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
};

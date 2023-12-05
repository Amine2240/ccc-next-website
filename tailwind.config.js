/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            color: {
                'primary': {
                    DEFAULT: '#35E6BB',
                    50: '#EDFDF9',
                    100: '#D8FAF2',
                    200: '#B0F5E4',
                    300: '#87F0D6',
                    400: '#5EEBC9',
                    500: '#35E6BB',
                    600: '#1ACEA3',
                    700: '#14A17F',
                    800: '#0E745B',
                    900: '#094637',
                    950: '#063025'
                },
                'secondary': {
                    DEFAULT: '#FFC700',
                    50: '#FFF9E5',
                    100: '#FFF4CC',
                    200: '#FFE999',
                    300: '#FFDD66',
                    400: '#FFD233',
                    500: '#FFC700',
                    600: '#D6A700',
                    700: '#AD8700',
                    800: '#856700',
                    900: '#5C4800',
                    950: '#473800'
                },
                'tertiary': {
                    DEFAULT: '#1E85FF',
                    50: '#EDF5FF',
                    100: '#D6E9FF',
                    200: '#A8D0FF',
                    300: '#7AB7FF',
                    400: '#4C9EFF',
                    500: '#1E85FF',
                    600: '#006BEA',
                    700: '#0054B7',
                    800: '#003C84',
                    900: '#002551',
                    950: '#001938'
                },
            },
            fontFamily: {
                'poppins': ['Poppins'],
            },
        },
    },
    plugins: [],
}

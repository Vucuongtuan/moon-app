/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all files that contain Nativewind classes.
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                primary: '#f8f5ee',
                dark: '#141414',
                'dark-secondary': '#1f1f1f',
                accent: '#3569ed',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
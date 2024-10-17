/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            container: {
                center: true,
            },
            height: {
                "1/2-screen": "50vh", // Custom height for half of the viewport height
            },
            
              
        },
        container: {
            padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                lg: "3rem",
                xl: "4rem",
                //   '2xl': '6rem',
            },
        },
    },
    plugins: [],
};

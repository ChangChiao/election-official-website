/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#4527A0',
				secondary: {
					green: '#26A69A',
					yellow: '#FFB300',
					red: '#EC407A',
					gray: '#E3E3E3'
				}
			},
			lineHeight: {
				1.5: '1.5'
			},
			fontSize: {
				h1: '44px',
				h2: '36px',
				h3: '28px',
				h4: '24px',
				h5: '20px',
				h6: '16px',
				lg: '18px',
				md: '16px',
				sm: '14px'
			},
			backgroundImage: {
				person: "url('/Main Img-people.png')"
			}
		}
	},
	plugins: []
};

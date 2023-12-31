/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				sm: '480px',
				xx: '500px'
			},
			fontFamily: {
				oswald: ['Oswald', 'sans-serif'],
				NotoSansTC: ['Noto Sans TC', 'sans-serif']
			},
			colors: {
				primary: '#4527A0',
				secondary: {
					green: '#26A69A',
					yellow: '#FFB300',
					red: '#EC407A',
					gray: '#E3E3E3',
					darkGray: '#B9B9B9'
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
			keyframes: {
				move: {
					'0%': { right: '-100%', opacity: 0 },
					'100%': { right: '0', opacity: 1 }
				},
				back: {
					'0%': { right: '0', opacity: 1 },
					'100%': { right: '100%', opacity: 0 }
				}
			},
			animation: {
				swiper: 'move 0.3s ease-out forwards',
				swiperBack: 'back 0.3s ease-out forwards'
			},
			backgroundImage: {
				person: "url('/Main Img-people.png')",
				catHand: "url('/bg-pay.png')",
				cat: "url('/footer-cat.png')"
			}
		}
	},
	plugins: []
};

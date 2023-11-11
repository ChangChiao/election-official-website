/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
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
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				back: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(100%)' }
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

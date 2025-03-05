/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";
import { colors, heroui } from '@heroui/theme';

export default  {
  content: [
    'src/**/*.{ts,tsx}',
	'./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
		extend: {
			colors: {
				'pink-bg': 'rgba(255, 80, 114, 0.08)',
				'blue-bg': 'rgba(102, 44, 196, 0.08)',
				'green-bg': 'rgba(9, 185, 109, 0.08)',
				'orange-bg': 'rgba(254, 74, 35, 0.08)',
				gradient: {
					from: '#FFE9DD',
					from_dark: '#FF7014',
					to: '#F5E1FE',
					to_dark: '#A100FF',
					start: '#FFE1C2BF',
					end: '#C7E5FFBF',
					chat_from: '#FB5812',
					chat_to: '#BE1F9D',
				},
				icons: {
					clock: '#FF5072',
					clocklight: '#FF507214',
					candidates: '#3629B7',
					candidateslight: '#3629B714',
				},
			},
			borderRadius: {
				custom: '80px 12px 12px 12px',
			},
			animation: {
				popIn: 'appearance-in 300ms ease-out normal both',
				popOut: 'appearance-out 60ms ease-in normal both',
				shine: 'shine 3.5s infinite',
				rotate: 'rotateFullRepeat 2.3s linear infinite',
			},
			keyframes: {
				popIn: {
					'0%, 60%': {
						opacity: '0.75',
						backfaceVisibility: 'hidden',
						transform: 'translateZ(0) scale(0.95)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateZ(0) scale(1)',
					},
				},
				popOut: {
					'0%': {
						opacity: '1',
						transform: 'scale(1)',
					},
					'100%': {
						opacity: '0',
						transform: 'scale(0.85)',
					},
				},
				bounce: {
					'0%, 100%': {
						transform: 'translateY(-30%)',
						animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
					},
					'50%': {
						transform: 'translateY(0)',
						animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
					},
				},
				shine: {
					'0%': { transform: 'translate(-150%, -150%)' },
					'100%': { transform: 'translate(150%, 150%)' },
				},
				rotateFullRepeat: {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
			},
			fontFamily: {
				source: ['var(--font-source-sans-3)', 'sans-serif'],
				inter: ['Inter', 'sans-serif'],
			},
			fontWeight: {
				regular: '400',
				medium: '500',
				semibold: '600',
				bold: '700',
			},
			fontSize: {
				h1: ['2rem', { lineHeight: '2.6rem', letterSpacing: '0%' }],
				h3: ['1.5rem', { lineHeight: '1.5rem', letterSpacing: '0%' }],
				h4: ['1.25rem', { lineHeight: '1.25rem', letterSpacing: '0%' }],
				h5: ['1.125rem', { lineHeight: '1.125rem', letterSpacing: '0%' }],
				h6: ['1rem', { lineHeight: '1rem', letterSpacing: '0%' }],
				h7: ['0.875rem', { lineHeight: '0.875rem', letterSpacing: '0%' }],
				body1: ['1.125rem', { lineHeight: '1.125rem', letterSpacing: '0%' }],
				body2: ['1rem', { lineHeight: '1rem', letterSpacing: '0%' }],
				body3: ['0.875rem', { lineHeight: '0.875rem', letterSpacing: '0%' }],
				body4: ['0.75rem', { lineHeight: '0.75rem', letterSpacing: '0%' }],
				'button-l': [
					'1rem',
					{ lineHeight: '1rem', letterSpacing: '0%', fontWeight: '600' },
				],
				'button-m': [
					'0.875rem',
					{ lineHeight: '1rem', letterSpacing: '0%', fontWeight: '600' },
				],
				'button-s': [
					'0.875rem',
					{ lineHeight: '1rem', letterSpacing: '0%', fontWeight: '600' },
				],
				'input-l': [
					'1.125rem',
					{ lineHeight: '1.5rem', letterSpacing: '0%', fontWeight: '400' },
				],
				'input-m': [
					'1rem',
					{ lineHeight: '1.25rem', letterSpacing: '0%', fontWeight: '400' },
				],
				'input-s': [
					'0.875rem',
					{ lineHeight: '1rem', letterSpacing: '0%', fontWeight: '400' },
				],
				'input-helper': [
					'0.875rem',
					{ lineHeight: '1.125rem', letterSpacing: '1.3%', fontWeight: '400' },
				],
			},
			boxShadow: {
				'light-xs': '0px 2px 4px #5978FF', // Extra small shadow
				'light-sm': '0px 4px 6px #5978FF', // Small shadow
				'light-md': '0px 6px 12px #5978FF', // Medium shadow
				'light-lg': '0px 8px 16px #5978FF', // Large shadow
				'light-xl': '0px 10px 24px #5978FF', // Extra large shadow
				'gradient-shadow':
					'0 4px 6px 0 rgba(255, 255, 255, 0.00), 0 6px 10px 2px rgba(255, 255, 255, 0.44)',
				'light-xll': '0px 20px 24px -4px #15151514', // Extra large shadow
			}
		},
	},
	darkMode: 'class',
	plugins: [
		heroui({
			prefix: 'core', // prefix for themes variables
			defaultTheme: 'light', // default theme from the themes object
			defaultExtendTheme: 'light', // default theme to extend on custom themes
			themes: {
				light: {
					extend: 'light',
					layout: {
						boxShadow: {
							small: '0px 1px 2px 0px #15151514',
							large: '',
							medium: '',
						},
						disabledOpacity: '0.3', // opacity-[0.3]
						radius: {
							small: '2px', // rounded-small
							medium: '0.5rem', // rounded-medium
							large: '6px', // rounded-large
						},
						borderWidth: {
							small: '1px', // border-small
							medium: '1px', // border-medium
							large: '2px', // border-large
						},
					},
					colors: {
						primary: {
							...colors.blue,
							'50': '#F7F9FF',
							'100': '#EBEEFF',
							'500': '#5978FF',
							'900': '#0D1226',
							foreground: '#fff',
							DEFAULT: '#5978FF',
						},
						secondary: {
							'50': '#FFF4E5',
							'200': '#4E585E',
							'300': '#E6E8E9',
							'500': '#F8971F',
							'900': '#402708',
							'100': '#C0C0C0',
							foreground: '#fff',
							DEFAULT: '#F8971F',
							'400': '#AD4400',
							'600': '#FD6F14',
						},
						success: {
							DEFAULT: '#51BC51',
							foreground: '#E3FBE3',
							'50': '#D5F0D5',
							'100': '#51BC51',
							'200': '#1F7A1F',
							'300': '#C3E8C3',
							'400': '#2A702A',
							'500': '#31D06E',
							'600': '#498F49',
						},
						warning: {
							DEFAULT: '#EA9A3E',
							foreground: '#FFEFE5',
							'100': '#F0DFD5',
							'200': '#EA9A3E',
							'300': '#9A5B13',
							'400': '#FFF5E3',
							'500': '#E8D1C3',
							'600': '#FDF0E1',
							'700': '#F0DFD5',
							'800': '#FF7014',
							'900': '#AD4400',
							'1000': '#FD6F14',
						} as never,
						danger: {
							DEFAULT: '#A51818',
							foreground: '#FCE4E4',
							'50': '#F0D1D1',
							'100': '#EB6A6A',
							'200': '#A51818',
							'300': '#E8BABA',
							'400': '#DE6464',
							'1000': '#FD5367',
							'1100': '#7D1212',
							'500':'#fae1e1',
							'600':'#ebd8d8',
							'700':'#F99589',
							'800':'#FC4484'
						} as never,
						background: {
							DEFAULT: '#FFFFFF',
							foreground: '#000000',
							'50': '#E0F5E8',
							'100': '#FFF6F1',
							'200': '#9A00EF',
							'300': '#FE7E8D',
							'400': '#67CC98',
							'500': '#FCBE74',
							'600': '#808080',
							'700': '#42A4EB',
							'800': '#88E2C9',
							'900': '#DFDFDF',
						},
						content1: {
							DEFAULT: '#FFFFFF',
							foreground: '#EDF5FD',
							'50': '#D5E3F0',
							'100': '#97C3F0',
							'200': '#0B6BCB',
							'300': '#4E585E',
							'400': '#FEDE00',
							'500': '#D9D9D9',
							'600': '#09B96D14',
							'700': '#FF507214',
							'800': '#3629B714',
							'900': '#FF5072',
							'1000': '#662CC4',
							'1001': '#09B96D',
							'1002': '#FE4A23',
							'1003': '#3629B7',
							'1004': '#662CC414',
							'1005': '#003569',
							'1006': '#F9D2FC',
							'1007': '#D2DEFC',
							'1010': '#f97316',
							'1011': '#ffedd5',

						} as never,
						content2: {
							DEFAULT: '#555E68',
							foreground: '#EDF1F5',
							'50': '#E3E7EB',
							'100': '#DDE7EE',
							'200': '#CDD7E1',
							'300': '#9FA6AD',
							'400': '#636B74',
							'500': '#555E68',
							'600': '#32383E',
							'700': '#171A1C',
							'800': '#49525A',
							'900': '#EDF4FA',
							'1000': '#FB5812',
							'1001': '#BE1F9D',
							'1002': "#FDF0E1",
							'1003': '#0a6bcb',
						} as never,
						foreground: {
							'950': '#4E4E4E',
							'900': '#121214',
							'800': '#555555',
							'750': '#383E54',
							'700': '#8D8D8D',
							'650': '#C0C0C0',
							'600': '#D9D9D9',
							'500': '#EBEBEB',
							'400': '#F5F5F5',
							'300': '#F9FAFB',
							'200': '#E0E0E0',
							'150': '#F7F7F7',
							'100': '#FAF7F7',
							'50': '#FFFFFF',
							DEFAULT: '#121214',
							foreground: '#121214',
							textColor: '#333333',
						} as never,
					},
				},
				dark: {
					layout: {},
					colors: {},
				},
			},
		}),
		require('@tailwindcss/typography'),
		require('tailwindcss-animate'),
	],
} satisfies Config;


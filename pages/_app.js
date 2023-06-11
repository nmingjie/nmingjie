import '@fontsource/m-plus-rounded-1c';

import {
	ChakraProvider,
	ColorModeProvider,
	useColorMode,
} from '@chakra-ui/react';
import customTheme from '../styles/theme';
import { Global, css } from '@emotion/react';

import Layout from '../components/layouts/main'
import Chakra from '../components/chakra'


import { AnimatePresence } from 'framer-motion'


const GlobalStyle = ({ children }) => {
	const { colorMode } = useColorMode();

	return (
		<>
			<Global
				styles={css`
					::selection {
						background-color: #f5b79f;
						color: #fefefe;
					}
					::-moz-selection {
						background: #f5b790;
						color: #fefefe;
					}
					html {
						min-width: 356px;
						scroll-behavior: smooth;
					}
					#__next {
						display: flex;
						flex-direction: column;
						min-height: 100vh;
						background: ${colorMode === 'light'
						? '#EFE7DA'
						: '#201F24'};
					}
					.grid-item-thumbnail {
						border-radius: 12px;
					}
					.stack-badge {
						margin: 0 3px;
					}
					.typed-cursor,
					.highlight-word-banner {
						background-color: rgba(0, 0, 0, 0);
						color: ${colorMode === 'light' ? '#319795' : '#4FD1C5'};
					}
					.fixed-navbar {
						position: fixed;
						z-index: 100;
						bottom: 0;
						background-color: rgba(0, 0, 0, 0);
						pointer-events: none;
					}
				`}
			/>
			{children}
		</>
	);
};

function MyApp({ Component, pageProps, router }) {
	return (
		<ChakraProvider resetCSS theme={customTheme}>
			<ColorModeProvider
				options={{
					initialColorMode: 'light',
					useSystemColorMode: true,
				}}
			>
				<GlobalStyle>
				<Layout router={router}>
				<AnimatePresence
					exitBeforeEnter
					initial={true}
					onExitComplete={() => {
						if (typeof window !== 'undefined') {
							window.scrollTo({ top: 0 })
						}
					}}
				>
					<Component {...pageProps} key={router.route} />
				</AnimatePresence>
			</Layout>
				</GlobalStyle>
			</ColorModeProvider>
			{/* <Layout router={router}>
				<AnimatePresence
					exitBeforeEnter
					initial={true}
					onExitComplete={() => {
						if (typeof window !== 'undefined') {
							window.scrollTo({ top: 0 })
						}
					}}
				>
					<Component {...pageProps} key={router.route} />
				</AnimatePresence>
			</Layout> */}
		</ChakraProvider>
		
		
	);
}

export default MyApp;

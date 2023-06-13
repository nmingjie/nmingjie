import React from 'react';
import { useColorMode, Button, Flex, Box } from '@chakra-ui/react';
// import NextLink from 'next/link';
// import DarkModeSwitch from '../components/DarkModeSwitch';
// import Section from './Section.js';

const Container = ({ children }) => {
	const { colorMode } = useColorMode();

	const bgColor = {
		light: '#EFE7DA',
		dark: '#201F24',
	};

	const color = {
		light: '#171717',
		dark: '#e5e5e5',
	};

	const navHoverBg = {
		light: 'teal.600',
		dark: 'teal.200',
	};

	return (
		<Box bg={bgColor[colorMode]} color={color[colorMode]}>
			<Flex as="main">{children}</Flex>

		</Box>
	);
};

export default Container;

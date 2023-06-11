// import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import {
	useColorMode,
	Heading,
	Box,
	Stack,
	Highlight,
	Button,
} from '@chakra-ui/react';

// components
import Container from '../components/container.js';
// import { BioSection, BioYear } from '../components/Bio.js';
import Paragraph from '../components/paragraph.js';
import VoxelRaccoonLoader from '../components/voxel-raccoon-loader.js';
import Creations from '../components/creations.js';
import OldCreations from '../components/old-creations.js';
import SocialMedia from '../components/social-media.js';
import Section from '../components/section.js';


import {
	// ChevronRightIcon,
	// DownloadIcon,
	ChatIcon
} from '@chakra-ui/icons';

import Typed from 'react-typed';

const LazyVoxelRaccoon = dynamic(
	() => import('../components/voxel-raccoon.js'),
	{
		ssr: false,
		loading: () => <VoxelRaccoonLoader />,
	}

);

export default function Home() {
	const router = useRouter();
	const { colorMode } = useColorMode();

	const headingColor = {
		light: 'teal.500',
		dark: 'teal.300',
	};

	const listIconsColor = {
		light: 'red.400',
		dark: 'teal.300',
	};

	const highlightColor = {
		light: '#171717',
		dark: '#e5e5e5',
	};

	const componentsBoxShadow = {
		light: '0 5px 5px rgba(0, 0, 0, 0.1)',
		dark: '0 5px 5px rgba(0, 0, 0, 0.1)',
	};

	const tabButtonColor = {
		light: '#171717',
		dark: '#e5e5e5',
	};

	const tabButtonBgColor = {
		light: '',
		dark: '',
	};

	const contentButtonColor = {
		light: '#e5e5e5',
		dark: '#e5e5e5',
	};

	const contentButtonBgColor = {
		light: 'teal.500',
		dark: '',
	};

	const contentButtonHoverBg = {
		light: 'teal.500',
		dark: 'teal.300',
	};

	const contentButtonHoverColor = {
		light: '#e5e5e5',
		dark: '#e5e5e5',
	};

	const contentButtonBorderColor = {
		light: 'teal.500',
		dark: 'teal.300',
	};

	const contentButtonHoverBorderColor = {
		light: '',
		dark: '',
	};

	return (
		<Container width="100%">
			<Stack
				spacing={20}
				m="0 auto 1rem auto"
				// maxWidth="700px"
				px={[8, null, null, null, null, null]}
			>
				{/* <Box
					as="main"
					id="home"
					display="flex"
					flexDirection="column"
					justifyContent="center"
				// height="100vh"
				>
				</Box> */}
				{/* <Section delay="0.3"> */}
				<Box display="flex" zIndex={0}>
					<LazyVoxelRaccoon />
				</Box>
				{/* </Section> */}
				<Box
					as="main"
					id="home"
					display="flex"
					flexDirection="column"
					justifyContent="center"
				// height="100vh"
				>

					<Section>
						<Heading
							as="h1"
							fontSize={['4xl', null, '4.5xl', null, null, null]}
							mb={2}
							zIndex={1}
						>
							<Typed
								strings={[
									"Hello there! <mark class='highlight-word-banner'>Ming Jie</mark> here.",
								]}
								startDelay={1500}
								typeSpeed={45}
							/>
						</Heading>
					</Section>
					<Section delay="0.4">
						<Box zIndex={1}>
							<Paragraph>
								<Highlight
									query={['aaaa']}
									styles={{
										fontWeight: '600',
										color: highlightColor[colorMode],
									}}
								>
									I&apos;m an Software Engineer based in Singapore!
								</Highlight>
							</Paragraph>
						</Box>
						<Section delay="0.6">
							<Box
								display="flex"
								alignItems="flex-end"
								justifyContent="space-between"
								flexWrap="wrap"
							>
								<Box display="flex">
									<Box
										as={motion.div}
										whileHover={{ scale: 1.05 }}
										mt={8}
									>
										<Button
											aria-label="Contact me"
											fontSize={[
												'md',
												null,
												'lg',
												null,
												null,
												null,
											]}
											fontWeight={500}
											rightIcon={<ChatIcon />}
											borderRadius={'5px'}
											variant="outline"
											pt={6}
											pb={6}
											borderColor={
												contentButtonBorderColor[
												colorMode
												]
											}
											color={
												contentButtonColor[colorMode]
											}
											bg={contentButtonBgColor[colorMode]}
											_hover={{
												color: contentButtonHoverColor[
													colorMode
												],
												bg: contentButtonHoverBg[
													colorMode
												],
												borderColor:
													contentButtonHoverBorderColor[
													colorMode
													],
											}}
											onClick={() =>
												router.push(
													'mailto:neomingjie@gmail.com'
												)
											}
										>
											Contact me
										</Button>
									</Box>
								</Box>
								<Box>
									<SocialMedia />
								</Box>
							</Box>
						</Section>
					</Section>
				</Box>
				<Box id="creations">
					<Heading
						as="h2"
						variant="section-title"
						mb={6}
						fontSize={['3xl', null, '3.5xl', null, null, null]}
						color={headingColor[colorMode]}
					>
						/ Works
					</Heading>
					<Creations />
				</Box>

				<Box id="oldcreations">
					<Heading
						as="h2"
						variant="section-title"
						mb={6}
						fontSize={['3xl', null, '3.5xl', null, null, null]}
						color={headingColor[colorMode]}
					>
						/ Old Works
					</Heading>
					<OldCreations />
				</Box>

			</Stack>
		</Container>
	);
}


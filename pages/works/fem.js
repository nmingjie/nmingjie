import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import {
    useColorMode,
    Heading,
    Box,
    Stack,
    Highlight,
    // Image,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    List,
    UnorderedList,
    ListIcon,
    ListItem,
    Button,
    Badge,
    SimpleGrid,
    Link
} from '@chakra-ui/react';

// components
import Container from '../../components/container';
// import { BioSection, BioYear } from '../../components/bio.js';
import Paragraph from '../../components/paragraph';
// import VoxelRaccoonLoader from '../../components/voxel-raccoon-loader.js';
// import Creations from '../../components/Creations.js';
// import SocialMedia from '../../components/SocialMedia.js';
import Section from '../../components/section.js';

import { ChevronRightIcon, DownloadIcon, ChatIcon } from '@chakra-ui/icons';

import Typed from 'react-typed';

import NextLink from 'next/link'
import Image from 'next/image';

import femThumbnail from '../../public/images/creations/fem/fem_eyecatch.png';
import femMobileThumbnail from '../../public/images/creations/fem/fem-landing-page-mobile.png';

import facilitySearchImage from '../../public/images/creations/fem/fem-search.png';
import facilitySearchMapImage from '../../public/images/creations/fem/fem-search-map.png';

import facilityDetailImage from '../../public/images/creations/fem/fem-facility-detail.png';
import facilityDetailMobileImage from '../../public/images/creations/fem/fem-facility-detail-mobile.png';


import facilityPaymentImage from '../../public/images/creations/fem/fem-payment.png';
import facilityPaymentMobileImage from '../../public/images/creations/fem/fem-payment-mobile.png';


import facilityBookingsImage from '../../public/images/creations/fem/fem-booking.png';
import facilityBookingsMobileImage from '../../public/images/creations/fem/fem-booking-mobile.png';


function Work() {

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
                spacing={16}
                // m="0 auto 1rem auto"
                maxWidth="100%"
                px={[8, null, null, null, null, null]}
            >
                <Box
                    as="main"
                    id="home"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                // height="100vh"
                >

                </Box>

                <Box
                    display="flex-column"
                    mt={4}
                    // mb={8}
                    borderRadius="5px"
                    overflow="hidden"
                    justifyContent="center"
                // height={190}
                // width={282}
                >
                    <Box
                        display="flex"
                        mt={4}
                        mb={8}
                        gap={4}
                        borderRadius="5px"
                        overflow="hidden"
                    // height={380}
                    // width={664}
                    >
                        <Image
                            alt="Project thumbnail"
                            objectFit={'cover'}
                            src={femThumbnail}

                        />
                        <Image
                            alt="Project thumbnail"
                            objectFit={'cover'}
                            src={femMobileThumbnail}

                        />
                    </Box>
                    <Box
                        display="flex"
                        // mb={8}
                        borderRadius="5px"
                        overflow="hidden"
                        justifyContent="center"
                    // height={190}
                    // width={282}
                    >


                    </Box>


                    <Heading
                        as="h2"
                        // variant="section-title"
                        // mb={6}
                        mt={6}
                        fontSize={[
                            '3xl',
                            null,
                            '3.5xl',
                            null,
                            null,
                            null,
                        ]}
                        color={headingColor[colorMode]}
                    >
                        JTC&apos;s Facility Estate Management (FEM) - Facility Booking application
                    </Heading>
                </Box>

                <Section delay={0.1}>

                    <Box>
                        <Box display={'flex'}>
                            <Box>
                                <Heading
                                    as="h2"
                                    variant="section-title"
                                    mb={6}
                                    fontSize={[
                                        '3xl',
                                        null,
                                        '3.5xl',
                                        null,
                                        null,
                                        null,
                                    ]}
                                    color={headingColor[colorMode]}
                                >
                                    / Background
                                </Heading>
                                <Paragraph>
                                    The JTC Estate Facility Booking & Management App is a comprehensive and user-friendly platform created for JTC, designed to facilitate seamless facility reservations, enhance convenience, and provide essential support functions for tenants, public users, and facility management personnel within JTC estates.                                </Paragraph>

                            </Box>
                        </Box>
                    </Box>

                </Section>

                <Section delay={0.2}>

                    <Box>
                        <Box display={'flex'}>
                            <Box>
                                <Heading
                                    as="h2"
                                    variant="section-title"
                                    mb={6}
                                    fontSize={[
                                        '3xl',
                                        null,
                                        '3.5xl',
                                        null,
                                        null,
                                        null,
                                    ]}
                                    color={headingColor[colorMode]}
                                >
                                    / Details
                                </Heading>
                            </Box>
                        </Box>
                        <Box>
                            <List ml={4} my={4}>
                                <ListItem>
                                    <Badge colorScheme="green" mr={2}>
                                        Involvement
                                    </Badge>
                                    <span>Frontend Developer</span>
                                </ListItem>
                                <ListItem>
                                    <Badge colorScheme="green" mr={2}>
                                        Tech Stack
                                    </Badge>
                                    <span>React, Next.js, TailwindCSS </span>
                                </ListItem>
                                <ListItem>
                                    <Badge colorScheme="green" mr={2}>
                                        Timeline
                                    </Badge>
                                    <span>2023 - 2024 (Public)</span>
                                </ListItem>
                                <ListItem>
                                    <Badge colorScheme="green" mr={2}>
                                        Platform
                                    </Badge>
                                    <span>Web</span>
                                </ListItem>
                                <ListItem>
                                    <Badge colorScheme="green" mr={2}>
                                        Users
                                    </Badge>
                                    <span>Public User, JTC Tenant, JTC Facility Management Team, Admin</span>
                                </ListItem>
                            </List>

                        </Box>
                    </Box>
                </Section>

                <Box>
                    <Box display={'flex'}>
                        <Box>
                            <Heading
                                as="h2"
                                variant="section-title"
                                mb={6}
                                fontSize={[
                                    '3xl',
                                    null,
                                    '3.5xl',
                                    null,
                                    null,
                                    null,
                                ]}
                                color={headingColor[colorMode]}
                            >
                                / Success Metrics
                            </Heading>
                        </Box>
                    </Box>

                    <List spacing={1} pt={4} >

                        <ListItem
                            // display="flex"
                            alignItems="center"
                        >
                            <ListIcon
                                as={ChevronRightIcon}
                                color={listIconsColor[colorMode]}
                            />
                            Cost Savings and Business Impact

                            <UnorderedList spacing={1} pt={4} pb={4} pl={4}>
                                <ListItem>
                                    Reduced Administrative Workload: Measure the reduction in manual administrative tasks related to facility booking management.

                                </ListItem>
                                <ListItem>
                                    Increased Facility Utilization: Quantify the increase in facility utilization rates due to the app's convenience and accessibility.
                                </ListItem>
                            </UnorderedList>

                        </ListItem>
                    </List>
                </Box>

                <Box>
                    <Box display={'flex'} mb={6}>
                        <Box>
                            <Heading
                                as="h2"
                                variant="section-title"
                                mb={6}
                                fontSize={[
                                    '3xl',
                                    null,
                                    '3.5xl',
                                    null,
                                    null,
                                    null,
                                ]}
                                color={headingColor[colorMode]}
                            >
                                / Requirements, Features & Results
                            </Heading>
                        </Box>
                    </Box>

                    <Box display={'flex-column'} mb={6}>
                        <Box>
                            <Heading
                                as="h2"
                                variant="section-title"
                                mb={6}
                                fontSize={[
                                    '3xl',
                                    null,
                                    'lg',
                                    null,
                                    null,
                                    null,
                                ]}
                                color={headingColor[colorMode]}
                            >
                                Effortless Booking Process
                            </Heading>
                        </Box>

                        <List spacing={1} pt={4} pb={4}>
                            <ListItem
                                display="flex"
                                alignItems="center"
                            >
                                <ListIcon
                                    as={ChevronRightIcon}
                                    color={listIconsColor[colorMode]}
                                />
                                <Paragraph>
                                    Users can seamlessly search for facilities, reserve their desired spaces, and complete payments within a few simple steps.                                </Paragraph>
                            </ListItem>
                            <ListItem
                                display="flex"
                                alignItems="center"
                            >
                                <ListIcon
                                    as={ChevronRightIcon}
                                    color={listIconsColor[colorMode]}
                                />
                                <Paragraph>
                                    Online payment options are integrated, offering a secure and convenient way for users to finalize their bookings.                                </Paragraph>
                            </ListItem>
                        </List>

                        <Box
                            display="flex"
                            mt={4}
                            mb={8}
                            borderRadius="5px"
                            overflow="hidden"
                        // height={380}
                        // width={664}
                        >
                            <Image
                                alt="Project thumbnail"
                                objectFit={'cover'}
                                src={facilitySearchImage}

                            />
                            <Image
                                alt="Project thumbnail"
                                objectFit={'cover'}
                                src={facilitySearchMapImage}

                            />
                        </Box>

                        <Paragraph>
                            Snapshot of the search results
                        </Paragraph>

                        <Box
                            display="flex"
                            mt={4}
                            mb={8}
                            gap={4}
                            borderRadius="5px"
                            overflow="hidden"
                        // height={380}
                        // width={664}
                        >
                            <Image
                                alt="Project thumbnail"
                                objectFit={'cover'}
                                src={facilityDetailImage}

                            />
                            <Image
                                alt="Project thumbnail"
                                objectFit={'cover'}
                                src={facilityDetailMobileImage}

                            />
                        </Box>

                        <Paragraph>
                            Snapshot of facility details
                        </Paragraph>

                        <Box
                            display="flex"
                            mt={4}
                            mb={8}
                            gap={4}
                            borderRadius="5px"
                            overflow="hidden"
                        // height={380}
                        // width={664}
                        >
                            <Image
                                alt="Project thumbnail"
                                objectFit={'cover'}
                                src={facilityPaymentImage}

                            />
                            <Image
                                alt="Project thumbnail"
                                objectFit={'cover'}
                                src={facilityPaymentMobileImage}

                            />
                        </Box>

                        <Paragraph>
                            Snapshot of the payment process
                        </Paragraph>

                    </Box>

                    <Box display={'flex-column'}>
                        <Box>
                            <Heading
                                as="h2"
                                variant="section-title"
                                mb={6}
                                fontSize={[
                                    '3xl',
                                    null,
                                    'lg',
                                    null,
                                    null,
                                    null,
                                ]}
                                color={headingColor[colorMode]}
                            >
                                Booking Management
                            </Heading>
                        </Box>

                        <List spacing={1} pt={4} pb={4}>
                            <ListItem
                                display="flex"
                                alignItems="center"
                            >
                                <ListIcon
                                    as={ChevronRightIcon}
                                    color={listIconsColor[colorMode]}
                                />
                                <Paragraph>
                                    Users can easily view their past and upcoming bookings, providing a clear overview of their reservations.                                </Paragraph>
                            </ListItem>
                        </List>


                        <Box
                            display="flex"
                            mt={4}
                            mb={8}
                            gap={4}
                            borderRadius="5px"
                            overflow="hidden"
                        // height={380}
                        // width={664}
                        >
                            <Image
                                alt="Project thumbnail"
                                objectFit={'cover'}
                                src={facilityBookingsImage}

                            />
                            <Image
                                alt="Project thumbnail"
                                objectFit={'cover'}
                                src={facilityBookingsMobileImage}

                            />
                        </Box>


                    </Box>
                </Box>



            </Stack>
        </Container>


    )
}

export default Work

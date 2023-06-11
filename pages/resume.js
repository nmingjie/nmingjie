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
    Image,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    List,
    ListIcon,
    ListItem,
    Button,
    Link
} from '@chakra-ui/react';

// components
import Container from '../components/Container';
import { BioSection, BioYear } from '../components/Bio.js';
import Paragraph from '../components/Paragraph';
import VoxelRaccoonLoader from '../components/voxel-raccoon-loader.js';
import Creations from '../components/Creations.js';
import SocialMedia from '../components/SocialMedia.js';
import Section from '../components/Section.js';

import { ChevronRightIcon, DownloadIcon, ChatIcon } from '@chakra-ui/icons';

import Typed from 'react-typed';

import NextLink from 'next/link'


function Resume() {

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

                <Box id="about-me">
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
                                / About Me
                            </Heading>
                            <Box
                                fontSize={['sm', null, 'md', null, null, null]}
                            >
                                <BioSection>
                                    <BioYear>2015</BioYear>
                                    <Paragraph>
                                        Awarded an scholarship (worth SGD 100k+) by ST Engineering
                                    </Paragraph>
                                </BioSection>
                                <BioSection>
                                    <BioYear>2018</BioYear>
                                    <Paragraph>
                                        Summer & Winter Exchange at HKUST, Hong Kong & Hanyang University
                                    </Paragraph>
                                </BioSection>
                                <BioSection>
                                    <BioYear>2020</BioYear>
                                    <Paragraph>
                                        Semester Exchange at Delft TU, Netherlands
                                    </Paragraph>
                                </BioSection>
                                <BioSection>
                                    <BioYear>2021</BioYear>
                                    <Paragraph>
                                        Bsc in the Electrical Engineering w/ Double Minor in Econs and CS at NUS.
                                        <br>
                                        </br>
                                        Grade: <b>4.77 / 5.0</b>
                                    </Paragraph>
                                </BioSection>
                                <BioSection>
                                    <BioYear>2021</BioYear>
                                    <Paragraph>
                                        Accepted into Columbia MSC CS
                                    </Paragraph>
                                </BioSection>
                                <BioSection>
                                    <BioYear>2022</BioYear>
                                    <Paragraph>
                                        <NextLink href="https://www.channelnewsasia.com/watch/countries-share-lessons-covid-19-shape-cities-indranee-rajah-2848451" passHref>

                                            <Link target="_blank"

                                                color={contentButtonHoverBg[colorMode]}
                                            >Featured on CNA
                                            </Link>
                                        </NextLink>
                                        {' '} whilst demonstrating his team&apos;s product: &apos;Smart City OS&apos; in World Cities Summit 2022.
                                    </Paragraph>
                                </BioSection>
                            </Box>
                        </Box>
                        <Box
                            mt={10}
                            ml={5}
                            display={[
                                'none',
                                'none',
                                'inline-block',
                                null,
                                null,
                            ]}
                        >
                            <Image
                                boxShadow={componentsBoxShadow[colorMode]}
                                maxWidth={[null, null, '180px', '200px', null]}
                                borderRadius="full"
                                src="/images/profile.jpg"
                                alt="Profile Image"
                            />
                        </Box>
                    </Box>
                    <Box fontSize={['sm', null, 'md', null, null, null]} pt={8}>
                        <Paragraph>
                            Here are some of the relevant SWE modules I took @  NUS:
                        </Paragraph>
                        <Box display="flex" justifyContent={'center'}>
                            <Box
                                display="flex"
                                // justifyContent={'space-around'}
                                gap={'20%'}
                                width={'100%'}
                            >
                                <List spacing={1} pt={4} pb={8}>
                                    <ListItem
                                        display="flex"
                                        alignItems="center"
                                    >
                                        <ListIcon
                                            as={ChevronRightIcon}
                                            color={listIconsColor[colorMode]}
                                        />
                                        <Paragraph>Programming I (CS1010)</Paragraph>
                                    </ListItem>
                                    <ListItem
                                        display="flex"
                                        alignItems="center"
                                    >
                                        <ListIcon
                                            as={ChevronRightIcon}
                                            color={listIconsColor[colorMode]}
                                        />
                                        <Paragraph>Programming II (CS2030)</Paragraph>
                                    </ListItem>
                                    <ListItem
                                        display="flex"
                                        alignItems="center"
                                    >
                                        <ListIcon
                                            as={ChevronRightIcon}
                                            color={listIconsColor[colorMode]}
                                        />
                                        <Paragraph>Data Structure & Algo (CS2040)</Paragraph>
                                    </ListItem>
                                </List>
                                <List spacing={1} pt={4} pb={8}>
                                    <ListItem
                                        display="flex"
                                        alignItems="center"
                                    >
                                        <ListIcon
                                            as={ChevronRightIcon}
                                            color={listIconsColor[colorMode]}
                                        />
                                        <Paragraph>Databases (IT2002)</Paragraph>
                                    </ListItem>
                                    <ListItem
                                        display="flex"
                                        alignItems="center"
                                    >
                                        <ListIcon
                                            as={ChevronRightIcon}
                                            color={listIconsColor[colorMode]}
                                        />
                                        <Paragraph>Software Product Engineering (CS3216)</Paragraph>
                                    </ListItem>
                                    <ListItem
                                        display="flex"
                                        alignItems="center"
                                    >
                                        <ListIcon
                                            as={ChevronRightIcon}
                                            color={listIconsColor[colorMode]}
                                        />
                                        <Paragraph>Computer Networks (EE4204)</Paragraph>
                                    </ListItem>
                                </List>
                            </Box>
                        </Box>
                    </Box>
                    <Box fontSize={['sm', null, 'md', null, null, null]} pt={4}>
                        <Paragraph>
                            Here are some of the relevant AI/ML modules I took @ NUS:
                        </Paragraph>
                        <Box display="flex" justifyContent={'center'}>
                            <Box
                                display="flex"
                                // justifyContent={'space-around'}
                                gap={'20%'}
                                width={'100%'}
                            >
                                <List spacing={1} pt={4} pb={8}>
                                    <ListItem
                                        display="flex"
                                        alignItems="center"
                                    >
                                        <ListIcon
                                            as={ChevronRightIcon}
                                            color={listIconsColor[colorMode]}
                                        />
                                        <Paragraph>Analytics Methods (EE2012)</Paragraph>
                                    </ListItem>
                                    <ListItem
                                        display="flex"
                                        alignItems="center"
                                    >
                                        <ListIcon
                                            as={ChevronRightIcon}
                                            color={listIconsColor[colorMode]}
                                        />
                                        <Paragraph>Regression Analysis (ST3131)</Paragraph>
                                    </ListItem>
                                    <ListItem
                                        display="flex"
                                        alignItems="center"
                                    >
                                        <ListIcon
                                            as={ChevronRightIcon}
                                            color={listIconsColor[colorMode]}
                                        />
                                        <Paragraph>Artificial Intelligence (CS3243)</Paragraph>
                                    </ListItem>
                                    <ListItem
                                        display="flex"
                                        alignItems="center"
                                    >
                                        <ListIcon
                                            as={ChevronRightIcon}
                                            color={listIconsColor[colorMode]}
                                        />
                                        <Paragraph>Machine Learning (CS3244)</Paragraph>
                                    </ListItem>
                                </List>
                                <List spacing={1} pt={4} pb={8}>
                                    <ListItem
                                        display="flex"
                                        alignItems="center"
                                    >
                                        <ListIcon
                                            as={ChevronRightIcon}
                                            color={listIconsColor[colorMode]}
                                        />
                                        <Paragraph>Computer Vision (EE4212)</Paragraph>
                                    </ListItem>
                                    <ListItem
                                        display="flex"
                                        alignItems="center"
                                    >
                                        <ListIcon
                                            as={ChevronRightIcon}
                                            color={listIconsColor[colorMode]}
                                        />
                                        <Paragraph>Image Processing & Analysis (EE4704)</Paragraph>
                                    </ListItem>
                                    <ListItem
                                        display="flex"
                                        alignItems="center"
                                    >
                                        <ListIcon
                                            as={ChevronRightIcon}
                                            color={listIconsColor[colorMode]}
                                        />
                                        <Paragraph>Computer Networks (EE4204)</Paragraph>
                                    </ListItem>
                                </List>
                            </Box>
                        </Box>
                    </Box>
                    <Paragraph>
                        Outside of work, I have a passion for coffee. Additionally, I actively engage in sports such as
                        squash, badminton & roller-blading, which not only keep me physically active but also allow me to foster teamwork and competitive spirit.
                    </Paragraph>

                </Box>

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
                                / Skills

                            </Heading>
                            <Box fontSize={['sm', null, 'md', null, null, null]} pt={4}>
                        <Paragraph>
                            Here are some of the programming languages I am familiar with:
                        </Paragraph>
                        <Box display="flex" justifyContent={'center'}>
                            <Box
                                display="flex"
                                // justifyContent={'space-evenly'}
                                gap={'20%'}
                                width={'100%'}  
                            >
                                <List spacing={1} pt={4} pb={4}>
                                    <ListItem
                                        display="flex"
                                        alignItems="center"
                                    >
                                        <ListIcon
                                            as={ChevronRightIcon}
                                            color={listIconsColor[colorMode]}
                                        />
                                        <Paragraph>C</Paragraph>
                                    </ListItem>
                                    <ListItem
                                        display="flex"
                                        alignItems="center"
                                    >
                                        <ListIcon
                                            as={ChevronRightIcon}
                                            color={listIconsColor[colorMode]}
                                        />
                                        <Paragraph>Java</Paragraph>
                                    </ListItem>
                                    <ListItem
                                        display="flex"
                                        alignItems="center"
                                    >
                                        <ListIcon
                                            as={ChevronRightIcon}
                                            color={listIconsColor[colorMode]}
                                        />
                                        <Paragraph>JavaScript</Paragraph>
                                    </ListItem>
                                </List>
                                <List spacing={1} pt={4} pb={4}>
                                    <ListItem
                                        display="flex"
                                        alignItems="center"
                                    >
                                        <ListIcon
                                            as={ChevronRightIcon}
                                            color={listIconsColor[colorMode]}
                                        />
                                        <Paragraph>Python</Paragraph>
                                    </ListItem>
                                    <ListItem
                                        display="flex"
                                        alignItems="center"
                                    >
                                        <ListIcon
                                            as={ChevronRightIcon}
                                            color={listIconsColor[colorMode]}
                                        />
                                        <Paragraph>SQL</Paragraph>
                                    </ListItem>
                                    <ListItem
                                        display="flex"
                                        alignItems="center"
                                    >
                                        <ListIcon
                                            as={ChevronRightIcon}
                                            color={listIconsColor[colorMode]}
                                        />
                                        <Paragraph>HTML 5.0 & CSS</Paragraph>
                                    </ListItem>
                                </List>
                            </Box>
                        </Box>
                    </Box>
                    <Box fontSize={['sm', null, 'md', null, null, null]} pt={4}>
                        <Paragraph>
                            Here are some of the technologies I have been
                            working with:
                        </Paragraph>
                        <Box display="flex" justifyContent={'center'}>
                            <Box
                                display="flex"
                                // justifyContent={'space-around'}
                                gap={'20%'}

                                width={'100%'}
                            >
                                <List spacing={1} pt={4} pb={4}>
                                    <ListItem
                                        display="flex"
                                        alignItems="center"
                                    >
                                        <ListIcon
                                            as={ChevronRightIcon}
                                            color={listIconsColor[colorMode]}
                                        />
                                        <Paragraph>AngularJS</Paragraph>
                                    </ListItem>
                                    <ListItem
                                        display="flex"
                                        alignItems="center"
                                    >
                                        <ListIcon
                                            as={ChevronRightIcon}
                                            color={listIconsColor[colorMode]}
                                        />
                                        <Paragraph>Django</Paragraph>
                                    </ListItem>
                                </List>
                                <List spacing={1} pt={4} pb={4}>
                                    <ListItem
                                        display="flex"
                                        alignItems="center"
                                    >
                                        <ListIcon
                                            as={ChevronRightIcon}
                                            color={listIconsColor[colorMode]}
                                        />
                                        <Paragraph>React</Paragraph>
                                    </ListItem>
                                    <ListItem
                                        display="flex"
                                        alignItems="center"
                                    >
                                        <ListIcon
                                            as={ChevronRightIcon}
                                            color={listIconsColor[colorMode]}
                                        />
                                        <Paragraph>Figma</Paragraph>
                                    </ListItem>
                                </List>
                            </Box>
                        </Box>

                    </Box>
                        </Box>
                    </Box>

                </Box>

                <Box id="experience">
                    <Heading
                        as="h2"
                        variant="section-title"
                        mb={6}
                        fontSize={['3xl', null, '3.5xl', null, null, null]}
                        color={headingColor[colorMode]}
                    >
                        / Experience
                    </Heading>
                    <Tabs
                        variant="unstyled"
                        display="flex"
                        flexDirection={'column'}
                        alignItems={'flex-start'}
                    >
                        <TabList flexDirection={'row'}>
                            <Tab
                                as={motion.div}
                                fontSize={['md', null, 'lg', null, null, null]}
                                mr={4}
                                //pointerEvents="auto"
                                cursor="pointer"
                                userSelect="none"
                                color={tabButtonColor[colorMode]}
                                bg={tabButtonBgColor[colorMode]}
                                _selected={{
                                    borderColor:
                                        contentButtonBorderColor[colorMode],
                                }}
                                border={'2px solid'}
                                borderColor={'rgba(0, 0, 0, 0)'}
                                borderWidth={'0 0 2px 0'}
                                whileHover={{ scale: 1.1 }}
                            >
                                ST Engineering
                            </Tab>
                        </TabList>
                        <TabPanels
                            fontSize={['sm', null, 'md', null, null, null]}
                            pl={2}
                        >
                            <TabPanel pl={0} pr={0} pb={0}>
                                <Heading
                                    as="h3"
                                    fontSize={[
                                        'xl',
                                        null,
                                        '2xl',
                                        null,
                                        null,
                                        null,
                                    ]}
                                >
                                    <Highlight
                                        query="ST Engineering"
                                        styles={{
                                            color: headingColor[colorMode],
                                        }}
                                    >
                                        Senior Software Developer @ ST Engineering
                                    </Highlight>
                                </Heading>
                                <Paragraph as="em">
                                    Feb 2022 - Present
                                </Paragraph>
                                <List spacing={4} pt={4}>
                                    <Paragraph>
                                        ST Engg - JTC Joint Project: Smart City OS product
                                    </Paragraph>
                                    <ListItem
                                        display="flex"
                                        alignItems="center"
                                    >
                                        <ListIcon
                                            as={ChevronRightIcon}
                                            color={listIconsColor[colorMode]}
                                        />
                                        <Paragraph>
                                            Developed SFEMS web application dashboard, overseeing the entire project lifecycle.
                                        </Paragraph>
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
                                            End-to-end development of asset management module, integrating seamlessly with 10+ asset systems.
                                        </Paragraph>
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
                                            Implemented the alarm monitoring page and associated capabilities
                                        </Paragraph>
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
                                            Independently developed Complex Event Processing platform and associated capabilities
                                        </Paragraph>
                                    </ListItem>
                                </List>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                    <Tabs
                        pt={8}
                        variant="unstyled"
                        display="flex"
                        flexDirection={'column'}
                        alignItems={'flex-start'}
                    >
                        {/* <TabList flexDirection={'row'}>
                            <Tab
                                as={motion.div}
                                fontSize={['md', null, 'lg', null, null, null]}
                                mr={4}
                                //pointerEvents="auto"
                                cursor="pointer"
                                userSelect="none"
                                color={tabButtonColor[colorMode]}
                                bg={tabButtonBgColor[colorMode]}
                                _selected={{
                                    borderColor:
                                        contentButtonBorderColor[colorMode],
                                }}
                                border={'2px solid'}
                                borderColor={'rgba(0, 0, 0, 0)'}
                                borderWidth={'0 0 2px 0'}
                                whileHover={{ scale: 1.1 }}
                            >
                                ST Engineering
                            </Tab>
                        </TabList> */}
                        <TabPanels
                            fontSize={['sm', null, 'md', null, null, null]}
                            pl={2}
                        >
                            <TabPanel pl={0} pr={0} pb={0}>
                                <Heading
                                    as="h3"
                                    fontSize={[
                                        'xl',
                                        null,
                                        '2xl',
                                        null,
                                        null,
                                        null,
                                    ]}
                                >
                                    <Highlight
                                        query="ST Engineering"
                                        styles={{
                                            color: headingColor[colorMode],
                                        }}
                                    >
                                        Research Engineer @ ST Engineering
                                    </Highlight>
                                </Heading>
                                <Paragraph as="em">
                                    June 2021 - Feb 2022
                                </Paragraph>
                                <List spacing={4} pt={4}>
                                    <Paragraph>
                                        ST Engg - NUS Joint Lab
                                    </Paragraph>
                                    <ListItem
                                        display="flex"
                                        alignItems="center"
                                    >
                                        <ListIcon
                                            as={ChevronRightIcon}
                                            color={listIconsColor[colorMode]}
                                        />
                                        <Paragraph>
                                            Collaborated with NUS on research initiatives to address traffic challenges, focusing on AI/ML techniques for traffic signal optimization, response planning, and traffic state prediction.										</Paragraph>
                                    </ListItem>
                                </List>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                    <Tabs
                        pt={8}
                        pb={8}
                        variant="unstyled"
                        display="flex"
                        flexDirection={'column'}
                        alignItems={'flex-start'}
                    >
                        {/* <TabList flexDirection={'row'}>
                            <Tab
                                as={motion.div}
                                fontSize={['md', null, 'lg', null, null, null]}
                                mr={4}
                                //pointerEvents="auto"
                                cursor="pointer"
                                userSelect="none"
                                color={tabButtonColor[colorMode]}
                                bg={tabButtonBgColor[colorMode]}
                                _selected={{
                                    borderColor:
                                        contentButtonBorderColor[colorMode],
                                }}
                                border={'2px solid'}
                                borderColor={'rgba(0, 0, 0, 0)'}
                                borderWidth={'0 0 2px 0'}
                                whileHover={{ scale: 1.1 }}
                            >
                                ST Engineering
                            </Tab>
                        </TabList> */}
                        <TabPanels
                            fontSize={['sm', null, 'md', null, null, null]}
                            pl={2}
                        >
                            <TabPanel pl={0} pr={0} pb={0}>
                                <Heading
                                    as="h3"
                                    fontSize={[
                                        'xl',
                                        null,
                                        '2xl',
                                        null,
                                        null,
                                        null,
                                    ]}
                                >
                                    <Highlight
                                        query="ST Engineering"
                                        styles={{
                                            color: headingColor[colorMode],
                                        }}
                                    >
                                        Software Engineering Intern @ ST Engineering
                                    </Highlight>
                                </Heading>
                                <Paragraph as="em">
                                    Aug - Dec 2019
                                </Paragraph>
                                <List spacing={4} pt={4}>
                                    <Paragraph>
                                        WISX Smart Street Lighting
                                    </Paragraph>
                                    <ListItem
                                        display="flex"
                                        alignItems="center"
                                    >
                                        <ListIcon
                                            as={ChevronRightIcon}
                                            color={listIconsColor[colorMode]}
                                        />
                                        <Paragraph>
                                            Developed web applications with integrations to IoT devices, leveraging communication networks and protocols such as OpenSplice Data Distribution Service and XRCE.
                                        </Paragraph>
                                    </ListItem>
                                </List>
                                <List spacing={4} pt={4}>
                                    <ListItem
                                        display="flex"
                                        alignItems="center"
                                    >
                                        <ListIcon
                                            as={ChevronRightIcon}
                                            color={listIconsColor[colorMode]}
                                        />
                                        <Paragraph>
                                            Enhanced deployment pipeline efficiency by implementing Jenkins and Docker for automated building, pushing, and deployment of docker images.                                        </Paragraph>
                                    </ListItem>
                                </List>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                    <Tabs
                        pt={8}
                        pb={8}
                        variant="unstyled"
                        display="flex"
                        flexDirection={'column'}
                        alignItems={'flex-start'}
                    >
                        <TabList flexDirection={'row'}>
                            <Tab
                                as={motion.div}
                                fontSize={['md', null, 'lg', null, null, null]}
                                mr={4}
                                //pointerEvents="auto"
                                cursor="pointer"
                                userSelect="none"
                                color={tabButtonColor[colorMode]}
                                bg={tabButtonBgColor[colorMode]}
                                _selected={{
                                    borderColor:
                                        contentButtonBorderColor[colorMode],
                                }}
                                border={'2px solid'}
                                borderColor={'rgba(0, 0, 0, 0)'}
                                borderWidth={'0 0 2px 0'}
                                whileHover={{ scale: 1.1 }}
                            >
                                Systems on Silicon Manufacturing (SSMC)
                            </Tab>
                        </TabList>
                        <TabPanels
                            fontSize={['sm', null, 'md', null, null, null]}
                            pl={2}
                        >
                            <TabPanel pl={0} pr={0} pb={0}>
                                <Heading
                                    as="h3"
                                    fontSize={[
                                        'xl',
                                        null,
                                        '2xl',
                                        null,
                                        null,
                                        null,
                                    ]}
                                >
                                    <Highlight
                                        query="SSMC"
                                        styles={{
                                            color: headingColor[colorMode],
                                        }}
                                    >
                                        Data Analytics Intern @ SSMC
                                    </Highlight>
                                </Heading>
                                <Paragraph as="em">
                                    Aug - Dec 2019
                                </Paragraph>
                                <List spacing={4} pt={4}>
                                    <Paragraph>
                                        Analytics & visualisation dashboards for incoming raw materials shipment
                                    </Paragraph>
                                    <ListItem
                                        display="flex"
                                        alignItems="center"
                                    >
                                        <ListIcon
                                            as={ChevronRightIcon}
                                            color={listIconsColor[colorMode]}
                                        />
                                        <Paragraph>
                                            User requirements, stories & feedback gathering with higher management                                        </Paragraph>
                                    </ListItem>
                                </List>
                                <List spacing={4} pt={4}>
                                    <ListItem
                                        display="flex"
                                        alignItems="center"
                                    >
                                        <ListIcon
                                            as={ChevronRightIcon}
                                            color={listIconsColor[colorMode]}
                                        />
                                        <Paragraph>
                                            Built shipment dashboard using Tableau, incorporating complex business logics with live connection to Oracle DB
                                        </Paragraph>
                                    </ListItem>
                                </List>
                                <List spacing={4} pt={4}>
                                    <ListItem
                                        display="flex"
                                        alignItems="center"
                                    >
                                        <ListIcon
                                            as={ChevronRightIcon}
                                            color={listIconsColor[colorMode]}
                                        />
                                        <Paragraph>
                                            Optimized the process by transitioning from Excel-based charts to interactive visualization dashboards with trendlines of parameters and filters.                                        </Paragraph>
                                    </ListItem>
                                </List>
                                <List spacing={4} pt={4}>
                                    <ListItem
                                        display="flex"
                                        alignItems="center"
                                    >
                                        <ListIcon
                                            as={ChevronRightIcon}
                                            color={listIconsColor[colorMode]}
                                        />
                                        <Paragraph>
                                            Successfully rolled out the dashboards to suppliers from Korea and higher management.
                                        </Paragraph>
                                    </ListItem>
                                </List>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>

            </Stack>
        </Container>


    )
}

export default Resume

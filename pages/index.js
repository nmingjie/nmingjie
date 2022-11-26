import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  Badge,
  // UnorderedList
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear, BioBadge, BioList, BioListItem, BioUnorderedList } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5' 
// IoLogoFigma
// import thumbYouTube from '../public/images/links/youtube.png'
// import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbCNA from '../public/images/works-mj/sfems_pdd_cna.png'
import Image from 'next/image'
import { Meta } from '../components/work'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an Software Engineer based in Singapore!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Neo Ming Jie
          </Heading>
          <p>Software Engineer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/mingjie.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Ming Jie is a full-stack developer based in Singapore with a
          passion for learning & building digital solutions. {' '}
          {/* He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code.  */}
          When not online, he loves playing squash. 
          </Paragraph>
          <Paragraph>
          In 2022, he was {' '}
          <NextLink href="https://www.channelnewsasia.com/watch/countries-share-lessons-covid-19-shape-cities-indranee-rajah-2848451" passHref>
            <Link target="_blank">featured on CNA </Link>
          </NextLink>
          whilst demonstrating his team&apos;s project - &quot;Smart City Operating 
          Systems&quot; in World Cities Summit 2022, one of the major convention 
          where government leaders and industry experts meet to address liveable
           and sustainable city challenges.
          {/* Currently, he is living off of his own
          product called{' '}
          <NextLink href="/works/inkdrop" passHref scroll={false}>
            <Link>Inkdrop</Link>
          </NextLink> */}
          {/* . He publishes content for marketing his products and his YouTube
          channel called &quot;
          <NextLink href="https://www.youtube.com/devaslife" passHref>
            <Link target="_blank">Dev as Life</Link>
          </NextLink>
          &quot; has more than 100k subscribers. */}
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Experiences
        </Heading>
        <BioSection>
          <BioYear>2019</BioYear>
          Worked at {' '}
          <Link href="https://www.ssmc.com/" target="_blank">
           Systems on Silicon Manufacturing (SSMC)
          </Link>
          {/* Worked at Systems on Silicon Manufacturing (SSMC) */}
        </BioSection>
        <BioSection>
          <BioYear>2021 to present</BioYear>
          Working at {' '}
          <Link href="https://www.stengg.com/" target="_blank">
          Singapore Technologies (ST) Engineering
           </Link>
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Education
        </Heading>
        <BioSection>
            <BioYear>2018 </BioYear>
            <BioBadge mr={2} >Summer Exchange </BioBadge>
            Hong Kong University of Science and Technology, Hong Kong 
            <br></br>
            <BioBadge mr={2} >Winter Exchange </BioBadge>
            Hanyang International, South Korea
        </BioSection>
        <BioSection>
            <BioYear>2020</BioYear>
            <BioBadge mr={2} >Semester Exchange </BioBadge>
                Delft University of Technology, Netherlands 
        </BioSection>
        <BioSection>
            <BioYear>2021</BioYear>
            {/* <BioBadge mr={2} >Bachelor </BioBadge> */}
            Bachelor&apos;s in the Electrical Engineering, {' '}
            <b>4.77 / 5.0</b>, at National University of Singapore
              {/* Bachelor&apos;s in the Electrical Engineering */}
            <br></br>
            <BioBadge>Minor</BioBadge>
            <BioUnorderedList my={2}>
              <ListItem>
              AI (Computer Science) 
              </ListItem>
              <ListItem>
              Economics              
              </ListItem>
            </BioUnorderedList>
            <BioBadge mr={2} >Relevant SWE Modules </BioBadge> 
            <BioUnorderedList my={2}>
              <ListItem>
                Programming Methodology (CS1010)
              </ListItem>
              <ListItem>
                Programming Methodology II (CS2030)
              </ListItem>
              <ListItem>
                Data Structure & Algo (CS2040)
              </ListItem>
              <ListItem>
                Database Technology & Management (IT2002)
              </ListItem>
              <ListItem>
                Software Product Engineering for Digital Market (CS3216)
              </ListItem>
              <ListItem>
                Computer Networks (EE4204)
              </ListItem>
            </BioUnorderedList>
              <BioBadge mr={2} >Relevant ML Modules </BioBadge> 
            <BioUnorderedList my={2}>
              <ListItem>
              Regression Analysis (ST3131)
              </ListItem>
              <ListItem>
              Artificial Intelligence (CS3243)  
              </ListItem>
              <ListItem>
              Machine Learning (CS3244)          
              </ListItem>
              <ListItem>
              Image Processing & Analysis (EE4704)
              </ListItem>
              <ListItem>
              Computer Vision (EE4212)
              </ListItem>
            </BioUnorderedList>
              {/* Programming Methodology (CS1010), Programming Methodology II (CS2030), Data Structure & Algo (CS2040), 
              Database Technology & Management (IT2002), Software Product Engineering for Digital Market (CS3216), Computer Networks (EE4204) */}
              {/* Relevant Machine Learning Modules:  Regression Analysis (ST3131), Artificial Intelligence (CS3243), Machine Learning (CS3244), Image Processing & Analysis (EE4704), Computer Vision (EE4212)
            , Fuzzy/Neural Systems (EE4305)  */}
        </BioSection>

       
      </Section>

      
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Programming Language
        </Heading>
        <Paragraph>
          Java, Javascript, Python, C, SQL
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          {/* Frameworks / Popular Libaries */}
          Relevant Tools
        </Heading>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Frameworks</Meta>
            Django, AngularJS, React, Node.js 
          </ListItem>
          <ListItem>
            <Meta>Libaries</Meta>
            pandas, Highcharts, Three.js
          </ListItem>
          <ListItem>
            <Meta>Tools / Application</Meta>
            Postman, Grafana, Prometheus, Postgres
          </ListItem>
          <ListItem>
            <Meta> Design Tools </Meta>
            Figma
          </ListItem>
        </List>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Coffee, Sports (Squash, Badminton, Rollerblading, Snowboarding) & Eating Good Food
          {/* {' '} */}
          {/* <Link href="https://illust.odoruinu.net/" target="_blank">
            Drawing
          </Link> */}
          {/* , Sports (Squash, Badminton, Rollerblading, Snowboarding)  */}
          {/* {' '} */}
          {/* <Link href="https://500px.com/p/mingjie" target="_blank">
            Photography
          </Link> */}
          {/* , Leica, Machine Learning */}
          {/* & Eating Good Food */}
        </Paragraph>
      </Section>


      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/nmingjie" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @nmingjie
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/nmingjie/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @nmingjie
              </Button>
            </Link>
          </ListItem>
          {/* <ListItem>
            <Link href="https://twitter.com/mingjie" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @mingjie (日本語)
              </Button>
            </Link>
          </ListItem> */}
          {/* <ListItem>
            <Link href="https://instagram.com/mingjie" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @mingjie
              </Button>
            </Link>
          </ListItem> */}
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          {/* <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;100k subs)
          </GridItem> */}
          <GridItem
            href="https://www.channelnewsasia.com/watch/countries-share-lessons-covid-19-shape-cities-indranee-rajah-2848451"
            title="Featured on National TV"
            thumbnail={thumbCNA}
          >
            Demonstration of Smart City OS at World Cities Summit 2022
          </GridItem>
        </SimpleGrid>

        {/* <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box> */}


      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'

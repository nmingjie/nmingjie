import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList
  // ,
  // AspectRatio
} from '@chakra-ui/react'
// import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Realtime Sound System">
    <Container>
      <Title>
        Realtime Sound System <Badge>2018</Badge>
      </Title>
      <P>
      Real-time sound system is a hardware prototype 
      that uses FPGA application device to play and record sounds.
      </P>
      <br></br>
      <b>Features</b>
      <UnorderedList ml={4} my={4}>
      <ListItem>
      Two main features, as a piano player and a playback 
      recorder that records both speech audio and keys played from the device.
      </ListItem>
      <ListItem>
      FPGA connected to a mechanical keyboard to simulate an actual piano keys, 
      improving user experience      
      </ListItem>
      <ListItem>
      Basic streaming capabilities such as: Rewind, Changable Playback speed, Skip
       <ListItem>
       Ability to play Mario song
      </ListItem>
      </ListItem>
      <ListItem>
      Volume display with LED
      </ListItem>
      <ListItem>
        7-Segment display 
      </ListItem>
      <ListItem>
      Triangular & Sinusoidal signal output adjustor    
      </ListItem>
      <ListItem>
        Reset recording & playback    
      </ListItem>

      </UnorderedList>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>FPGA hardware board</span>
        </ListItem>
        <ListItem>
          <Meta>Tools</Meta>
          <span>LPCXpresso IDE</span>
        </ListItem>
        <ListItem>
          <Meta>Language</Meta>
          <span>C</span>
        </ListItem>
        <ListItem>
          <Meta>Team</Meta>
          <span>
          <Link href="https://www.linkedin.com/in/timothyyteo/" target="_blank">
          Timothy Teo 
          </Link>
          {' '}& Myself</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works-mj/soundsystem_eyecatch.png" alt="FitNUS" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

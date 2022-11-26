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
  <Layout title="FitNUS">
    <Container>
      <Title>
        FitNUS <Badge>2018</Badge>
      </Title>
      <P>
        FitNUS is a hardware prototype that uses 
        LPCXpresso microcontroller board to track 
        the status of a climber.
      </P>
      <br></br>
      <b>Features</b>
      <UnorderedList ml={4} my={4}>
      <ListItem>
      Three modes: Initilization, Climb and Emergency
      </ListItem>
      <ListItem>
      Fall Detection using accelerometer (I2C) 
      </ListItem>
      <ListItem>
      Body Temperature Monitoring using temperature sensor (GPIO)
      </ListItem>
      <ListItem>
      Ambient Light Detection using light sensor (I2C) and LED
      </ListItem>
      <ListItem>
      Joystick using Rotary Switch
      </ListItem>
      <ListItem>
      Persistent data transmission through wireless UART using XBee RF modules
      </ListItem>

      </UnorderedList>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>LPCXpresso microcontroller board</span>
        </ListItem>
        <ListItem>
          <Meta>Tools</Meta>
          <span>LPCXpresso</span>
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

      <WorkImage src="/images/works-mj/fitnus_fpga_board.png" alt="FitNUS" />
      <WorkImage src="/images/works-mj/fitnus_screens.png" alt="FitNUS" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  // Heading,
  UnorderedList
  // ,
  // AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => (
  <Layout title="Stuff-Sharing Platform">
    <Container>
      <Title>
      Stuff-Sharing Platform <Badge>2020</Badge>
      </Title>
      <P>
      The system allows people to borrow or lend stuff that they own (tools, appliances,
      furniture or books) either free or for a fee. Users advertise stuff available 
      (what stuff, where to pick up and return, when it is available, etc.) or can 
      browse the available stuff and bid to borrow some stuff. The stuff owner 
      or the system (your choice) chooses the successful bid. Each user has an 
      account. Administrators can create, modify and delete all entries. 
      Please refer to {' '}
      <Link href="https://www.snapgoods.com" target="_blank">
        https://www.snapgoods.com
      </Link>, {' '}
      <Link href="https://ww.peerby.com" target="_blank">
      https://ww.peerby.com
      </Link>{' '} or other stuff 
      sharing sites for examples and data.
      <br></br>
      <b>Features</b>
      <UnorderedList ml={10} my={2}>
        <ListItem>
          CRUD for Users, Stuff/Posts, Offers
        </ListItem>
        <ListItem>
          Searches
        </ListItem>
        <ListItem>
          Administrive Privileges
        </ListItem>
      </UnorderedList>
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="">
            TBA <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Django and PostgreSQL</span>
        </ListItem>
        <ListItem>
          <Meta>Team</Meta>
          <span>Myself</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works-mj/stuffsharing_home.png" alt="Stuff Sharing" />
      <WorkImage src="/images/works-mj/stuffsharing_search.png" alt="Stuff Sharing" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

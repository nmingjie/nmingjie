import {
  Container,
  Badge,
  Link,
  List,
  ListItem
  // ,
  // AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Hoot Dat!">
    <Container>
      <Title>
        Hoot Dat! <Badge>2020-</Badge>
      </Title>
      <P>
      Hoot Dat is a real-time multiplayer question-and-answer guessing game where 
      in each round, a player (answerer) - unknown to the rest - is randomly 
      selected to answer a question. After the answerer has answered the question, 
      the other players (guessers) have to guess who answered the question 
      while a timer ticks away..
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://hoot-dat.netlify.app/">
            https://hoot-dat.netlify.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, NodeJS/Express, Socket.IO, Redis, and PostgreSQL</span>
        </ListItem>
        {/* <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://blog.Hoot Dat!.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
            How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
            $5/mo <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
      </List>

      <WorkImage src="/images/works-mj/hootdat_screens.png" alt="Hoot Dat!" />
      {/* <WorkImage src="/images/works/Hoot Dat!_02.png" alt="Hoot Dat!" /> */}
      {/* <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/-qBavwqc_mY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio> */}
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

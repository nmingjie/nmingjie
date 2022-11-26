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
        <ListItem>
          <Meta>UI/UX</Meta>
          <span>Figma: {' '}
          <Link href="https://www.figma.com/file/p80T4tiNZhJ4CuINrodi8S/Hoot-Dat?node-id=9%3A64&t=BSOWJqzNT3uFHQgJ-1" target="_blank">
          My design!
          </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Team</Meta>
          <span>
          <Link href="https://github.com/gary-lgy" target="_blank">
          Gary
          </Link>,{' '}
          <Link href="https://github.com/geoboom" target="_blank">
          Geogie
          </Link>,{' '}
          <Link href="https://github.com/jonchan51" target="_blank">
          Jonathan
          </Link>
          {' '} & Myself</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works-mj/hootdat_screens.png" alt="Hoot Dat!" />
      <P>
      The idea for this game was conceived when we were brainstorming on a virtual 
      icebreaker game. At first, we were looking at games like Among Us, skribbl.io,
      bonk.io, and 2-truths-1-lie, hoping to build something similar to them where
      people could hang out, get to know each other, and have a good time. But 
      we didn’t want to copy what was already out there, so we cracked our heads 
      further, thinking about what we could build that people would play.

      Countless hours passed inconclusively debating over the game to build until finally,
      it stuck us. Why not build something that conveys the very spirit of icebreakers: 
      getting to know each other better? It was such a simple motivation, yet it was 
      the very answer to our predicament. And so we iterated further on that idea with a
      twist, leading to the conception of Hoot Dat, a fusion between Among Us and
      2-truths-1-lie.
      </P>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

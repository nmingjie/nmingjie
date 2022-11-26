import { Box , Badge, List, ListItem,UnorderedList } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const BioSection = styled(Box)`
  padding-left: 3.4em;
  text-indent: -3.4em;
`

export const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
`
export const BioBadge = styled(Badge)`
  padding-left: 4.4em;
  text-indent: -4.4em;
`

export const BioListItem = styled(ListItem)`

`

export const BioList = styled(List)`

`

export const BioUnorderedList = styled(UnorderedList)`
// padding-left: 0em;
text-indent: 0em;

`

// export const BioBadge = ({ children }) => (
//   <Badge mr={2} padding-left="10.4em">
//     {children} 
//   </Badge>
// )
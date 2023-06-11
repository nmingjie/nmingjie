import { SimpleGrid, Box, Badge } from '@chakra-ui/react';
import CreationGridItem from './creationGridItem.js';

// thumbnails
import sfemsThumbnail from '../public/images/creations/sfems/sfems_eyecatch2.png';
import cepThumbnail from '../public/images/creations/cep/cep_eyecatch.png';

import hootdatThumbnail from '../public/images/creations/hootdat/hootdat_eyecatch.png';
import ssmcThumbnail from '../public/images/creations/ssmc/ssmc_eyecatch.png';


// import Paragraph from './Paragraph.js';



const Creations = () => {
	return (
		<SimpleGrid columns={[1, null, 3, null, null]} gap={6} pt={4}>
			<Box >
				<CreationGridItem
					title="SFEMS (CityOS)"
					thumbnail={sfemsThumbnail}
					id = "sfems"
				>
					<Box pb={1}>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="teal"
						>
							AngularJS
						</Badge>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="teal"
						>
							Microsoft SQl
						</Badge>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="teal"
						>
							JavaScript
						</Badge>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="teal"
						>
							NodeJS
						</Badge>
					</Box>
				</CreationGridItem>
			</Box>
			<Box>
				<CreationGridItem
					title="Event Processing (CityOS)"
					thumbnail={cepThumbnail}
					id ="cep"
				>
					<Box pb={1}>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="teal"
						>
							AngularJS
						</Badge>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="teal"
						>
							Microsoft SQl
						</Badge>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="teal"
						>
							JavaScript
						</Badge>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="teal"
						>
							NodeJS
						</Badge>
					</Box>
				</CreationGridItem>
			</Box>
			<Box>
				<CreationGridItem
					title="HootDat!"
					thumbnail={hootdatThumbnail}
					id = "hootdat"
					// link="https://github.com/1391819/kdrama-dash"
				>
					<Box pb={1}>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="teal"
						>
							React
						</Badge>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="teal"
						>
							Express (NodeJS)
						</Badge>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="teal"
						>
							Socket.IO
						</Badge>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="teal"
						>
							Redis
						</Badge>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="teal"
						>
							PostgreSQL
						</Badge>
					</Box>
				</CreationGridItem>
			</Box>
			<Box>
				<CreationGridItem
					title="SSMC Dashboard"
					thumbnail={ssmcThumbnail}
					id = "ssmc"
					// link="https://github.com/1391819/kdrama-dash"
				>
					<Box pb={1}>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="teal"
						>
							Tableau
						</Badge>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="teal"
						>
							Oracle DB
						</Badge>
					</Box>
				</CreationGridItem>
			</Box>
		</SimpleGrid>
	);
};

export default Creations;

import { SimpleGrid, Box, Badge } from '@chakra-ui/react';
import CreationGridItem from './creationGridItem.js';

// thumbnails
import stuffsharingThumbnail from '../public/images/creations/stuffsharing/stuffsharing_eyecatch.png';
import soundsystemThumbnail from '../public/images/creations/soundsystem/soundsystem_eyecatch.png';
import fitnusThumbnail from '../public/images/creations/fitnus/fitnus_eyecatch.png';


const OldCreations = () => {
	return (
		<SimpleGrid columns={[1, null, 3, null, null]} gap={6} pt={4}>
			<Box>
				<CreationGridItem
					title="Stuff-Sharing Platform"
					thumbnail={stuffsharingThumbnail}
					id = "stuffsharing"
					// link="https://github.com/1391819/kdrama-dash"
				>
					<Box pb={1}>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="teal"
						>
							Django
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
					title="Fit NUS"
					thumbnail={fitnusThumbnail}
					id = "fitnus"
					// link="/works/fitnus"
				>
					<Box pb={1}>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="teal"
						>
							C
						</Badge>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="teal"
						>
							Assembly
						</Badge>
					</Box>
				</CreationGridItem>
			</Box>
			<Box>
				<CreationGridItem
					title="Real-Time Sond System"
					thumbnail={soundsystemThumbnail}
					id = "soundsystem"
					// link="https://github.com/1391819/kdrama-dash"
				>
					<Box pb={1}>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="teal"
						>
							C
						</Badge>
						<Badge
							className="stack-badge"
							fontSize={['xs', null, null, null, null, null]}
							colorScheme="teal"
						>
							FPGA
						</Badge>
					</Box>
				</CreationGridItem>
			</Box>
		</SimpleGrid>
	);
};

export default OldCreations;

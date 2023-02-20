import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import Image from 'next/image';
const queryClient = new QueryClient();

const myLoader = ({ src, width, quality }: { src: string; width: number; quality?: number | undefined }) => {
	return `${src}?w=${width}&q=${quality || 75}`;
};

// Generates `/quest/1` ~ `/quest/10`
export async function getStaticPaths() {
	const paths = Array.from({ length: 10 }, (_, index) => ({
		params: {
			id: (index + 1).toString()
		}
	}));
	return {
		paths,
		fallback: false // can also be true or 'blocking'
	};
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {
	const { id } = context.params;
	const res = await fetch(`http://localhost:3000/api/quests/${id}`);
	const quest = await res.json();
	return {
		// Passed to the page component as props
		props: {
			quest: quest,
			id: id
		}
	};
}

export function QuestInfo({ quest, id }: { quest: any; id: number }) {
	const { data, isLoading, isError } = useQuery('posts', () => fetch(`/api/quests/${id}`).then((res) => res.json()), {
		initialData: quest
	});
	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error</div>;
	}

	const DifficultyIndicator = (props: any) => {
		const indicator = [];
		for (var i = 0; i < props.level; i++) {
			indicator.push(
				<Image
					key={i}
					className='Sword_full'
					src={'/Sword_full.png'}
					alt='Sword Full Image'
					width='12'
					height='12'
					priority
				/>
			);
		}
		for (var i = 0; i < 5 - props.level; i++) {
			indicator.push(
				<Image
					className='Sword_empty'
					src={'/Sword_empty.png'}
					alt='Sword Empty Image'
					width='12'
					height='12'
					priority
					key={i + props.level}
				/>
			);
		}
		return <div>{indicator}</div>;
	};
	// Render post...
	return (
		<main>
			<Image src={'/NG logo.png'} alt='logo' width={320} height={35} className='applogo' priority />
			<div className='container'>
				<div className='quest'>
					<Image
						loader={myLoader}
						className='cardImage'
						src={data.cover}
						alt='cardImage'
						width='0'
						height='0'
						style={{ width: '100%', height: 'auto', minWidth: '100px', maxHeight: '200px' }}
						priority
					/>
					<div style={{ padding: '10px' }}>
						<div className='questTitlePart'>
							<Image
								className='questTitleArrow'
								src={'/quest_title.png'}
								alt='arrowImage'
								width='149'
								height='9'
								priority
							/>
							<div className='cardTitle'>{data.title.toUpperCase()}</div>
							<Image
								className='questTitleArrow'
								src={'/quest_title.png'}
								alt='arrowImage'
								width='149'
								height='9'
								style={{ transform: 'scaleX(-1)' }}
								priority
							/>
						</div>
						<div className='questInfo'>
							<div>
								<div className='cardInfoItem'>
									<p className='cardCategory'>Skill tree</p>
									<p className='cardValue'>{data.skillTree}</p>
								</div>
								<div className='cardInfoItem'>
									<p className='cardCategory'>Skill</p>
									<p className='cardValue'>{data.skill}</p>
								</div>
							</div>
							<div>
								<div className='cardInfoItem'>
									<p className='cardCategory'>Difficulty</p>
									<div className='difficultyLevel'>
										<DifficultyIndicator level={data.difficulty} />
									</div>
								</div>
								<div className='cardInfoItem'>
									<p className='cardCategory'>Quest Type</p>
									<p className='cardValue'>{data.type}</p>
								</div>
							</div>
						</div>
						<div className='questDescription'>{data.description}</div>
						<div className='questBottom'>
							<div>
								<div className='questRewards'>QUEST REWARDS</div>
								<div className='rewardsItem'>
									<p>Exp</p>
									<p>{data.rewards.experience}</p>
								</div>
							</div>
							<div style={{ display: 'flex', alignItems: 'flex-end' }}>
								<div className='goBackBtn'>Go Back</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default function Quest({ quest, id }: { quest: any; id: number }) {
	return (
		<QueryClientProvider client={queryClient}>
			<QuestInfo quest={quest} id={id} />
		</QueryClientProvider>
	);
}

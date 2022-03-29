import { useState } from 'preact/hooks'
import style from './style.scss';
import Masonry from '../../components/masonry';

const Home = () => {
	const [color, setColor] = useState(Math.floor(Math.random()*16777215).toString(16))
	
	return (
		<div class={style.home}>
			<Masonry columns={3} gap={25}>
				{
					[...Array(9).keys()].map(key => {
						let gridArea = 0,
							random = Math.floor(Math.random()*16777215).toString(16);
						
						if(key === 0) gridArea = '1 / 1 / 7 / 7';
						if(key === 1) gridArea = '1 / 7 / 4 / 13';
						if(key === 2) gridArea = '4 / 7 / 7 / 10';
						if(key === 3) gridArea = '4 / 10 / 7 / 13';
						if(key === 4) gridArea = '7 / 1 / 8 / 5';
						if(key === 5) gridArea = '8 / 1 / 11 / 5';
						if(key === 6) gridArea = '7 / 5 / 11 / 9';
						if(key === 7) gridArea = '7 / 9 / 10 / 13';
						if(key === 8) gridArea = '10 / 9 / 11 / 13';

						const randomColor = () => setColor(random)

						return (
							<div
								onClick={randomColor}
								className={`div${key+1}`}
								style={{gridArea, backgroundColor: `#${color && random}`}}>
									{key+1}
							</div>
						)
					})
				}
			</Masonry>
		</div>
	);
};

export default Home;

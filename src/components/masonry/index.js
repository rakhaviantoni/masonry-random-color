import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.scss';

const Masonry = props => {
	const columnWrapper = {};
	const result = [];
	
	// divide children into columns
	for (let i = 0; i < props.children.length; i++) {
		result.push(
		<>
		  {props.children[i]}
		</>
	  );
	}
  
	return (
	  <div class={style.masonry}>
		{result}
	  </div>
	);
};

export default Masonry;

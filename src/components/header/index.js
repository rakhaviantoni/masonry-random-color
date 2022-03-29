import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.scss';

const Header = () => (
	<header class={style.header}>
		<h1>Ichigo Test</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<Link activeClassName={style.active} href="/profile">Me</Link>
			<Link activeClassName={style.active} href="/profile/rakha">Rakha</Link>
		</nav>
	</header>
);

export default Header;

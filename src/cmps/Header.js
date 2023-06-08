import classes from './Header.module.css'

const Header = function () {
	return (
		<header className={classes.header}>
			<p>Welcome to Mastermind World</p>
			<button className={classes.btn}> New Game</button>
			<button className={classes.btn}>Settings</button>
		</header>
	)
}

export default Header

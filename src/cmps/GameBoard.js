import classes from './GameBoard.module.css'

const GameBoard = function (props) {
	return <main className={classes.board}>{props.children}</main>
}

export default GameBoard

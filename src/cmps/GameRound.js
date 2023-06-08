import RoundDots from './RoundDots'
import DotsResults from './DotsResult'
import classes from './GameRound.module.css'

const GameRound = function () {
	return (
		<div className={classes.round}>
			<RoundDots></RoundDots>
			<button className={classes.btnTry}> Try</button>
			<DotsResults></DotsResults>
		</div>
	)
}

export default GameRound

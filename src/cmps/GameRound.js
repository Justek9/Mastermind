import React, { useState, useContext } from 'react'
import RoundDots from './RoundDots'
import DotsResults from './DotsResult'
import classes from './GameRound.module.css'
import GameContext from './GameContext'

const GameRound = function (props) {
	const [rowState, setRowState] = useState([6, 6, 6, 6])
	const { password } = useContext(GameContext)

	const tryHandler = function () {
        console.log(password);
		//check if none is white
		if (rowState.filter(el => el === 6).length > 0) {
			alert('Choose all colors')
			return
		}
		alert('Still validating')
	}
	return (
		<div className={classes.round}>
			<RoundDots setRowState={setRowState} rowState={rowState}></RoundDots>
			<button className={classes.btnTry} onClick={tryHandler}>
				{' '}
				Try
			</button>
			<DotsResults></DotsResults>
		</div>
	)
}

export default GameRound

import React, { useState, useContext } from 'react'
import RoundDots from './RoundDots'
import DotsResults from './DotsResult'
import classes from './GameRound.module.css'
import GameContext from './GameContext'

const GameRound = function (props) {
	const [rowState, setRowState] = useState([6, 6, 6, 6])
	const { password } = useContext(GameContext)
	const [dotsResult, setDotsResult] = useState(['grey', 'grey', 'grey', 'grey'])

	const tryHandler = function () {
		console.log(password)
		//check if none is white
		if (rowState.filter(el => el === 6).length > 0) {
			// alert('Choose all colors')
			return
		}
		let tempPsswrd = []
		let tempRowState = []
		let tempResult = []
		for (let i = 0; i < password.length; i++) {
			// console.log(rowState[i], password[i])
			if (rowState[i] === password[i]) {
				tempResult.push('red')
			} else {
				tempPsswrd.push(password[i])
				tempRowState.push(rowState[i])
			}
		}
		for (let i = 0; i < tempPsswrd.length; i++) {
			console.log(tempRowState)
			if (tempRowState.includes(tempPsswrd[i])) {
				tempResult.push('white')
				let index = tempRowState.indexOf(tempPsswrd[i])
				tempRowState.splice(index, 1)
			} else tempResult.push('grey')
		}
		setDotsResult(prev => [...tempResult])
	}
	return (
		<div className={classes.round}>
			<RoundDots setRowState={setRowState} rowState={rowState}></RoundDots>
			<button className={classes.btnTry} onClick={tryHandler}>
				{' '}
				Try
			</button>
			<DotsResults dotsResult={dotsResult}></DotsResults>
		</div>
	)
}

export default GameRound

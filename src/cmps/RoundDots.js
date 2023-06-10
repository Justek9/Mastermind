import { useState, useContext } from 'react'
import Dot from './Dot'
import classes from './RoundDots.module.css'
import GameContext from './GameContext'

const RoundDots = function (props) {
	const { selectedColor, colors } = useContext(GameContext)

	const colorPickHandler = function (event) {
		props.setRowState(old =>
			old.map((val, index) => {
				if (index == event.target.getAttribute('data-id')) return colors.indexOf(selectedColor)
				else return val
			})
		)
	}

	const roundDots = props.rowState.map((el, index) => (
		<Dot
			disabled={props.disabled}
			id={index}
			key={index}
			handleClick={colorPickHandler}
			color={colors[props.rowState[index]]}></Dot>
	))

	return <div className={classes.container}>{roundDots}</div>
}

export default RoundDots

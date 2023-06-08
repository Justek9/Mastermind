import React, { useState, useContext } from 'react'
import classes from './Aside.module.css'
import Dot from './Dot'
import GameContext from './GameContext'

const Aside = function (props) {
	const selectedColorHandler = function (event) {
		setSelectedColor(event.target.getAttribute('data-color'))
	}

	const { selectedColor, setSelectedColor, colors } = useContext(GameContext)

	return (
		<aside className={classes.aside}>
			<p className={classes.paragraph}>Pick color</p>
			<div className={classes.container}>
				{colors.map((color, index) => (
					<Dot
						handleClick={selectedColorHandler}
						className={selectedColor === color ? classes.selected : ''}
						color={color}
						key={index}></Dot>
				))}
			</div>
		</aside>
	)
}

export default Aside

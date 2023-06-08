import React, { useState } from 'react'
import classes from './Aside.module.css'
import DotColorPicker from './DotColorPicker'

let colors = ['red', 'blue', 'green', 'yellow', 'violet', 'black']

const Aside = function (props) {
	const [selectedColor, setSelectedColor] = useState('red')

	const selectedColorHandler = function (event) {
		setSelectedColor(event.target.getAttribute('data-color'))
	}

	return (
		<aside className={classes.aside}>
			<p className={classes.paragraph}>Pick color</p>
			<div className={classes.container}>
				{colors.map((color, index) => (
					<DotColorPicker
						selectedColor={selectedColorHandler}
						className={selectedColor === color ? classes.selected : ''}
						color={color}
						key={index}></DotColorPicker>
				))}
			</div>
		</aside>
	)
}

export default Aside

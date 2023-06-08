import classes from './DotColorPicker.module.css'

const DotColorPicker = function (props) {
	return (
		<button
			onClick={props.selectedColor}
			className={`${props.className} ${classes.dot}`}
			style={{ backgroundColor: props.color, width: props.size, height: props.size }}
			data-color={props.color}>
			{props.children}
		</button>
	)
}

export default DotColorPicker

import classes from './DotColorPicker.module.css'

const DotColorPicker = function (props) {
	return (
		<button className={classes.dot} style={{ backgroundColor: props.color, width: props.size, height: props.size }}>
			{props.children}
		</button>
	)
}

export default DotColorPicker

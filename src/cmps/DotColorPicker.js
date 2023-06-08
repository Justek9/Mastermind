import classes from './DotColorPicker.module.css'

const DotColorPicker = function (props) {
	return (
		<div className={classes.dot} style={{ backgroundColor: props.color, width: props.size, height: props.size }}>
			{props.children}
		</div>
	)
}

export default DotColorPicker

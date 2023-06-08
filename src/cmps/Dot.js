import classes from './Dot.module.css'

const Dot = function (props) {
	return (
		<button
			onClick={props.handleClick}
			className={`${props.className} ${classes.dot}`}
			style={{ backgroundColor: props.color, width: props.size, height: props.size }}
			data-color={props.color}
			data-id={props.id}>
			{props.children}
		</button>
	)
}

export default Dot

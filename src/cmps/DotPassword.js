import DotColorPicker from './DotColorPicker'
import classes from './DotPassword.module.css'

const DotPassword = function () {
	const dot = new Array(4).fill(0).map((el, index) => (
		<DotColorPicker color='white' key={index} size='2rem'>
			?
		</DotColorPicker>
	))

	return <div className={classes.dot}>{dot}</div>
}

export default DotPassword

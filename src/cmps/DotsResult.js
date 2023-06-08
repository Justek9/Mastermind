import DotColorPicker from './DotColorPicker'
import classes from './DotsResult.module.css'

const DotsResults = function (props) {
	const dotsResult = new Array(4).fill(0).map((el, index) => <DotColorPicker key={index} size='1rem'></DotColorPicker>)

	return <div className={classes.container}>{dotsResult}</div>
}

export default DotsResults
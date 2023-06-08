import DotColorPicker from './DotColorPicker'
import classes from './RoundDots.module.css'

const RoundDots = function (props) {
	const roundDots = new Array(4).fill(0).map((el, index) => <DotColorPicker key={index}></DotColorPicker>)
	return <div className={classes.container}>{roundDots}</div>
}

export default RoundDots

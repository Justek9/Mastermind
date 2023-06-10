import Dot from './Dot'
import classes from './DotsResult.module.css'

const DotsResults = function (props) {
	const dotsResult = props.dotsResult.map((color, index) => <Dot key={index} size='1rem' color={color}></Dot>)

	return <div className={classes.container}>{dotsResult}</div>
}

export default DotsResults

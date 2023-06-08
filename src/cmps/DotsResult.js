import Dot from './Dot'
import classes from './DotsResult.module.css'

const DotsResults = function (props) {
	const dotsResult = new Array(4).fill(0).map((el, index) => <Dot key={index} size='1rem'></Dot>)

	return <div className={classes.container}>{dotsResult}</div>
}

export default DotsResults

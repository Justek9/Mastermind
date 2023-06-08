import Dot from './Dot'
import classes from './DotPassword.module.css'

const DotPassword = function () {
	const dot = new Array(4).fill(0).map((el, index) => (
		<Dot color='white' key={index} size='2rem'>
			?
		</Dot>
	))

	return <div className={classes.dot}>{dot}</div>
}

export default DotPassword

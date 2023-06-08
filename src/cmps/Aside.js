import classes from './Aside.module.css'
import DotColorPicker from './DotColorPicker'

let colors = ['red', 'blue', 'green', 'yellow', 'white', 'black']

const Aside = function (props) {
	return (
		<aside className={classes.aside}>
			<p className={classes.paragraph}>Pick color</p>
            <div className={classes.container}>
			{colors.map((color, index) => (
				<DotColorPicker color={color} key={index}></DotColorPicker>
			))}
            </div>
		</aside>
	)
}

export default Aside

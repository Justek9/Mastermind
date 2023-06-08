import './App.css'
import Header from './cmps/Header'
import Aside from './cmps/Aside'
import GameBoard from './cmps/GameBoard'
import DotPassword from './cmps/DotPassword'

function App() {
	return (
		<div className='App'>
			<Header></Header>
			<div className='container'>
				<Aside></Aside>
				<GameBoard>
					<p>Password:</p>
					<DotPassword></DotPassword>
					<div>DUPA</div>
				</GameBoard>
			</div>
		</div>
	)
}

export default App

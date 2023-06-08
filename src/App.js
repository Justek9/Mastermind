import './App.css'
import React, { useState, useEffect } from 'react'
import Header from './cmps/Header'
import Aside from './cmps/Aside'
import GameBoard from './cmps/GameBoard'
import DotPassword from './cmps/DotPassword'
import GameRound from './cmps/GameRound'
import GameContext from './cmps/GameContext'

function App() {
	let colors = ['red', 'blue', 'green', 'yellow', 'violet', 'black', 'white']

	const [selectedColor, setSelectedColor] = useState('red')
	const [password, setPassword] = useState(
		new Array(4).fill(0).map(el => {
			return Math.floor(Math.random() * 6)
		})
	)

	console.log(password)

	return (
		<GameContext.Provider value={{ selectedColor, password, setSelectedColor, setPassword, colors }}>
			<div className='App'>
				<Header></Header>
				<div className='container'>
					<Aside></Aside>
					<GameBoard>
						<p>Password:</p>
						<DotPassword></DotPassword>
						<GameRound></GameRound>
					</GameBoard>
				</div>
			</div>
		</GameContext.Provider>
	)
}

export default App

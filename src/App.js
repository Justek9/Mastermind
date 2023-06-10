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

	const [counter, setCounter] = useState(1)
	const [isGameOver, setIsGameOver] = useState(false)

	console.log(password)

	let isDisabledFunc = function (index) {
		if (isGameOver) return true
		else if (index === counter - 1) return false
		else return true
	}

	let gameRounds = new Array(counter)
		.fill(0)
		.map((el, index) => <GameRound key={index} disabled={isDisabledFunc(index)}></GameRound>)

	return (
		<GameContext.Provider
			value={{ selectedColor, password, setSelectedColor, setPassword, colors, setCounter, counter, setIsGameOver }}>
			<div className='App'>
				<Header></Header>
				<div className='container'>
					<Aside></Aside>
					<GameBoard>
						<p>Password:</p>
						<DotPassword></DotPassword>
						{gameRounds}
					</GameBoard>
				</div>
			</div>
		</GameContext.Provider>
	)
}

export default App

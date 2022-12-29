import {useState} from 'react'
import './index.css'

function Game() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-full p-8 text-slate-800 bg-gradient-from-r from-cyan-500 to-blue-500">
      <h1 className="text-center text-5xl mb-4 font-display text-white">Tic Tac Toe</h1>
      <div>
        <div>Board</div>
      </div>
    </div>
  )
}

export default Game

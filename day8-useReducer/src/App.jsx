import { useReducer } from 'react'

import './App.css'

const reducer = (state, action) => {
  switch (action.type) {
    case 'Increment':
      return { ...state, count: state.count + 1 }
    case 'showText':
      return { ...state, showText: !state.showText }
    default:
      return "This Aciton doen't exist"
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true
  })

  const { count, showText } = state

  const handleClick = () => {
    dispatch({ type: 'Increment' })
    dispatch({ type: 'showText' })
  }

  return (
    <div className="App">
      <h1>Front Beginners</h1>
      <h3>{count}</h3>
      <button onClick={handleClick}>Clique</button>
      {showText && <p>Bem-vindo ao Front Beginners</p>}
    </div>
  )
}

export default App

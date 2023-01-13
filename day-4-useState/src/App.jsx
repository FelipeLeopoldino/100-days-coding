import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const [valueInput, setValueInput] = useState('Felipe')

  const add = () => {
    setCount(count + 1)
    console.log(count)
  }
  const remove = () => {
    setCount(count - 1)
    console.log(count)
  }

  const onChangeInput = event => {
    setValueInput(event.target.value)
  }

  return (
    <div className="App">
      <h1>Front Beginners</h1>
      <h3>{count}</h3>
      <button onClick={add}>Adicionar</button>
      <button onClick={remove}>Remover</button>
      <div>
        <input onChange={onChangeInput} />
      </div>
      <h3>{valueInput}</h3>
    </div>
  )
}

export default App

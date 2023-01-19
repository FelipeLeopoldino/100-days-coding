import { useEffect, useState } from 'react'
import './App.css'
import { useRef } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [textInput, setTextInput] = useState('')
  const countRef = useRef(0)

  const timeToCallSomething = useRef(null)

  const FetchSomething = () => {
    // faz uma requisição na API
  }

  useEffect(() => {
    countRef.current = count
  }, [count])

  useEffect(() => {
    if (timeToCallSomething.current) {
      clearInterval(timeToCallSomething.current)
    }
    timeToCallSomething.current = setTimeout(FetchSomething, 1000)

    return () => clearInterval(timeToCallSomething.current)
  }, [textInput])

  return (
    <div className="App">
      <h1>Front Beginners</h1>
      <div className="card">
        <p>Contador original {count}</p>
        <p>Contador Referencia{countRef.current}</p>
        <form>
          <input
            name="name"
            onChange={e => setTextInput(e.target.value)}
            value={textInput}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  )
}

export default App

import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [countB, setCountB] = useState(0)
  const [data, setData] = useState('')

  // useEffect(() => {
  //   console.log('executa sempre')
  // })

  // useEffect(() => {
  //   console.log('executa na primeira vez que a página carrega.')
  // }, [])

  // useEffect(() => {
  //   console.log('executa SEMPRE QUE UM ESTADO ESPECIFICO É ALTERADOR.')
  // }, [count])

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     console.log(`o count foi executado ${count}`)
  //   }, 1000)
  //   return () => {
  //     clearTimeout(timer)
  //   }
  // }, [count])

  // Request API

  useEffect(() => {
    fetch('https://api.github.com/users/felipeleopoldino')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])
  console.log(data)

  if (!data) {
    return <p>Loading</p>
  }

  return (
    <div className="App">
      <h1>Front Beginners</h1>
      <h3>Name: {data.name}</h3>
      <div className="card">
        <p>Foi renderizado {count}</p>
        <button onClick={() => setCount(count => count + 1)}>Render</button>
      </div>
    </div>
  )
}

export default App

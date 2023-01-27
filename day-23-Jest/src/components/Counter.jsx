import { useState } from 'react'

export default function Counter({ initialCount }) {
  const [count, seCount] = useState(initialCount)

  const increment = () => {
    seCount(prev => prev + 1)
  }

  const decrement = () => {
    seCount(prev => prev - 1)
  }

  const restart = () => {
    seCount(0)
  }

  const switchSigns = () => {
    seCount(prev => prev * -1)
  }

  return (
    <>
      <h1>Count: {count}</h1>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={restart}>Restart</button>
        <button onClick={switchSigns}>Switch Signs</button>
      </div>
    </>
  )
}

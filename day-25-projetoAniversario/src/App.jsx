import { useState } from 'react'
import './App.css'
import List from './components/List'
import data from './data'

function App() {
  const [birthdayList, setBirthdayList] = useState(data)

  return (
    <main>
      <section className="container">
        <h3>Front Beginners</h3>
        <h3>{birthdayList.length} aniversario{birthdayList.length !== 0 ? 's' : ''} hoje</h3>
        <List birthdayList={birthdayList} />
        <button onClick={() => setBirthdayList([])}>Limpar Lista</button>
      </section>
    </main>
  )
}

export default App

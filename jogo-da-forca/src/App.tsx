import styled from 'styled-components'
import './App.css'
import HangmanDrawing from './components/Hangman-drawing'
import HangmanWord from './components/Hangman-word'
import Keyboard from './components/Keyboard'

const HangmnPart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 375px;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 375px;
`

function App() {
  return (
    <Wrapper>
      <HangmnPart>
        <h2>Jogo da forca</h2>
        <HangmanDrawing />
        <HangmanWord />
      </HangmnPart>
      <Keyboard />
    </Wrapper>
  )
}

export default App

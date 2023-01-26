import { useCallback, useEffect, useState } from 'react'
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

const words = [
  'familia',
  'aline',
  'felipe',
  'marialuiza',
  'carlos',
  'larissa',
  'tania',
  'geovane'
]

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })

  const [guessedLetters, setGuesseLetters] = useState<string[]>([])
  const incorrectGuesses = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )
  const correctGuesses = guessedLetters.filter(letter =>
    wordToGuess.includes(letter)
  )

  const isLoser = incorrectGuesses.length >= 6
  const isWinner = wordToGuess
    .split('')
    .every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return
      setGuesseLetters(guessedLetters => [...guessedLetters, letter])
    },
    [guessedLetters, isLoser, isWinner]
  )

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (!key.match(/^[a-z]$/)) return
      e.preventDefault()
      addGuessedLetter(key)
    }
    document.addEventListener('keypress', handler)
    return () => {
      document.removeEventListener('keypress', handler)
    }
  }, [guessedLetters])

  return (
    <Wrapper>
      <HangmnPart>
        {isLoser && 'Você Perdeu, Atualize a página'}
        {isWinner &&
          'Parabéns você venceu, Atualize a página para jogar novamente'}
        <h2>Jogo da forca</h2>
        <HangmanDrawing numberOfGuesses={incorrectGuesses.length} />
        <HangmanWord
          reveal={isLoser}
          guessedLetters={guessedLetters}
          word={wordToGuess}
        />
      </HangmnPart>
      <Keyboard
        disabled={isLoser || isWinner}
        activeLetters={correctGuesses}
        inactiveLetters={incorrectGuesses}
        addGuessedLetter={addGuessedLetter}
      />
    </Wrapper>
  )
}

export default App

import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  font-size: 3rem;
  text-transform: uppercase;
  font-weight: bold;
  font-family: sans-serif;
`

interface HangmanWordProps {
  word: string
  guessedLetters: string[]
  reveal: boolean
}

export default function HangmanWord({
  reveal,
  word,
  guessedLetters
}: HangmanWordProps) {
  return (
    <Wrapper>
      {word.split('').map((letter, index) => (
        <span
          style={{
            borderBottom: '0.1em solid black',
            height: '40px',
            minWidth: '50px'
          }}
          key={index}
        >
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? 'visible'
                  : 'hidden',
              color:
                !guessedLetters.includes(letter) && reveal ? 'red' : 'black'
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </Wrapper>
  )
}

import styled from 'styled-components'

const Base = styled.div`
  height: 10px;
  width: 250px;
  background-color: black;
  margin-left: 100px;
`
const VerticalLine = styled.div`
  height: 250px;
  width: 10px;
  background-color: black;
  margin-left: 150px;
`
const VerticalLineSmall = styled.div`
  height: 40px;
  width: 10px;
  background-color: black;
  margin-left: 150px;
  position: absolute;
  top: 0;
  right: 70px;
`
const HorizontalLine = styled.div`
  height: 10px;
  width: 140px;
  background-color: black;
  position: absolute;
  right: 80px;
  top: 0;
`

const Head = styled.div`
  height: 30px;
  width: 30px;
  border: 5px solid black;
  border-radius: 50%;
  position: absolute;
  top: 35px;
  right: 55px;
`
const Body = styled.div`
  height: 60px;
  width: 10px;
  background-color: black;
  position: absolute;
  top: 70px;
  right: 70px;
`

const RigthArm = styled.div`
  height: 10px;
  width: 30px;
  background-color: black;
  position: absolute;
  top: 80px;
  right: 45px;
  rotate: -30deg;
`
const LeftArm = styled.div`
  height: 10px;
  width: 30px;
  background-color: black;
  position: absolute;
  top: 80px;
  right: 75px;
  rotate: 30deg;
`
const RigthLeg = styled.div`
  height: 10px;
  width: 40px;
  background-color: black;
  position: absolute;
  top: 135px;
  right: 41px;
  rotate: 40deg;
`
const LeftLeg = styled.div`
  height: 10px;
  width: 40px;
  background-color: black;
  position: absolute;
  top: 135px;
  right: 71px;
  rotate: -40deg;
`

const bodyParts = [Head, Body, RigthArm, LeftArm, RigthLeg, LeftLeg]
interface HangmanDrawingProps {
  numberOfGuesses: number
}

export default function HangmanDrawing({
  numberOfGuesses
}: HangmanDrawingProps) {
  return (
    <div
      style={{
        position: 'relative'
      }}
    >
      {bodyParts.slice(0, numberOfGuesses).map((BodyParty, index) => {
        return <BodyParty key={index} />
      })}
      <HorizontalLine />
      <VerticalLineSmall />
      <VerticalLine />
      <Base />
    </div>
  )
}

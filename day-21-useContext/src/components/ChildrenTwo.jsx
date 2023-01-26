import useAppContext from '../hook/useAppContext'

export default function ChildrenTwo() {
  const { setName } = useAppContext()
  return (
    <button onClick={() => setName('Carlinho da Massa')}>Mude o nome</button>
  )
}

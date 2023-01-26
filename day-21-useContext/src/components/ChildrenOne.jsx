import useAppContext from '../hook/useAppContext'


export default function ChildrenOne() {
  const {name} = useAppContext()
  return <div>{name}</div>
}

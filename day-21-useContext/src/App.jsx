import ChildrenOne from './components/ChildrenOne'
import AppProvider from './context/AppProvider'
import ChildrenTwo from './components/ChildrenTwo'
import './App.css'

function App() {
  return (
    <AppProvider>
      <ChildrenOne />
      <ChildrenTwo />
    </AppProvider>
  )
}

export default App

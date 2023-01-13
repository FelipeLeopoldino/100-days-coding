import './App.css'
import useAxios from './hook/use-axios'
import pokemonInstance from './helper/axios-instance'

function App() {
  const [pokemonList, loading, error] = useAxios({
    axiosInstace: pokemonInstance,
    method: 'GET',
    url: 'pokemon'
  })

  console.log(pokemonList, loading, error)

  if (loading) {
    return <div>Loading</div>
  }
  if (error) {
    return <div>{error}</div>
  }
  return (
    <div className="App">
      <h1>Pokemon</h1>
      <div>
        {pokemonList.results.map((pokemon, index) => (
          <div key={index}>{pokemon.name}</div>
        ))}
      </div>
    </div>
  )
}

export default App

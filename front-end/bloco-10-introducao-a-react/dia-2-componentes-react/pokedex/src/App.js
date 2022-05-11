import './App.css';
import pokemon from './data'
import Pokemons from './Pokemons';




function App() {
 
   return(
  <>
  <h1 className="title">Pokédex</h1>
  <div className="container">
    {pokemon.map((poke) => (
    <div className="pokemon" key={poke.name}  >
    <Pokemons pokes={poke} />
    </div>
  ))}
  </div>
  </>
  );
}

export default App;

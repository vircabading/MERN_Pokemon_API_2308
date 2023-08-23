import React, {useState} from "react";

import NavBarView from "./components/NavBarView";
import FetchPokemonView from "./components/FetchPokemonView";

///////////////////////////////////////////////////
//  MAIN APPLICATION
///////////////////////////////////////////////////

function App() {
  const [listOfPokemon, setListOfPokemon] = useState([]);

  const getPokemonList = (newPokemonList) => {
    const newDate = new Date();
    console.log(`*** In get pokemon list: ${newDate.toLocaleTimeString()} ***`);
    setListOfPokemon(newPokemonList);
  }

  return (
    <main>
      <NavBarView />
      {/* ///// Main Content Area //////////// */}
      <div className='container mt-4 p-2 round bg-white' >
        <h1>Pokemon API</h1>
        <br />
        <FetchPokemonView getPokemonList={getPokemonList} />
      </div>
      <p>Pokemon List: {JSON.stringify(listOfPokemon)}</p>
    </main>

  );
}

export default App;

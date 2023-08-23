import React, {useState} from "react";

import NavBarView from "./components/NavBarView";
import FetchPokemonView from "./components/FetchPokemonView";
import ViewPokemonList from "./components/ViewPokemonList";

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
        <FetchPokemonView getPokemonList={getPokemonList} />
        <br />
        <ViewPokemonList listOfPokemon={listOfPokemon} className="mt-2"/>
      </div>
    </main>

  );
}

export default App;

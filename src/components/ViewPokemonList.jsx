import React from 'react'

///////////////////////////////////////////////////
//  VIEW POKEMON LIST
///////////////////////////////////////////////////

function ViewPokemonList(props) {
  return (
    <div>
        <h3>List of Pokemon</h3>
        <hr />
        <p>List of Pokemon: {JSON.stringify(props.listOfPokemon)}</p>
    </div>
  )
}

export default ViewPokemonList;
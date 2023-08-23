import React from 'react'
import "../App.css"

///////////////////////////////////////////////////
//  VIEW POKEMON LIST
///////////////////////////////////////////////////

function ViewPokemonList(props) {
    const list = props.listOfPokemon;
    return (
        <div>
            <h3>List of Pokemon</h3>
            <hr />
            {
                list.map((e,i) => {
                    return <div className='row' key={i}>
                        <div className='col-2 bg-navbar-dark round m-2 text-yellow'>{i+1}</div>
                        <div className='col-8 bg-nav-button round m-2 text-white'>{e.name}</div>
                    </div>
                })
            }
        </div>
    )
}

export default ViewPokemonList;
import React from 'react';
import '../App.css';

///////////////////////////////////////////////////
//  FETCH POKEMON VIEW
///////////////////////////////////////////////////

const FetchPokemonView = () => {

    const handleClick = () => {
        let currentDate = new  Date();
        console.log(`*** Pokemon Fetch: ${ currentDate.toLocaleTimeString() }`);
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col btn bg-nav-button round'
                    onClick={e => handleClick()}>
                    <h3 className='text-yellow'>Fetch Pokemon</h3>
                </div>
            </div>
        </div>
    )
}

export default FetchPokemonView;
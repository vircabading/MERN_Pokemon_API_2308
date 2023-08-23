import React, {useState} from 'react';
import '../App.css';

///////////////////////////////////////////////////
//  FETCH POKEMON VIEW
///////////////////////////////////////////////////

const FetchPokemonView = () => {
    const [list, setList] = useState("");

    const handleClick = () => {
        let currentDate = new Date();
        console.log(`*** Pokemon Fetch: ${currentDate.toLocaleTimeString()}`);
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
            .then(response => response.json())
            .then(response => {
                let currentDate = new Date();
                console.log(`*** Pokemon Fetch Just return now: ${currentDate.toLocaleTimeString()}`);
                console.log(response);
                setList(response.results);
            }).catch(err=>console.log(err));
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col btn bg-nav-button round'
                    onClick={e => handleClick()}>
                    <h3 className='text-yellow'>Fetch Pokemon</h3>
                </div>
            </div>
            <hr />
            <p>List: {JSON.stringify(list)}</p>
        </div>
    )
}

export default FetchPokemonView;
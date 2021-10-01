import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function Category() {
    const dispatch = useDispatch();
    //local state 
    const [searchValue, setSearchValue] = useState('');

    //results from server.
    const reduxState = useSelector(store => store.imageReducer);


    const newSearch = event => {
        event.preventDefault();
        console.log(searchValue)
        dispatch({ type: 'FETCH_GIF', payload: searchValue })
        setSearchValue('');
    }

    const handleFavorite = (url) => {
        console.log('in pic', url)
        dispatch({
            type: 'SET_FAVORITE',
            payload: url
        })
    }

    return (
        <>
            <form onSubmit={(event) => newSearch(event)}>
                <input type='text'
                    value={searchValue}
                    onChange={(event) => setSearchValue(event.target.value)} />
                <input type='submit' value='Search' />
            </form>
            <ul>
                {/* Future map location */}
            </ul>

            <button onClick={handleFavorite}>Add Favorite</button>
            <h1>Results:</h1>
            {/* {JSON.stringify(reduxState)} */}
            {reduxState.map((gif, i) => (<ul>
                <li key={i}>
                    <img src={gif.data.images.downsized_medium.url} />
                    <button onClick={(event) => handleFavorite(gif.data.images.downsized_medium.url)}>Favorite</button>
                </li>
            </ul>
            ))}
        </>
    );
}

export default Category;
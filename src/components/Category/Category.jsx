import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function Category() {
    const dispatch = useDispatch();
    //local state 
    const [searchValue, setSearchValue] = useState('');


    const newSearch = event => {
        event.preventDefault();
        console.log(searchValue)
        dispatch({type: 'FETCH_GIF', payload: searchValue})
        setSearchValue('');
    }

    const handleFavorite = () => {
        dispatch({
            type: 'SET_FAVORITE'
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
            <button onClick={handleFavorite}>Add Favorite</button>
        </>
    );
}

export default Category;
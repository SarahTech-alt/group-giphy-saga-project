import React, { useState } from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function Category() {
    const dispatch = useDispatch();
    //local state 
    const [searchValue, setSearchValue] = useState('');

    const handleForSearch = (event) => {
        console.log('event happened', event.target.value);
        setSearchValue()
    }

    return (
        <>
            <form onSubmit={newSearch}>
                <input type='text'
                    value={search}
                    onChange={(event) => setSearchValue(event.target.value)} />
                <input type='submit' value='Search' />
            </form>

        </>
    );
}

export default Category;
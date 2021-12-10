import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchFilterEnetered } from '../../actions';
import './index.css'

const SearchBar = ({}) => {
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();

    const onSearchFilterEneterd = (text) => {
        setSearchText(text);
        dispatch(searchFilterEnetered({ json: text }))
    }


    return (
        <div className="searchContainer">
            <TextField id="standard-basic" value={searchText} onChange={(event) => onSearchFilterEneterd(event?.target?.value)} label="Search by Device Name,Owner or Platform..." variant="standard" fullWidth/>
        </div>
    )
}
export default SearchBar;

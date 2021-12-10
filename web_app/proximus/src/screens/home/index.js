import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initializeDeviceList } from '../../actions';
import ActionContainer from '../../components/actioncontainer';
import Header from '../../components/header';
import ListView from '../../components/listview';
import SearchBar from '../../components/searchbar';
import './index.css'

const Home = ({}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        initializeList();
    }, [])
  
    const initializeList = async () => {
        try {
            const value =  localStorage.getItem('com.devicelist.proximus')
            const settingTheme =  localStorage.getItem('com.proximus.theme')

            if (value !== null) {
                let list = JSON.parse(value);
                dispatch(initializeDeviceList({ json: list }))
            }
        } catch (e) {
            // error reading value
        }
    }
    return (
       <div>
           <Header/>
           <SearchBar/>
           <ListView/>
           <ActionContainer/>
       </div>
    )
}
export default Home;

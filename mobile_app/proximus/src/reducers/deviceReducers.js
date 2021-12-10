import AsyncStorage from "@react-native-async-storage/async-storage";
import {  INIT_LIST, PUSH_ITEMS, SEARCH_LIST, SEARCH_TEXT, UPDATE_LIST } from "../types";

const initialState = {
    filterText: {},
    deviceList: [],
    currentEditItem: {},
    searchFilter: '',
    filterList:[]
};


const deviceReducer = (state = initialState, action) => {
    switch (action.type) {
    
        case UPDATE_LIST: {
            return { ...state, deviceList: action?.data };
        }
    
        case INIT_LIST: {
            let newList = action?.data?.json;
            return { ...state, deviceList: newList };
        }
        case SEARCH_TEXT: {
            let searchText = action?.data?.json;
           
            return { ...state, searchFilter: searchText };
        }
        case SEARCH_LIST: {
           
            return { ...state, filterList:action?.data };
        }
        default:
            return state;
    }
};
export default deviceReducer;

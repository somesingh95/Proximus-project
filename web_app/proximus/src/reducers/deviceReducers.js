import { ADD_ITEM, DELETE_ITEM, SEARCH_LIST, INIT_LIST, PUSH_ITEMS, SEARCH_TEXT, UPDATE_LIST } from "../types";

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
     
        case PUSH_ITEMS: {
            let list = state.deviceList;
            let newList = action?.data?.json;
            list.push(...newList);
            localStorage.setItem("com.devicelist.proximus", JSON.stringify(list));
            return { ...state, deviceList: list };
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

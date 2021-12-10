import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM, INIT_LIST, PUSH_ITEMS, SEARCH_LIST, SEARCH_TEXT, UPDATE_LIST } from "../types";

export const addItemToList = jsonBodyParams => ({
    type: ADD_ITEM,
    data: jsonBodyParams,
  });

  export const deleteItemFromList = jsonBodyParams => ({
    type: DELETE_ITEM,
    data: jsonBodyParams,
  });

  export const editCurrentItem = jsonBodyParams => ({
    type: EDIT_ITEM,
    data: jsonBodyParams,
  });

  export const pushItemstoList = jsonBodyParams => ({
    type: PUSH_ITEMS,
    data: jsonBodyParams,
  });

  export const initializeDeviceList = jsonBodyParams => ({
    type: INIT_LIST,
    data: jsonBodyParams,
  });

  export const searchFilterEnetered = jsonBodyParams => ({
    type: SEARCH_TEXT,
    data: jsonBodyParams,
  });

  export const updateDeviceList = list => ({
    type: UPDATE_LIST,
    data: list,
  });
  export const updateFilterList = list => ({
    type: SEARCH_LIST,
    data: list,
  });
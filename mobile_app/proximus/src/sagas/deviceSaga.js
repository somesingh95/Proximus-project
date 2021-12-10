import { put, takeLatest, select } from 'redux-saga/effects';
import { updateDeviceList, updateFilterList } from '../actions';
import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM, PUSH_ITEMS, SEARCH_TEXT, UPDATE_LIST } from '../types';
import AsyncStorage from "@react-native-async-storage/async-storage";

const getProject = (state) => state.deviceReducer.deviceList

function* addItem(action) {
    let list = yield select(getProject); // <-- get the Device List

    list.push(action?.data?.json);
    AsyncStorage.setItem("com.devicelist.proximus", JSON.stringify(list));
    yield put(updateDeviceList(list));

}
function* deleteItem(action) {
    let list = yield select(getProject); // <-- get the Device List
    let { _id } = action?.data?.json;
    list = list.filter(val => val?._id !== _id);

    AsyncStorage.setItem("com.devicelist.proximus", JSON.stringify(list));
    yield put(updateDeviceList(list));

}
function* editItem(action) {
    let list = yield select(getProject); // <-- get the Device List
let { _id } = action?.data?.json;
list?.map((device, idx) => {
    if (device?._id === _id) {
        list[idx] = action?.data?.json;
    }
})
AsyncStorage.setItem("com.devicelist.proximus", JSON.stringify(list));
    yield put(updateDeviceList(list));

}

function* pushItem(action) {
    let list = yield select(getProject); // <-- get the Device List
    let newList = action?.data?.json;
    list.push(...newList);
    AsyncStorage.setItem("com.devicelist.proximus", JSON.stringify(list));
    yield put(updateDeviceList(list));

}

function* searchItem(action) {
    let list = yield select(getProject); // <-- get the Device List
let searchText = action?.data?.json;
let filterList = [];
if(searchText !== ''){
    list?.map((device, idx) => {
       if (device?.deviceName?.toLowerCase().indexOf(searchText.toLowerCase()) > -1 || 
            device?.platform?.toLowerCase().indexOf(searchText.toLowerCase()) > -1  ||
            device?.owner?.toLowerCase().indexOf(searchText.toLowerCase()) > -1 )  {
            filterList.push(device)
        }
    })
}
    yield put(updateFilterList(filterList));

}
export function* adddDeviceActionWatcher() {
    yield takeLatest(ADD_ITEM, addItem);
}

export function* deleteDeviceActionWatcher() {
    yield takeLatest(DELETE_ITEM, deleteItem);
}

export function* editDeviceActionWatcher() {
    yield takeLatest(EDIT_ITEM, editItem);
}

export function* searchDeviceActionWatcher() {
    yield takeLatest(SEARCH_TEXT, searchItem);
}

export function* pushDeviceActionWatcher() {
    yield takeLatest(PUSH_ITEMS, pushItem);
}
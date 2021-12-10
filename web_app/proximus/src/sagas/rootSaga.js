import {all, fork} from 'redux-saga/effects';
import { adddDeviceActionWatcher, deleteDeviceActionWatcher, editDeviceActionWatcher, pushDeviceActionWatcher, searchDeviceActionWatcher } from './deviceSaga';



export function* rootSaga() {
  yield all([
    fork(adddDeviceActionWatcher),
    fork(deleteDeviceActionWatcher),
    fork(editDeviceActionWatcher),
    fork(searchDeviceActionWatcher),
    fork(pushDeviceActionWatcher)

  ]);
}

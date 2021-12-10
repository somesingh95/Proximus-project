import { Button, FormHelperText, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useEffect, useImperativeHandle, useState } from 'react';
import { forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { addItemToList, editCurrentItem } from '../../actions';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Switch from "react-switch";
import { ANDROID, IOS, OTHER } from '../../assets/constants';

import './index.css'

const platformList = [
    { key: 0, name: ANDROID },
    { key: 1, name: IOS },
    { key: 2, name: OTHER },
]

const label = { inputProps: { 'Helvetica': 'isActive' } };


const DeviceForm = forwardRef((props, ref) => {

    const dispatch = useDispatch();
    const { state } = useLocation();
    let navigate = useNavigate();

    const [deviceName, setDeviceName] = useState('');
    const [platform, setPlatform] = useState('')
    const [ownerName, setCurrentOwner] = useState('')
    const [date, setDate] = useState(new Date())
    const [isActive, setIsActive] = useState(false)
    // const [barCodeData, setBarCodeData] = useState(false)





    useEffect(() => {
        if (state) {

            setCurrentOwner(state?.owner)
            setDeviceName(state?.deviceName)
            setPlatform(state?.platform)
            setIsActive(state?.active)
        }
    }, [])

    useImperativeHandle(
        ref,
        () => ({

            onAddDevice() {
                let body = {
                    _id: uuidv4(),
                    deviceName: deviceName,
                    platform: platform,
                    purchaseDate: date.toUTCString(),
                    active: isActive,
                    owner: ownerName
                }
                if (deviceName === '') {
                    alert('Please fill device name.')
                    return;
                }
               
                if (ownerName === '') {
                    alert('Please fill owner name.')
                    return;
                }
                if (platform === '') {
                    alert('Please fill platform.')
                    return;
                }
                dispatch(addItemToList({ json: body }));
                clearData();
                navigate('/');
            },
            onEditDevice() {

                let body = {
                    _id: state?._id,
                    deviceName: deviceName,
                    platform: platform,
                    owner: ownerName,
                    purchaseDate: date.toUTCString(),
                    active: isActive

                }
                dispatch(editCurrentItem({ json: body }));
                clearData();
                navigate('/');
            }

        }),
    )



    const clearData = () => {
        setCurrentOwner('')
        setDeviceName('')
        setPlatform('')
        setIsActive(false)
    }

    const onPlatFormSelected = (event) => {
        setPlatform(event?.target?.value)
    }

    return (
        <div className="deviceContainer">
            <div className="textInputContainer">
                <TextField id="standard-basic"
                    label="Device name"
                    variant="standard"
                    fullWidth
                    value={deviceName}
                    onChange={(event) => setDeviceName(event.target.value)} />
            </div>

            <div className="textInputContainer">
                <TextField id="standard-basic"
                    label="Current owner"
                    variant="standard"
                    fullWidth
                    value={ownerName}
                    onChange={(event) => setCurrentOwner(event.target.value)} />
            </div>
            <div className="textInputContainer">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        fullWidth
                        label="Purchase Date"
                        value={date}
                        onChange={(newValue) => {
                            setDate(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </div>
            <div className="platformText">
                <InputLabel id="demo-simple-select-label">Platform</InputLabel>
            </div>
            <div className="textInputContainer">

                <Select
                    fullWidth
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={platform}

                    onChange={onPlatFormSelected}
                >
                    {platformList?.map((platform) => {
                        return (
                            <MenuItem value={platform?.name}>{platform?.name}</MenuItem>
                        )
                    })}

                </Select>

            </div>
            <div className="switchContainer">
                <span className="switchLabel">isActive</span>
                <Switch onChange={(checked) => setIsActive(checked)} checked={isActive} />
            </div>
        </div>
    )
})
export default DeviceForm;

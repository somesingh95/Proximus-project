import React, { useEffect, useState } from 'react';
import './index.css'
import inActiveIcon from '../../assets/image/inactive.png'
import activeIcon from '../../assets/image/active.png'
import editIcon from '../../assets/image/editLight.png'
import deleteIcon from '../../assets/image/deleteLight.png'
import rightIcon from '../../assets/image/rightIconLight.png'
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { deleteItemFromList } from '../../actions';

const DeviceItem = ({device}) => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const { deviceName, platform, owner } = device;
    let activeInactiveIcon = device?.active ? activeIcon : inActiveIcon

    const onEditItemPressed = () => {
        navigate("/addDevice",{replace:true,state:device})
    }
    const onDevicePressed = () => {
        navigate("/viewDevice",{replace:true,state:device})
    }
    const onDeletePressed = () => {
       let responseAlert =  window.confirm("Are you sure you want to delete the device '"+deviceName+"' .?")
       if(responseAlert){
        onDeleteConfirmed();
       }
    }

    const onDeleteConfirmed = async () => {
        dispatch(deleteItemFromList({ json: device }))
    
    }

    
    return (
        <div className="container" >
            <div className="imageContainer" onClick={() => onDevicePressed()}>
                <img src={activeInactiveIcon} className="activeImage"/>
            </div>
            <div className="deviceTextContainer" onClick={() => onDevicePressed()}>
                <div className="deviceNameText">
                    {deviceName}
                </div>
                <div className="deviceNameText">
                    {owner}/{platform}
                </div>
            </div>
            <div className="editContainer">
             
            <div className="iconContainer" onClick={() => onDeletePressed()}>
            <img src={deleteIcon} className="activeImage"/>
            </div>
            <div className="iconContainer" onClick={() => onEditItemPressed()}>
            <img src={editIcon} className="activeImage"/>
            </div>
            </div>

            <div className="iconContainer" onClick={() => onDevicePressed()}>
            <img src={rightIcon} className="activeImage"/>
            </div>
            
        </div>
    )
}
export default DeviceItem;

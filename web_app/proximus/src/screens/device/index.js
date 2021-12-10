import { Button } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DeviceForm from '../../components/deviceForm';
import Header from '../../components/header';
import './index.css'

const Device = ({}) => {

    const [isEditMode,setIsEditMode] = useState(false)
  
    let navigate = useNavigate();
    const {state} = useLocation();
    const childRef = useRef();

    const onAddPressed  = () => {
        childRef.current.onAddDevice()
    }
    const onUpdatePressed = () => {
        childRef.current.onEditDevice()
    }
    const onCancelPressed = () => {
        navigate("/")
    }
   


    useEffect(() => {
        if (state) {
        setIsEditMode(true)
        }
    },[])

    return (
       <div className="formcontainer">
         <Header/>
         <div className="addDeviceText">
            {isEditMode ? 'Edit' : 'Add'} Device
         </div>
         <DeviceForm ref={childRef}/>
         <div className="actionContainer">
         <div className="buttonContainer">
                <Button style={{backgroundColor:'green'}}variant="contained" onClick={() => onCancelPressed()}>
                    Cancel
                </Button>
            </div>
            <div className="buttonContainer">
              {isEditMode
              ?
              <Button style={{backgroundColor:'green'}} variant="contained" onClick={() => onUpdatePressed()}>
              Update
          </Button>
              :
                <Button style={{backgroundColor:'green'}} variant="contained" onClick={() => onAddPressed()}>
                   Add 
                </Button>
            }
            </div>
            </div>
       </div>
    )
}
export default Device;

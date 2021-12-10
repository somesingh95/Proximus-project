import { Button } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DeviceForm from '../../components/deviceForm';
import Header from '../../components/header';
import QRCode from "react-qr-code";
import './index.css'

const DeviceView = ({ }) => {

    const { state } = useLocation();
    let navigate = useNavigate();


    const [deviceName, setDeviceName] = useState('');
    const [platform, setPlatform] = useState('')
    const [ownerName, setCurrentOwner] = useState('')
    const [date, setDate] = useState(new Date())
    const [isActive, setIsActive] = useState(false)
    const [barcode, setBarcode] = useState(false)

    useEffect(() => {
        if (state) {

            setCurrentOwner(state?.owner)
            setDeviceName(state?.deviceName)
            setPlatform(state?.platform)
            setIsActive(state?.active)
            setDate(state?.purchaseDate)

            let barCodeData = {
                deviceName: state?.deviceName,
                deviceOwner: state?.owner,
                platform: state?.platform,
                isActive: state?.active
            }
            setBarcode(barCodeData)
        }
    }, [])

    const onBackPressed = () => {
        navigate('/');
    }
    const onUpdatePressed = () => {
        navigate("/addDevice", { replace: true, state: state })
    }

    return (
        <div className="formcontainer">
            <Header />
            <div className="qrcodeConatiner">
                <QRCode value={barcode} />
            </div>
            <div className="textfiledContainerView">
                <div className="viewText">
                    Device Name: {deviceName}
                </div>
                <div className="viewText">
                    Owner Name: {ownerName}
                </div>
                <div className="viewText">
                    Platform: {platform}
                </div>
                <div className="viewText">
                    isActive: {isActive ? "Active" : "InActive"}
                </div>
            </div>
            <div className="actionContainerView">
                <div className="buttonContainerView">
                    <Button style={{backgroundColor:'green'}} variant="contained" onClick={() => onBackPressed()}>
                        Cancel
                    </Button>
                    <Button style={{backgroundColor:'green'}} variant="contained" onClick={() => onUpdatePressed()}>
                        Update
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default DeviceView;

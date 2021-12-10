import { Button } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    useJsonToCsv
  } from 'react-json-csv';
  import { CSVReader } from 'react-papaparse'


import './index.css'
import { useDispatch, useSelector } from 'react-redux';
import { readString } from 'react-papaparse'
import { pushItemstoList } from '../../actions';



const filename = 'InventoryBackUp',
  fields = {
    "_id": "ID",
    "deviceName": "Name",
    "owner":"Owner",
    "platform":"Platform",
    "active":"isActive"
  };
 

const ActionContainer = ({}) => {
    let navigate = useNavigate();
    const inputFile = useRef(null);
    const dispatch = useDispatch();

    const deviceReducer = useSelector(state => state.deviceReducer);
    const { saveAsCsv } = useJsonToCsv();

    const onAddDevicePressed = () => {
        navigate("/addDevice",{replace:true})
    }
    const onExportPressed = () => {
        let data = deviceReducer?.deviceList;
        saveAsCsv({ data, fields, filename})
    }
    const onImportPressed = () => {
        inputFile?.current?.click()
        // navigate("/addDevice",{replace:true})
    }

   const  onChangeFile = (event) => {
        event.stopPropagation();
        event.preventDefault();
        var file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            const text = e.target.result;
            readString(text, {
                worker: true,
                complete: (results) => {
                  if(results?.data){
                      let deviceList= [];
                    results?.data?.map((device,idx) => {
                        if(idx !== 0){                      //skipping for header Row
                                let innerDevice = {
                                    _id:device[0],
                                    deviceName:device[1],
                                    owner:device[2],
                                    platform:device[3],
                                    active:device[4] === "true" ? true : false,
                                    
                                }
                                deviceList.push(innerDevice);
                        }
                    })
                    dispatch(pushItemstoList({ json: deviceList }));
                  }
                }
              })
        }
        reader.onerror = function() {
            console.log(reader.error);
          };
        reader.readAsText(file);
   }
    
    return (
        <div className="actionContainerMain">
            <div className="buttonContainer">
                <Button style={{backgroundColor:'green'}} variant="contained" onClick={() => onExportPressed()}>
                    Export
                </Button>
                <input id="myInput" ref={inputFile} style={{display: 'none'}} type="file" onChange={(event) => onChangeFile(event)}/>
                <Button style={{backgroundColor:'green'}} variant="contained" onClick={() => onImportPressed()}>
                    Import
                </Button>
                <Button style={{backgroundColor:'green'}} variant="contained" onClick={() => onAddDevicePressed()}>
                    Add
                </Button>
            </div>
        </div>
    )
}
export default ActionContainer;

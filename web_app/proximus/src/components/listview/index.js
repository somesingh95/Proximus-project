import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import DeviceItem from '../deviceItem';
import EmptyState from '../emptyState';
import './index.css'

const ListView = ({}) => {

    const deviceReducer = useSelector(state => state.deviceReducer);
const [deviceList,SetDeviceLIst]=useState([]);
    useEffect(() => {
        SetDeviceLIst(deviceReducer?.deviceList)
    }, [deviceReducer])
    return (
        <div className="headerContainer">
              {
                    deviceReducer?.searchFilter !== ''
                        ?
                        deviceReducer?.filterList?.map((device, idx) => {
                            return (
                                <DeviceItem device={device}  key={idx + "_"} />
                            )
                        })
                        :
                        deviceList?.length  > 0
                        ?
                        deviceList?.map((device, idx) => {
                            return (
                                <DeviceItem device={device}  key={idx + "_"} />
                            )
                        })
                        :
                        <EmptyState/>
                    }
        </div>
    )
}
export default ListView;

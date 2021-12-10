import React from 'react';
import emptyIcon from '../../assets/image/noData.png'
import { Link } from "react-router-dom";

const EmptyState = ({
    
}) => {
    return (
   <div>
        <img src={emptyIcon} alt="logo" />
        <div>
        <div>
        Oops! no devices found.
           </div>
           <div>
           No problem you can add here <Link to="/addDevice">here</Link> .
           </div>
           </div>
   </div>
);
}

export default EmptyState;

import React from 'react';
import Button from './Button';

const Record = ({ records  }) => {
    return ( 
        <>
        <p>Records</p>
        <p>Artist: {records.artistName}</p>
        <p>Album: {records.albumName}</p>
        <p>Price: £{records.albumCost}</p>
        <Button />
    
        </>
     );
}
 
export default Record;
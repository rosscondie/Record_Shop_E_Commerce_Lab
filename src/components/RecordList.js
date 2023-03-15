import React from 'react';
import Record from './Record';

const RecordList = ({ records }) => {
    const recordNodes = records.map((record) => {
        return <Record key={record.id} records={record} />
    })
    return (  
        <>
        {recordNodes}
        </>
    );
}
 
export default RecordList;
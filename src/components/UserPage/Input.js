import React from 'react';

const Input = ({searchRep, ...props}) => {
    return (
        <div>
            <input placeholder={props.placeholder} onChange={searchRep} type="text"/>
        </div>
    )
}

export default Input
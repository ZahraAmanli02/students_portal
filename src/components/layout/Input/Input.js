import React from 'react';

const input = (props) => {
    return ( 
        <input
            type={props.type}
            placeholder={props.placeholder}
            name={props.name}
            className="form-control"
            value={props.value}
            onChange={props.onChange}
        />
     );
}
 
export default input;
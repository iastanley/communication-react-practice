import React from 'react';

// Update this component
export default function NumberInput(props) {
    return (
        <div className="form-group">
            <label htmlFor={props.id}>{props.label}</label>
            <input type="number" id={props.id} min={props.min} max={props.max}
            value={props.value}
            onChange={props.onChange}/>
        </div>
    );
}

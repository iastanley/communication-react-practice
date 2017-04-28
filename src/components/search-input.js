import React from 'react';

export default function SearchInput(props) {
    return <input type="search" name="Search" placeholder="Dale Cooper" onChange={(e)=> props.onChange(e.target.value)}/>;
}

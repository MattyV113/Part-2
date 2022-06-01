import React from "react";

const Filter = ({filter, onChange}) => {

        return (
            <div>
            Search by Name: <input value={filter} placeholder="Search here"
            onChange={onChange}/>
            </div>
        )
    }

export default Filter
import React from "react";

const Filter = ({filter, onChange}) => {

    return (
        <div>
          Find Countries: <input value={filter} onChange={onChange} />
        </div>
      )
    }

export default Filter
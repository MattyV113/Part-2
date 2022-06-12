import React from "react";

const Filter = ({filter, onChange}) => {

    return (
        <div>
          Find People: <input value={filter} onChange={onChange} />
        </div>
      )
    }

export default Filter
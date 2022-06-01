import React from "react";

const PersonForm = ({onSubmit,persons,number }) => {
    return(
<form onSubmit={onSubmit}>
        <div>
          name: <input value={persons.value} placeholder="Name"
          onChange={persons.onChange} 
          />
          <br />
          number: <input value={number.value} placeholder="Phone Number"
          onChange={number.onChange} />
        </div>
        <div>
          <button type="submit" onClick={persons.onClick}>add</button>
        </div>
      </form>
    )
}


export default PersonForm

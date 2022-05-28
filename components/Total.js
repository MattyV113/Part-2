import React from "react";



const Total = ({parts}) => {
	const sum = parts.reduce(
    (s,p) =>  s + p.exercises, 0);
  return (
    <div>
      <p><strong>sum of exercises: {sum} </strong></p>
    </div>
  )
  }

export default Total

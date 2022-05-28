import React from 'react'
import Part from './Part';

const Content = ({parts}) => {
	const lists = parts.map(function(part) {
		return (
			<div key={part.id}>
				<p> {part.name}: {part.exercises}</p>
			</div>
		)
	})
	return lists
};

export default Content

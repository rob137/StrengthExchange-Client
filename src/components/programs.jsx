import React from 'react';
import { Link } from 'react-router-dom';
import './programs.css';

export default function Programs(props) {
	const listContents = props.programs.map((program, index) => {
		const editProgramEndpoint = `dashboard/${program.name}/edit-program`;
		return (
			<Link key={index} to={editProgramEndpoint}>
					<li key={index}>
					<span key={index} className="program-link vertical-center">{program.name}</span>
				</li>
			</Link>
		)
	}) 
	return (
		<ul>
			{listContents}
		</ul >
	)
}

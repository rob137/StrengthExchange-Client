import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './programs.css';

export default function Programs(props) {
	const listContents = props.programs.map((program, index) => {
		return (
			<Link key={index} to="/dashboard/edit-program/jumbo body">
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

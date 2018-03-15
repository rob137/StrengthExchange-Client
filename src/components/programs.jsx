import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './programs.css';

export default function Programs() {
	return (
		<ul>
			<Link to="/dashboard/edit-program/jumbo body">
				<li>
						<a className="program-link vertical-center">Jumbo Body</a>
				</li>
			</Link>	
			<li><a className="program-link vertical-center">Sort-of Toned</a></li>
			<li><a className="program-link vertical-center">Spherical Powerlifter</a></li>
			<li><a className="program-link vertical-center">Big Arms For Christmas</a></li>
			<li><a className="program-link vertical-center">Home Gym Mayhem</a></li>
			<li><a className="program-link vertical-center">Gymnast in a Week</a></li>
			<li><a className="program-link vertical-center">Press Your Car</a></li>
		</ul>
	)
}

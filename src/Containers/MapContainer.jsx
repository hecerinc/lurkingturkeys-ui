// MapContainer.js

import React from 'react';
import './Map.css';

const mapboxgl = process.env.MAPBOXAPIKEY;

export default class MapContainer extends React.Component {

	render() {
		return (
			<div>
				<h1>Map Container</h1>
			</div>
		)
	}
}


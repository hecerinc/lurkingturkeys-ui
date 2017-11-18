// MapContainer.js

import React from 'react';
import '../App.css';
import '../Map.css';
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = process.env.REACT_APP_MAPBOXAPIKEY;

export default class MapContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			lat: 23.2199952,
			lng: -102.1720662,
			zoom: 6,
			layers: ['Mines', 'Polluted water sources', 'Dams', 'Poverty', 'Indigenous communities', 'Landfills', 'PM2.5', 'Power plants'] // power plants includes refineries
		};
	}
	componentDidMount() {
		const { lng, lat, zoom } = this.state;
		const map = new mapboxgl.Map({
		    container: 'map',
		    style: 'mapbox://styles/mapbox/streets-v10',
		    center: [lng, lat],
		    zoom
		});
	}
	render() {
		return (
			<section className="MapContainer">
				<div className="container cf">
					<div className="left">
						<div id="map"></div>
					</div>
					<div className="sidebar">
						<section>
							<h2>Data layers</h2>
							<div className="row layers">
								{this.state.layers.map(layer => (
									<label>
										<input type="checkbox" />
										{layer}
									</label>
								))}
							</div>
							<hr/>
						</section>
						<section>
							<a href="#" className="btn" id="newreport">+ File report</a>
						</section>
					</div>
				</div>
			</section>
		)
	}
}


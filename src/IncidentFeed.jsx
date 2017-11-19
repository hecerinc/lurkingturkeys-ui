// IncidentFeed.jsx

import React from 'react';
import request from 'request';
import ReportListItem from './ReportListItem';
import './ReportListItem.css';


const sheetURL = "https://sheets.googleapis.com/v4/spreadsheets/1Pr5SJ-EBbWDoQeVKcMuxeKMuX25ZTdKIWppGrkVDgPw/values/Sheet1!A1:J7";
const sheetKEY = process.env.REACT_APP_SHEETSAPIKEY;

export default class IncidentFeed extends React.Component {
	constructor() {
		super();
		this.state = {
			reports: []
		};
	}
	componentDidMount() {
		// Get the data from the URL

		request({
			uri: sheetURL,
			qs: {
				key: sheetKEY
			}
		}, (error, response, body) => {

			let res = JSON.parse(body)['values'];
			this.setState({reports: res});
		});
	}
	render() {
		return (
			<section className="IncidentFeed">
				<h2>Incident Feed</h2>
				<div className="ReportsContainer">
					<ul className="ReportsList">
						{this.state.reports.map((report, index) => {
							if(index === 0)
								return <li key={index}></li>;
							return (<ReportListItem key={'report-'+index} data={report} />)
						})}
					</ul>
				</div>
				<a href="#" className="btn download downloaddata">Download Report</a>
				<a href="#" className="btn download downloadpdf">Download Data</a>
				
				<a href="#" className="seemorelink">View all</a>
				<hr/>
			</section>
		);
	}
}


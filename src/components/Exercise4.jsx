import Axios from "axios";
import React, { Component } from "react";

export default class Exercise4 extends Component {
	state = {
		data: [],
	};

	fetchData = () => {
		Axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
			this.setState({ data: res.data });
		});
	};

	renderTable = () => {
		return this.state.data.map((value, index) => {
			return (
				<tr>
					<td>{index + 1}</td>
					<td>{value.name}</td>
					<td>{value.username}</td>
					<td>{value.email}</td>
					<td>Edit</td>
					<td>Delete</td>
				</tr>
			);
		});
	};

	componentDidMount() {
		this.fetchData();
	}

	render() {
		return (
			<div className="d-flex flex-row mt-5">
				<div className="card" style={{ width: "40vw" }}>
					<img
						className="card-img-top"
						src={require("../Assets/exercise 4.png")}
						alt="Card image cap"
					/>
					<div className="card-body">
						<p className="card-text">
							Create a users table with design and feature as same as possible
							like following example (use data from this{" "}
							<a href="https://jsonplaceholder.typicode.com/users">link</a> with
							fetch API)
						</p>
					</div>
				</div>
				<div className="container mx-3 my-3 px-3 py-3">
					<h1 className="fetch-title">Fetch API From JSON Placeholder</h1>
					<table>
						<thead>
							<th>ID</th>
							<th>Name</th>
							<th>Username</th>
							<th>Email</th>
							<th colSpan={2}>Action</th>
						</thead>
						<tbody>{this.renderTable()}</tbody>
					</table>
				</div>
			</div>
		);
	}
}

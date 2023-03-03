import Axios from "axios";
import React, { Component } from "react";

export default class Exercise4 extends Component {
	state = {
		originalData: [],
		data: [],
		toFilter: NaN,

		editName: "",
		editUsername: "",
		editEmail: "",
	};

	fetchData = () => {
		Axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
			this.setState({ data: res.data, originalData: [...res.data] });
		});
	};

	deleteDataHandler = id => {
		const removed = this.state.data.filter(val => val.id !== id);
		this.setState({ data: [...removed] });
	};

	editDataHandlerButton = index => {
		this.setState({ toFilter: index });
	};

	editDataHandler = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	saveEditHandler = (index, id) => {
		const beforeEdit = this.state.data.at(index);

		this.state.data.splice(index, 1, {
			...beforeEdit,
			id: id,
			name: this.state.editName,
			username: this.state.editUsername,
			email: this.state.editEmail,
		});

		this.setState({ toFilter: NaN });
	};

	cancelEditHandler = () => {
		this.setState({ toFilter: NaN });
	};

	renderDatas = () => {
		return this.state.originalData.map(value => {
			return <li className="list-group-item">{JSON.stringify(value)}</li>;
		});
	};

	renderTable = () => {
		return this.state.data.map((value, index) => {
			if (index !== this.state.toFilter) {
				return (
					<tr>
						<td>{value.id}</td>
						<td>{value.name}</td>
						<td>{value.username}</td>
						<td>{value.email}</td>
						<td>
							<button
								onClick={() => this.editDataHandlerButton(index)}
								style={{ border: "transparent", backgroundColor: "white" }}
							>
								Edit
							</button>
							<button
								onClick={() => this.deleteDataHandler(value.id)}
								style={{ border: "transparent", backgroundColor: "white" }}
							>
								Delete
							</button>
						</td>
					</tr>
				);
			} else {
				return (
					<tr>
						<td>{value.id}</td>
						<td>
							<input
								placeholder={`Was: ${value.name}`}
								onChange={e => this.editDataHandler(e)}
								name="editName"
								type={"text"}
							></input>
						</td>
						<td>
							<input
								placeholder={`Was: ${value.username}`}
								onChange={e => this.editDataHandler(e)}
								name="editUsername"
								type={"text"}
							></input>
						</td>
						<td>
							<input
								placeholder={`Was: ${value.email}`}
								onChange={e => this.editDataHandler(e)}
								name="editEmail"
								type={"email"}
							></input>
						</td>
						<td>
							<button
								onClick={e => this.saveEditHandler(e, value.id)}
								style={{ border: "transparent", backgroundColor: "white" }}
							>
								Save
							</button>
							<button
								onClick={this.cancelEditHandler}
								style={{ border: "transparent", backgroundColor: "white" }}
							>
								Cancel
							</button>
						</td>
					</tr>
				);
			}
		});
	};

	componentDidMount() {
		this.fetchData();
	}

	render() {
		return (
			<>
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
								<a href="https://jsonplaceholder.typicode.com/users">link</a>{" "}
								with fetch API)
							</p>
						</div>
					</div>
					<div className="container mx-3 my-3 px-3 py-3 d-flex flex-column align-items-center">
						<h2 className="fetch-title mb-4">
							Fetch API From JSON Placeholder
						</h2>
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
				<ul className="list-group mt-5">
					<b className="mb-2">Fetched API Data(s):</b>
					{this.renderDatas()}
				</ul>
			</>
		);
	}
}

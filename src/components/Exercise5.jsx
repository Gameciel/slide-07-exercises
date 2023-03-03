import React, { Component } from "react";
import { Link, Routes, Route } from "react-router-dom";
import List from "./List";

export default class Exercise5 extends Component {
	state = {
		listQty: 1,
		formData: {},
	};

	increaseFormHandler = () => {
		this.setState({ listQty: this.state.listQty + 1 });
	};

	decreaseFormHandler = () => {
		delete this.state.formData[this.state.listQty];
		if (this.state.listQty > 1) {
			this.setState({ listQty: this.state.listQty - 1 });
		}
	};

	inputHandler = (event, id) => {
		this.setState({
			formData: { ...this.state.formData, [id]: event.target.value },
		});
	};

	renderForm = () => {
		const form = [];

		for (let i = 0; i < this.state.listQty; i++) {
			form.push(i + 1);
		}

		return form.map(val => {
			return (
				<form>
					<div className="form-group">
						<label htmlFor={`formGroupInput${val}`}>List {val}</label>
						<input
							onChange={e => this.inputHandler(e, val)}
							type="text"
							className="form-control"
							id={`formGroupInput${val}`}
							placeholder="Isi sesuatu"
						/>
					</div>
				</form>
			);
		});
	};

	render() {
		return (
			<div className="d-flex flex-row mt-5">
				<div className="card" style={{ width: "50vw" }}>
					<img
						className="card-img-top"
						src={require("../Assets/exercise 1.png")}
						alt="Card image cap"
					/>
					<div className="card-body">
						<p className="card-text">
							Create a application with requirement: 1. At endpoint default
							(“/”) we can write some text 2. When we clicked the send button,
							we will redirect to endpoint (”/list”) and show the text With
							design as same as possible like following example
						</p>
					</div>
				</div>
				<div className="container mx-3 my-3 px-3 py-3 d-flex flex-column align-self-start">
					{this.renderForm()}
					<div className="d-flex">
						<button
							disabled={this.state.listQty === 1}
							onClick={this.decreaseFormHandler}
							className="btn btn-danger mr-3"
						>
							{" "}
							-{" "}
						</button>
						<button
							onClick={this.increaseFormHandler}
							className="btn btn-success mr-auto"
						>
							{" "}
							+{" "}
						</button>

						<button className="btn btn-primary">
							<Link
								to="/list"
								state={this.state.formData}
								style={{ color: "white" }}
							>
								Submit
							</Link>
						</button>
					</div>
				</div>
			</div>
		);
	}
}

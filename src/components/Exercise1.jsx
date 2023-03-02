import React, { Component } from "react";

export default class Exercise1 extends Component {
	state = {
		counter: 0,
	};

	incrementCounter = () => {
		this.setState({ counter: this.state.counter + 1 });
	};

	decrementCounter = () => {
		this.setState({ counter: this.state.counter - 1 });
	};

	resetCounter = () => {
		this.setState({ counter: 0 });
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
							Create a counter application with design and feature as same as
							possible like following example
						</p>
					</div>
				</div>
				<div className="container mx-3 my-3 px-3 py-3 d-flex flex-column justify-content-center align-items-center">
					<ul class="list-group mb-5">
						<li class="list-group-item d-flex justify-content-between align-items-center">
							Total count:
							<span class="ml-2 badge badge-primary badge-pill">
								{this.state.counter}
							</span>
						</li>
					</ul>
					<div>
						<button onClick={this.decrementCounter} className="btn btn-danger">
							{" "}
							-{" "}
						</button>
						<button
							onClick={this.resetCounter}
							className="btn btn-warning ml-3 mr-3"
						>
							{" "}
							Reset{" "}
						</button>
						<button onClick={this.incrementCounter} className="btn btn-success">
							{" "}
							+{" "}
						</button>
					</div>
				</div>
			</div>
		);
	}
}

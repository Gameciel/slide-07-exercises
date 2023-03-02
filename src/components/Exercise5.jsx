import React, { Component } from "react";

export default class Exercise5 extends Component {
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
				<div
					className="container mx-3 my-3 px-3 py-3"
					style={{ backgroundColor: "#000000" }}
				></div>
			</div>
		);
	}
}

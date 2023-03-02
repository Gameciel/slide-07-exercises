import React, { Component } from "react";
import Exercises from "./Exercises";

export default class Main extends Component {
	state = {
		location: 0,
	};

	stateLocationHandler = target => {
		this.setState({ location: target });
	};

	renderNav = () => {
		const navMenus = [
			"Exercise 1",
			"Exercise 2",
			"Exercise 3",
			"Exercise 4",
			"Exercise 5",
		];

		return navMenus.map((value, index) => {
			if (this.state.location === index) {
				return (
					<li className="breadcrumb-item active" aria-current="page">
						{value}
					</li>
				);
			} else {
				return (
					<li className="breadcrumb-item">
						<a
							onClick={() => this.stateLocationHandler(index)}
							href={`#${index + 1}`}
						>
							{value}
						</a>
					</li>
				);
			}
		});
	};

	render() {
		return (
			<div className="container mt-5">
				<nav aria-label="breadcrumb">
					<ol className="breadcrumb justify-content-center">
						{this.renderNav()}
					</ol>
				</nav>
				<Exercises of={this.state.location} />
			</div>
		);
	}
}

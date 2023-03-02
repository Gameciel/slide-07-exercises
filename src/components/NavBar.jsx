import React, { Component } from "react";

export default class NavBar extends Component {
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
			<div className="container">
				<nav aria-label="breadcrumb">
					<ol class="breadcrumb justify-content-center">{this.renderNav()}</ol>
				</nav>
			</div>
		);
	}
}

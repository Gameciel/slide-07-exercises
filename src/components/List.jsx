import React, { Component } from "react";

export default class List extends Component {
	componentDidMount() {
		console.log(this.state);
	}
	render() {
		return <div className="container"></div>;
	}
}

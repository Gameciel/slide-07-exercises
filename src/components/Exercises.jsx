import React, { Component } from "react";
import Exercise1 from "./Exercise1";
import Exercise2 from "./Exercise2";
import Exercise3 from "./Exercise3";
import Exercise4 from "./Exercise4";
import Exercise5 from "./Exercise5";

export default class Exercises extends Component {
	renderExercise = () => {
		switch (this.props.of) {
			case 0:
				return <Exercise1 />;
			case 1:
				return <Exercise2 />;
			case 2:
				return <Exercise3 />;
			case 3:
				return <Exercise4 />;
			case 4:
				return <Exercise5 />;
		}
	};

	render() {
		return <>{this.renderExercise()}</>;
	}
}

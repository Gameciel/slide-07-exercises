import React, { Component } from "react";

export default class Exercise2 extends Component {
	state = {
		ongoing: false,
		mm: 0,
		ss: 0,
	};

	startButtonHandler = () => {
		if (!this.state.ongoing) {
			this.setState({ ongoing: true });
			this.myInterval = setInterval(() => {
				if (this.state.ss !== 59) {
					this.setState({ ss: this.state.ss + 1 });
				} else {
					this.setState({ mm: this.state.mm + 1, ss: 0 });
				}
			}, 1000);
		}
	};

	stopButtonHandler = () => {
		if (this.state.ongoing) {
			this.setState({ ongoing: false });
			clearInterval(this.myInterval);
		}
	};

	resetButtonHandler = () => {
		this.setState({ mm: 0, ss: 0 });
	};

	render() {
		return (
			<div className="d-flex flex-row mt-5">
				<div className="card" style={{ width: "50vw" }}>
					<img
						className="card-img-top"
						src={require("../Assets/exercise 2.png")}
						alt="Card image cap"
					/>
					<div className="card-body">
						<p className="card-text">
							Create a stopwatch application with design and feature as same as
							possible like following example
						</p>
					</div>
				</div>
				<div className="container mx-3 my-3 px-3 py-3">
					<div className="stopwatch-container">
						{this.state.ss < 10 ? (
							<p className="timer">
								0{this.state.mm}:0{this.state.ss}
							</p>
						) : (
							<p className="timer">
								0{this.state.mm}:{this.state.ss}
							</p>
						)}
						<div className="timer-buttons">
							<button
								onClick={this.startButtonHandler}
								className="start-button"
							>
								Start
							</button>
							<button onClick={this.stopButtonHandler} className="stop-button">
								Stop
							</button>
							<button
								onClick={this.resetButtonHandler}
								className="reset-button"
							>
								Reset
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

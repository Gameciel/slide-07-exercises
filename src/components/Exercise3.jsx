import React, { Component } from "react";

export default class Exercise3 extends Component {
	state = {
		input: "",
		tags: [
			"Banana",
			"Apple",
			"Orange",
			"Mango",
			"Pineapple",
			"Watermelon",
			"Strawberry",
			"Perssimon",
		],
		filtered: [],
	};

	componentDidMount() {
		this.setState({ filtered: [...this.state.tags] });
	}

	renderTags = () => {
		return this.state.filtered.map(value => {
			return <button className="tagButton">{value}</button>;
		});
	};

	addTag = () => {
		this.setState({ tags: [...this.state.tags, this.state.input] });
		this.setState({ input: "" });
	};

	formHandler = input => {
		this.setState({ input });

		const filteredData = this.state.tags.filter(value => {
			return value.toLowerCase().includes(input.toLowerCase());
		});

		this.setState({ filtered: [...filteredData] });
	};

	handleKeyDown = event => {
		if (event.key === "Enter") {
			this.addTag();
		}
	};

	render() {
		return (
			<div className="d-flex flex-row mt-5">
				<div className="card " style={{ width: "50vw" }}>
					<img
						className="card-img-top"
						src={require("../Assets/exercise 3.png")}
						alt="Card image cap"
					/>
					<div className="card-body">
						<p className="card-text">
							Create a filter application with design and feature as same as
							possible like following example
						</p>
					</div>
				</div>
				<div
					className="container mx-3 my-3 px-3 py-3 d-flex flex-column align-items-center"
					style={{
						backgroundImage:
							"linear-gradient(to bottom right, #fdc555, #fe1225, #a02cb1)",
						width: "45vw",
					}}
				>
					<div>
						<label
							className="pr-2"
							style={{ fontFamily: "serif", fontSize: "20px" }}
							htmlFor="tag"
						>
							Search:
						</label>
						<input
							onChange={e => this.formHandler(e.target.value)}
							onKeyDown={e => this.handleKeyDown(e)}
							value={this.state.input}
							style={{ borderRadius: "3px", border: "1px solid black" }}
							type={"text"}
							id="tag"
							placeholder="Try typing 'Apple'"
						></input>
					</div>
					{this.renderTags()}
				</div>
			</div>
		);
	}
}

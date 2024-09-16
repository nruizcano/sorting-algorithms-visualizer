import React from "react";
import { getInsertionSortAnimations } from "../sortingAlgorithms/insertionSort";
import { getBubbleSortAnimations } from "../sortingAlgorithms/bubbleSort";
import { getQuickSortAnimations } from "../sortingAlgorithms/quickSort";
import { getMergeSortAnimations } from "../sortingAlgorithms/mergeSort";
import { getHeapSortAnimations } from "../sortingAlgorithms/heapSort";
import "./AlgorithmsVisualizer.css";

const ARRAY_SIZE = 100;
const ACCENT_COLOR_1 = "#ff3b3b";
const ACCENT_COLOR_2 = "#f5d442";
const SWAPPING_COLOR = "#cb82ff";
const VISITED_COLOR = "#63b2f2"

export default class AlgorithmsVisualizer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			array: [],
			animationSpeed: 250
		};
	}

	componentDidMount() {
		this.resetArray();
	}

	resetArray() {
		if (this.state.disableButtons) return;
		const array = [];
		for (let i = 0; i < ARRAY_SIZE; i++) {
			array.push(randomIntFromInterval(10, 700));
		}
		this.setState({ array });

		const arrayBars = document.getElementsByClassName("array-bar");
		for (let i = 0; i < arrayBars.length; i++) {
			const bar = arrayBars[i]?.style;
			bar.backgroundColor = "var(--bar-color)";
		}
	}

	handleSpeedSlider = (event) => {
		this.setState({ animationSpeed: event.target.value });
	}


	showInsertionSort() {
		const animations = getInsertionSortAnimations(this.state.array);
		const { animationSpeed } = this.state;

		const arrayBars = document.getElementsByClassName("array-bar");

		for (let i = 0; i < animations.length; i++) {
			const [barOneIdx, barTwoIdx, type] = animations[i];
			const barOneStyle = arrayBars[barOneIdx]?.style;
			const barTwoStyle = arrayBars[barTwoIdx]?.style;

			switch (type) {
				case "selected":
					setTimeout(() => {
						barOneStyle.backgroundColor = ACCENT_COLOR_1;
						barTwoStyle.backgroundColor = SWAPPING_COLOR;
					}, i * animationSpeed);
					break;
				case "swapped":
					setTimeout(() => {
						barOneStyle.backgroundColor = SWAPPING_COLOR;
						barTwoStyle.backgroundColor = ACCENT_COLOR_1;
						const barOneHeight = barOneStyle.height;
						barOneStyle.height = barTwoStyle.height;
						barTwoStyle.height = barOneHeight;
					}, i * animationSpeed);
					break;
				case "visited":
					setTimeout(() => {
						barOneStyle.backgroundColor = VISITED_COLOR;
						barTwoStyle.backgroundColor = VISITED_COLOR;
					}, i * animationSpeed);
					break;
				default:
					break;
			}
		}
	}

	showBubbleSort() {
		const animations = getBubbleSortAnimations(this.state.array);
		const { animationSpeed } = this.state;

		const arrayBars = document.getElementsByClassName("array-bar");

		for (let i = 0; i < animations.length; i++) {
			const [barOneIdx, barTwoIdx, type] = animations[i];
			const barOneStyle = arrayBars[barOneIdx]?.style;
			const barTwoStyle = arrayBars[barTwoIdx]?.style;

			switch (type) {
				case "selected":
					setTimeout(() => {
						barOneStyle.backgroundColor = ACCENT_COLOR_1;
						barTwoStyle.backgroundColor = ACCENT_COLOR_1;
					}, i * animationSpeed);
					break;
				case "swapped":
					setTimeout(() => {
						barOneStyle.backgroundColor = SWAPPING_COLOR;
						barTwoStyle.backgroundColor = SWAPPING_COLOR;
						const barOneHeight = barOneStyle.height;
						barOneStyle.height = barTwoStyle.height;
						barTwoStyle.height = barOneHeight;
					}, i * animationSpeed);
					break;
				case "visited":
					setTimeout(() => {
						barOneStyle.backgroundColor = VISITED_COLOR;
						barTwoStyle.backgroundColor = VISITED_COLOR;
					}, i * animationSpeed);
					break;
				default:
					break;
			}
		}
	}

	showQuickSort() {
		const animations = getQuickSortAnimations(this.state.array);
		const { animationSpeed } = this.state;

		const arrayBars = document.getElementsByClassName("array-bar");

		for (let i = 0; i < animations.length; i++) {
			const [barOneIdx, barTwoIdx, type] = animations[i];
			const barOneStyle = arrayBars[barOneIdx]?.style;
			const barTwoStyle = arrayBars[barTwoIdx]?.style;

			switch (type) {
				case "pivot":
					setTimeout(() => {
						barOneStyle.backgroundColor = ACCENT_COLOR_2;
					}, i * animationSpeed);
					break;
				case "selected":
					setTimeout(() => {
						barOneStyle.backgroundColor = ACCENT_COLOR_1;
						barTwoStyle.backgroundColor = ACCENT_COLOR_1;
					}, i * animationSpeed);
					break;
				case "swapped":
					setTimeout(() => {
						barOneStyle.backgroundColor = SWAPPING_COLOR;
						barTwoStyle.backgroundColor = SWAPPING_COLOR;
						const barOneHeight = barOneStyle.height;
						barOneStyle.height = barTwoStyle.height;
						barTwoStyle.height = barOneHeight;
					}, i * animationSpeed);
					break;
				case "visited":
					setTimeout(() => {
						barOneStyle.backgroundColor = VISITED_COLOR;
						barTwoStyle.backgroundColor = VISITED_COLOR;
					}, i * animationSpeed);
					break;
				default:
					break;
			}
		}
	}

	showMergeSort() {
		const animations = getMergeSortAnimations(this.state.array);
		const { animationSpeed } = this.state;

		const arrayBars = document.getElementsByClassName("array-bar");

		for (let i = 0; i < animations.length; i++) {
			const [barOneIdx, barTwoIdx, type] = animations[i];
			const barOneStyle = arrayBars[barOneIdx]?.style;

			switch (type) {
				case "selected":
					setTimeout(() => {
						barOneStyle.height = `${barTwoIdx}px`;
						barOneStyle.backgroundColor = ACCENT_COLOR_1;
					}, i * animationSpeed);
					break;
				case "visited":
					setTimeout(() => {
						barOneStyle.backgroundColor = VISITED_COLOR;
					}, i * animationSpeed);
					break;
				default:
					break;
			}
		}
	}

	showHeapSort() {
		const animations = getHeapSortAnimations(this.state.array);
		const { animationSpeed } = this.state;
	
		const arrayBars = document.getElementsByClassName("array-bar");
	
		for (let i = 0; i < animations.length; i++) {
			const [barOneIdx, barTwoIdx, type] = animations[i];
			const barOneStyle = arrayBars[barOneIdx]?.style;
			const barTwoStyle = arrayBars[barTwoIdx]?.style;
	
			switch (type) {
				case "selected":
					setTimeout(() => {
						barOneStyle.backgroundColor = ACCENT_COLOR_1;
						barTwoStyle.backgroundColor = ACCENT_COLOR_1;
						const barOneHeight = barOneStyle.height;
						barOneStyle.height = barTwoStyle.height;
						barTwoStyle.height = barOneHeight;
					}, i * animationSpeed);
					break;
				case "visited":
					setTimeout(() => {
						barOneStyle.backgroundColor = VISITED_COLOR;
						barTwoStyle.backgroundColor = VISITED_COLOR;
					}, i * animationSpeed);
					break;
				default:
					break;
			}
		}
	}
	
	render() {
		const { array, animationSpeed } = this.state;

		return (
			<div>
				<div className="buttons">
					<label>Speed: {animationSpeed} ms</label>
					<input
						type="range"
						min="1"
						max="500"
						value={animationSpeed}
						onChange={this.handleSpeedSlider}
					/>

					<button onClick={() => this.resetArray()}><b>New Array</b></button>
					<button onClick={() => this.showInsertionSort()}>Insertion Sort</button>
					<button onClick={() => this.showBubbleSort()}>Bubble Sort</button>
					<button onClick={() => this.showQuickSort()}>Quick Sort</button>
					<button onClick={() => this.showMergeSort()}>Merge Sort</button>
					<button onClick={() => this.showHeapSort()}>Heap Sort</button>
				</div>
				<div className="array-container">
					{array.map((value, idx) => (
						<div
							className="array-bar"
							key={idx}
							style={{
								height: `${value}px`
							}}></div>
					))}
				</div>
			</div>
		)
	}
}

function randomIntFromInterval(min, max) {
	// min and max included
	return Math.floor(Math.random() * (max - min + 1) + min);
}
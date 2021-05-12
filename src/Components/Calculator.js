import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import Calc from './Calc-comps/Calc';
import Screen from './Calc-comps/Screen';

export default class componentName extends Component {
	state = { currentCalculation: 0 };
	calculate = (equation) => {
		const calc = equation.split(/(•|÷|-|\+)/).map((c) => parseInt(c) || c);
		for (let i = 0; i < calc.length; i++) {
			if (calc[i] === '•') {
				calc[i + 1] = calc[i - 1] * calc[i + 1];
				calc[i - 1] = null;
				calc[i] = null;
			} else if (calc[i] === '÷') {
				calc[i + 1] = calc[i - 1] / calc[i + 1];
				calc[i - 1] = null;
				calc[i] = null;
			}
		}
		const calc2 = calc.reduce((a, c, i, arr) => {
			if (typeof arr[i - 1] === 'string') return a;
			if (c === '-') {
				return a - arr[i + 1];
			} else if (c === '+') {
				return arr[i + 1] + a;
			} else {
				return a + c;
			}
		}, 0);
		this.setState({ currentCalculation: calc2 });
	};

	render() {
		return (
			<Grid
				sm="10"
				md="8"
				lg="6"
				xl="4"
				direction="column"
				justify="center"
				alignItems="flex-start"
				item
				className="main-cont"
				container
			>
				<Screen
					calculate={this.calculate}
					currentCalculation={this.state.currentCalculation}
				/>
				<Calc />
			</Grid>
		);
	}
}

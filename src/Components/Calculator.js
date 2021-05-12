import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import Calc from './Calc-comps/Calc';
import Screen from './Calc-comps/Screen';

export default class componentName extends Component {
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
				<Screen />
				<Calc />
			</Grid>
		);
	}
}

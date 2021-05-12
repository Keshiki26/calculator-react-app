import { Grid, Typography } from '@material-ui/core';
import React from 'react';

function Result(props) {
	return (
		<Grid item container>
			<Grid item container xs="8">
				<Typography className="helvetica-neue-font ">Equation</Typography>
			</Grid>
			<Grid item container xs="4" justify="flex-end">
				<Typography className="helvetica-neue-font ">
					{props.currentCalculation}
				</Typography>
			</Grid>
		</Grid>
	);
}

export default Result;

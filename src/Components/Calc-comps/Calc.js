import { Grid, Typography } from '@material-ui/core';
import React from 'react';

function calc() {
	return (
		<Grid
			item
			container
			className="calc-cont"
			direction="column"
			alignItems="center"
			// style={{ background: 'red' }}
		>
			<Grid container xs="10" item>
				<Grid
					item
					container
					className="calc-row-each"
					// style={{ background: 'green' }}
				>
					<Grid
						item
						xs="3"
						justify="center"
						container
						alignItems="center"
						className="calc-each-button-cont"
					>
						<Typography className="calc-button-text helvetica-neue-font">
							7
						</Typography>
					</Grid>
					<Grid
						item
						xs="3"
						justify="center"
						container
						alignItems="center"
						className="calc-each-button-cont"
					>
						<Typography className="calc-button-text helvetica-neue-font">
							8
						</Typography>
					</Grid>
					<Grid
						item
						xs="3"
						justify="center"
						container
						alignItems="center"
						className="calc-each-button-cont"
					>
						<Typography className="calc-button-text helvetica-neue-font">
							9
						</Typography>
					</Grid>
					<Grid
						item
						xs="3"
						justify="center"
						container
						alignItems="center"
						className="calc-each-button-cont"
					>
						<Typography className="calc-button-text helvetica-neue-font">
							÷
						</Typography>
					</Grid>
				</Grid>
				<Grid item container className="calc-row-each">
					<Grid
						item
						xs="3"
						justify="center"
						container
						alignItems="center"
						className="calc-each-button-cont"
					>
						<Typography className="calc-button-text helvetica-neue-font">
							4
						</Typography>
					</Grid>
					<Grid
						item
						xs="3"
						justify="center"
						container
						alignItems="center"
						className="calc-each-button-cont"
					>
						<Typography className="calc-button-text helvetica-neue-font">
							5
						</Typography>
					</Grid>
					<Grid
						item
						xs="3"
						justify="center"
						container
						alignItems="center"
						className="calc-each-button-cont"
					>
						<Typography className="calc-button-text helvetica-neue-font">
							6
						</Typography>
					</Grid>
					<Grid
						item
						xs="3"
						justify="center"
						container
						alignItems="center"
						className="calc-each-button-cont"
					>
						<Typography className="calc-button-text helvetica-neue-font">
							×
						</Typography>
					</Grid>
				</Grid>
				<Grid item container className="calc-row-each">
					<Grid
						item
						xs="3"
						justify="center"
						container
						alignItems="center"
						className="calc-each-button-cont"
					>
						<Typography className="calc-button-text helvetica-neue-font">
							1
						</Typography>
					</Grid>
					<Grid
						item
						xs="3"
						justify="center"
						container
						alignItems="center"
						className="calc-each-button-cont"
					>
						<Typography className="calc-button-text helvetica-neue-font">
							2
						</Typography>
					</Grid>
					<Grid
						item
						xs="3"
						justify="center"
						container
						alignItems="center"
						className="calc-each-button-cont"
					>
						<Typography className="calc-button-text helvetica-neue-font">
							3
						</Typography>
					</Grid>
					<Grid
						item
						xs="3"
						justify="center"
						container
						alignItems="center"
						className="calc-each-button-cont"
					>
						<Typography className="calc-button-text helvetica-neue-font">
							-
						</Typography>
					</Grid>
				</Grid>
				<Grid item container className="calc-row-each">
					<Grid
						item
						xs="3"
						justify="center"
						container
						alignItems="center"
						className="calc-each-button-cont"
					>
						<Typography className="calc-button-text helvetica-neue-font">
							0
						</Typography>
					</Grid>
					<Grid
						item
						xs="3"
						justify="center"
						container
						alignItems="center"
						className="calc-each-button-cont"
					>
						<Typography className="calc-button-text helvetica-neue-font">
							.
						</Typography>
					</Grid>
					<Grid
						item
						xs="3"
						justify="center"
						container
						alignItems="center"
						className="calc-each-button-cont"
					>
						<Typography className="calc-button-text helvetica-neue-font">
							=
						</Typography>
					</Grid>
					<Grid
						item
						xs="3"
						justify="center"
						container
						alignItems="center"
						className="calc-each-button-cont"
					>
						<Typography className="calc-button-text helvetica-neue-font">
							+
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default calc;

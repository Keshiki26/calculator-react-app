import { Grid, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import Result from './Result';

function Screen(props) {
	const [calculation, setCalculation] = useState('');

	const checkKeys = (term) => {
		return term
			.split('')
			.map((c, i) => {
				if (c === '*') return '•';
				if (c === '/') return '÷';
				return c;
			})
			.join('');
	};

	const finalCheck = (term) => {
		const checkRegex = /^([•÷0-9+-])+$/;
		console.log(checkRegex.test(term), term);
		return checkRegex.test(term);
	};

	return (
		<Grid
			item
			container
			className="screen-cont"
			justify="center"
			alignItems="flex-end"
			// style={{ background: 'orange' }}
		>
			<Grid item xs="10">
				<Result currentCalculation={props.currentCalculation} />
				<form
					noValidate
					onSubmit={(e) => {
						e.preventDefault();
						if (calculation !== '') {
							props.calculate(calculation);
						}
					}}
					className="form-screen"
				>
					<TextField
						id="outlined-basic"
						color="secondary"
						autoFocus="true"
						autoComplete="off"
						required="true"
						helperText=""
						variant="outlined"
						fullWidth="true"
						value={calculation}
						onChange={(e) => {
							let term = checkKeys(e.target.value);
							if (finalCheck(term)) setCalculation(term);
							if (term.length < 1) setCalculation('');
							props.calculate(term);
						}}
						size="large"
						// InputProps={{
						// 	startAdornment: (
						// 		<InputAdornment position="start" disablePointerEvents="true">
						// 			<CreateIcon color="secondary" />
						// 		</InputAdornment>
						// 	),
						// }}
					></TextField>
				</form>
			</Grid>
		</Grid>
	);
}

export default Screen;

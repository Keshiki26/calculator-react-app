import { Grid, TextField } from '@material-ui/core';
import React, { useState } from 'react';

function Screen() {
	const [calculation, setCalculation] = useState('');
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
				<form noValidate onSubmit={(e) => {}} className="form-screen">
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
							setCalculation(e.target.value);
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

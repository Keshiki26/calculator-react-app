import { Grid, InputAdornment, TextField } from '@material-ui/core';
import React from 'react';
import Result from './Result';

function Screen(props) {
	//form for input and result
	return (
		<Grid
			item
			container
			className="screen-cont"
			justify="center"
			alignContent="flex-end"
		>
			{/* Display history results */}
			<Grid item container xs={10} className="history-cont">
				<Result
					currentCalculation={props.currentCalculation}
					history={props.history}
				/>
			</Grid>

			{/* Display current form input (for calculation)  */}
			<Grid item xs={10} className="current-result-cont">
				<form
					noValidate
					onSubmit={(e) => {
						e.preventDefault();
						if (props.term !== '') {
							props.submit();
						}
					}}
					className="form-screen"
				>
					<TextField
						inputRef={(t) => {
							if (t !== null) props.focus(t);
						}}
						id="outlined-basic"
						color="secondary"
						autoFocus={true}
						autoComplete="off"
						required={true}
						helperText=""
						variant="outlined"
						fullWidth={true}
						value={props.term}
						onChange={(e) => {
							props.changeInput(e.target.value);
						}}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end" disablePointerEvents={true}>
									{!isNaN(props.currentCalculation) && props.currentCalculation}
								</InputAdornment>
							),
						}}
					></TextField>
				</form>
			</Grid>
		</Grid>
	);
}

export default Screen;

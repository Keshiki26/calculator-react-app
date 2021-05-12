import { Grid } from '@material-ui/core';
import './App.css';
import Calculator from './Components/Calculator';

function App() {
	return (
		<Grid container style={{ height: '100vh' }} justify="space-around">
			<Calculator />
		</Grid>
	);
}

export default App;

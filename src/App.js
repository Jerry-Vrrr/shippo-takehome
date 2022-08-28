import './App.css';
import { postData, getData  } from './apiCalls';
import {useState, useEffect} from 'react'
import CreateShipment from './CreateShipment';
import Login from './Login';
import Header from './Header';
import Retrieve from './Retrieve';

function App() {
	const [loggedIn, setLoggedIn] = useState(false)
	const [user, setUser] = useState('')
	const [password, setPassword] = useState(null)
	const [display, setDisplay] = useState(null)
	const [shipment, setShipment] = useState(null)
	const [rates, setRates] = useState(null)
	const [showRates, setShowRates] = useState(false)	
	
	useEffect(() => {
		getData('shipments/83bcec1e1f0c4ad8bf3e5e7c6f49b713', password).then(response => setDisplay(response))
	}, [password])

	const createShipment = () => {
		postData(password).then(response => setShipment(response))
	}
	display && console.log(display)
  return (
    <div className="App">
		<Header user={user} loggedIn={loggedIn}/>
		{!loggedIn && <Login
			user={user}
			setUser={setUser}
			password={password}
			setPassword={setPassword}
			setLoggedIn={setLoggedIn}
		/>}
		{loggedIn && <CreateShipment 
		shipment={shipment}
		setShipment={setShipment}
		rates={rates}
		setRates={setRates}
		display={display}
		showRates={showRates}
		setShowRates={setShowRates}
		createShipment={createShipment}
		password={password}
		/>}
		{loggedIn && <Retrieve password={password} setShipment={setShipment}/>}
    </div>
  );
}
export default App;

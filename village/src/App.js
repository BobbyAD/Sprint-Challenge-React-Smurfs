import React, { Component } from 'react';
import axios from 'axios';
import {Route, NavLink} from 'react-router-dom';

import './App.scss';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			smurfs: [],
		};
	}
	// add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
	// Notice what your map function is looping over and returning inside of Smurfs.
	// You'll need to make sure you have the right properties on state and pass them down to props.

	componentDidMount() {
		axios
			.get('http://localhost:3333/smurfs')
			.then(res => {
				console.log(res)
				this.setState({ smurfs: res.data })
			})
			.catch(err => {
				console.log(err)
			})
	}

	addSmurf = newSmurf => {
		axios
			.post(`http://localhost:3333/smurfs`, newSmurf)
			.then(res => {
				console.log(res)
				this.setState({
					smurfs: res.data
				})
			})
			.catch(err => {
				console.log(err)
			})
	}

	deleteSmurf = deleteMe => {
		axios
			.delete(`http://localhost:3333/smurfs/${deleteMe}`)
			.then(res => {
				console.log(res)
				this.setState({
					smurfs: res.data
				})
			})
			.catch(err => {
				console.log(err)
			})
	}

	render() {
		return (
			<div className="App">
				<div className="nav">
					<NavLink exact to="/" activeClassName="active-nav">Smurfs</NavLink>
					<NavLink to="/smurf-form" activeClassName="active-nav">Add Smurf</NavLink>
				</div>
				<Route exact path="/" render={() => <Smurfs
					smurfs={this.state.smurfs}
					deleteSmurf={this.deleteSmurf}
				/>} />
				<Route path="/smurf-form" render={() => <SmurfForm
					addSmurf={this.addSmurf}
				/>} />
			</div>
		);
	}
}

export default App;

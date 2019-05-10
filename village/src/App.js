import React, { Component } from 'react';
import axios from 'axios';
import {Route, NavLink} from 'react-router-dom';

import './App.scss';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			smurfs: [],
			activeSmurf: {}
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
					smurfs: res.data,
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
					smurfs: res.data,
				})
			})
			.catch(err => {
				console.log(err)
			})
	}

	setSmurf = smurf => {
		this.setState({
			activeSmurf: smurf
		})
	}

	render() {
		return (
			<div className="App">
				<div className="nav">
					<NavLink exact to="/" activeClassName="active-nav">Smurfs</NavLink>
					<NavLink exact to="/smurf-form" activeClassName="active-nav">Add Smurf</NavLink>
				</div>
				<Route exact path="/" render={() => <Smurfs
					smurfs={this.state.smurfs}
					deleteSmurf={this.deleteSmurf}
					setSmurf={this.setSmurf}
				/>} />
				<Route path="/smurf-form" render={() => <SmurfForm
					addSmurf={this.addSmurf}
				/>} />
				<Route exact path="/smurf/:id" render={props => <Smurf
					{...props}
					name={this.state.activeSmurf.name}
					id={this.state.activeSmurf.id}
					age={this.state.activeSmurf.age}
					height={this.state.activeSmurf.height}
					deleteSmurf={this.deleteSmurf}
				/>} />
			</div>
		);
	}
}

export default App;

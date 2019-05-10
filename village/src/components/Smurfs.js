import React, { Component } from 'react';
import './styles/Smurfs.scss'

import Smurf from './Smurf';
import {Link} from 'react-router-dom';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Link to={`/smurf/${smurf.id}`}>
                <Smurf
                  setSmurf={this.props.setSmurf}
                  smurf={smurf}
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                  deleteSmurf={this.props.deleteSmurf}
                />
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;

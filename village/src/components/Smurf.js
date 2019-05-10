import React from 'react';
import {Link} from 'react-router-dom';
import './styles/Smurf.scss';

const Smurf = props => {
  function deleteSmurf() {
    props.deleteSmurf(props.id)
  }
  function setSmurf() {
    props.setSmurf(props.smurf)
  }
  return (
    <div className="Smurf" onClick={setSmurf}>
      <Link exact to="/">
        <div className="delete-button">
          <button onClick={deleteSmurf}>X</button>
        </div>
      </Link>
      <div className="smurf-stats">
        <h3>{props.name}</h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>
      </div>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;


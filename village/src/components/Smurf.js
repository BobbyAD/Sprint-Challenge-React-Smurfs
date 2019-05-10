import React from 'react';
import './styles/Smurf.scss';

const Smurf = props => {
  function deleteSmurf() {
    props.deleteSmurf(props.id)
  }
  return (
    <div className="Smurf">
      <div className="delete-button">
        <button onClick={deleteSmurf}>X</button>
      </div>
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


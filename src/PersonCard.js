import React from 'react';

const PersonCard = ({ firstName, lastName, age, hairColor }) => {
  return (
    <div style={cardStyle}>
      <h2>{firstName} {lastName}</h2>
      <p>Age: {age}</p>
      <p>Hair Color: {hairColor}</p>
    </div>
  );
};

const cardStyle = {
  border: '1px solid #ccc',
  padding: '20px',
  margin: '10px',
  borderRadius: '5px',
  width: '200px',
  textAlign: 'center',
};

export default PersonCard;

import React from 'react';
import PersonCard from './PersonCard';

function App() {
  return (
    <div className="App" style={appStyle}>
      <PersonCard firstName="Doe" lastName="Jane" age={45} hairColor="Black" />
      <PersonCard firstName="Smith" lastName="John" age={88} hairColor="Brown" />
      <PersonCard firstName="Fillmore" lastName="Millard" age={50} hairColor="Brown" />
      <PersonCard firstName="Smith" lastName="Maria" age={62} hairColor="Brown" />
    </div>
  );
}

const appStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
};

export default App;

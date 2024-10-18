import React from 'react';
import PersonCard from './PersonCard';

function App() {
  return (
    <div className="App" style={appStyle}>
      <PersonCard firstName="John" lastName="Doe" age={30} hairColor="Brown" />
      <PersonCard firstName="Jane" lastName="Smith" age={25} hairColor="Blonde" />
      <PersonCard firstName="Mark" lastName="Jones" age={40} hairColor="Black" />
      <PersonCard firstName="Emily" lastName="Davis" age={35} hairColor="Red" />
    </div>
  );
}

const appStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
};

export default App;

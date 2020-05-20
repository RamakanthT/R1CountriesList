import React from 'react';
import './App.scss';
import './resources/styles/general.scss';

// import textView from './resources/views/textView';
//import ClickCounter from './resources/components/ClickCounter';

import Countries from './resources/components/Countries/Countries';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      {/* {textView('Ramakanth')} */}
      {/* <ClickCounter /> */}
      
      <Countries />
      

      </header>
    </div>
  );
}

export default App;

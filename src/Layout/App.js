import React from 'react';
import './App.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Blogs & News</h1>
      </header>

      <nav>
      <a href="/Home">Home</a>
        <a href="/About">About</a>
        <a href="/Action">Action</a>
        {/* Add more categories as needed */}
      </nav>
 </div>
  );
}

export default App;
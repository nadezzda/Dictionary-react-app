import React from 'react';
import Search from "./Search";
import './App.css';


function App() {
  return (
    <div className="App">
<header>
  <h1>Dictionary</h1>
</header>
    <Search defaultKeyword="dictionary" />
<footer>
  <p>Coded by Malichenko Nadiia, and is <a href='https://github.com/nadezzda/Dictionary-react-app' title='GitHub repository' target="_blank" rel="noreferrer">open-sourced</a></p>
</footer>
    </div>
  );
}

export default App;

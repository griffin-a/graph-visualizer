import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation.js';
import Home from './Home.js';
import Grid from './Grid.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="page-header">
          <h1>Graph Algorithm Visualizer</h1>
        </header>
        {/* The nav bar remains static because it isn't within the Switch component (doesn't depend on current route)*/}
        <Navigation />
        <div className="content">
          {/* The content enclosed here in the Switch depends on the route */}
          <Routes>
            {/* Set up each of the individual routes here */}
            {/* This is the route for home */}
            {/* This is the route syntax in version 6 of react-router-dom */}
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/grid" element={<Grid/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from "./Search";
import Footer from "./Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Search defaultCity="Trondheim" />
      </div>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RouterOutlet } from './routes';
import { Footer, Header } from './components';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <RouterOutlet />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

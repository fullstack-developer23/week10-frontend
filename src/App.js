import React from 'react';
import './App.css';
import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import LogOrSign from './components/LogOrSign';

function App() {
  console.log(process.env.REACT_APP_URL)
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <header>
      <Header loggedIn={loggedIn} />
      </header>

      <section className='loginsignup-container'>
      
      <LogOrSign setLoggedIn={setLoggedIn} />

      </section>

      <footer>
        <Footer loggedIn={loggedIn} />
      </footer>
    </div>
  );
}

export default App;

import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import {Login} from './components/Login'
import {SignUp} from './components/SignUp'

function App() {
  return (
    <div className="App">
      <header>
      <Header />
      </header>

      <section className='loginsignup-container'>
      
      <SignUp />
      <Login />

      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

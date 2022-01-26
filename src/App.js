import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './components/pages/Home';
import NewPatient from './components/pages/NewPatient'
import ListPatients from './components/pages/ListPatients'

import Navbar from './components/layout/Navbar';
import Container from './components/layout/Container';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
     
      <Router>

      <Navbar />

      
        <Container customClass="min-height">
          <Routes>
            <Route exact path="/" element={ < Home /> } />
            <Route exact path="/cadastro" element={ < NewPatient /> } />
            <Route exact path="/pacientes" element={ < ListPatients /> }/>   
          </Routes>
        </Container>   
      
      </Router>

      
    <Footer />
      
    </div>
  );
}

export default App;

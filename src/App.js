import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './components/pages/Home';
import NewPatient from './components/pages/NewPatient'
import ListPatients from './components/pages/ListPatients'
import Patient from './components/pages/Patient';

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
            <Route path="/cadastro" element={ < NewPatient /> } />
            <Route path="/pacientes" element={ < ListPatients /> }/>   
            <Route path="/paciente/:id" element={ < Patient /> }/>  
          </Routes>
        </Container>   
      
      </Router>

      
    <Footer />
      
    </div>
  );
}

export default App;

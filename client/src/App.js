// src/App.js
import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminScreen from './screen/AdminScreen';
import LoginScreen from './screen/LoginScreen';
import SocieteScreen from './screen/SocieteScreen';
import UserScreen from './screen/UserScreen';
import InterlocuteurScreen from './screen/InterlocuteurScreen';
import ActionScreen from './screen/ActionScreen';
import NavbarComponent from './components/navbar'; // Add this line
function App() {
  return (
    <Router>
      <NavbarComponent /> {/* Add this line */}
      <main className="py-3">
        <Container>
          <Routes>
            <Route path='/actions' element={<ActionScreen />} />
            <Route path='/interlocuteurs' element={<InterlocuteurScreen />} />
            <Route path='/admin' element={<AdminScreen />} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/' element={<SocieteScreen />} />
            <Route path='/users' element={<UserScreen />} />
          </Routes>
        </Container>
      </main>
    </Router>
  );
}

export default App;

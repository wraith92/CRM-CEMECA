
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 
import SocieteScreen from './screen/societeScreen';
import UserScreen from './screen/userScreen';

function App() {
  return (
    <Router>
  
      <main className="py-3">
        <Container>
          <Routes>
            <Route path='/' element={<SocieteScreen />} />
            <Route path='/users' element={<UserScreen />} />

   
   
          
          </Routes>
        </Container>
      </main>
    </Router>
  );
}

export default App;

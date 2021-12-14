import Navigation from './_shared/Navigation/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

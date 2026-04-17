import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import University from './pages/University';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/universities" element={<University />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

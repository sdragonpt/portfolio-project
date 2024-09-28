import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/NavBar';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Work from '../components/Work';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-900">
      <Router>
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;

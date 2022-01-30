import Navbar from './components/Navbar';
import Bottombar from './components/Bottombar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Other from './pages/other';
import Projects from './pages/projects';
import Resume from './pages/resume';

function App() {
  return (
    <div className="page-basic-body">
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/thoughts' element={<Other />}></Route>
            <Route path='/projects' element={<Projects />}></Route>
            <Route path='/resume' element={<Resume />}></Route>
        </Routes>
        <Bottombar />
    </div>
  );
}

export default App;

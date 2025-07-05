// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Browse from './pages/Browse';
import Details from './pages/Details';
import Streams from './pages/Streams';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container" style={{padding: 0, marginBottom: 0}}>
        <Navbar />
      </div>
      <main className="container" style={{minHeight: '70vh'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/streams" element={<Streams />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <div className="container" style={{padding: 0, marginBottom: 0}}>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

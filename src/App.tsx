import './App.css';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';

function App() {
  return (
    <>
      <Navbar />
      <Profile />
      <About />
      <Experience />
    </>
  );
}

export default App;

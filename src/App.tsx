import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
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
      <Contact />
    </>
  );
}

export default App;

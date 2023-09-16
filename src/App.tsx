import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
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
      <Footer />
    </>
  );
}

export default App;

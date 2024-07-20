
import './App.css';
import NavBar from './Navbar';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About';
import ImageSlider from './ImageSlider';

function App() {
  return (
    <>
       <NavBar />
       <ImageSlider />
      <Header />
      <About />
    </>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Services from './components/Services';
import About from './components/About';
import Map from './components/Map';
import Footer from './components/Footer';

const App = () => {

  return (
    <>
      <Navbar></Navbar>
      <Carousel></Carousel>
      <Services></Services>
      <About></About>
      <Map></Map>
      <Footer></Footer>
    </>
  );
};

export default App;
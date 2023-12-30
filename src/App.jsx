import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar/NavBar'
import FooterComponent from './components/Footer/FooterComponent';
import CheckPrice from './components/checkPrice/CheckPrice';
import Homepage from './components/HomePage/Homepage';

function App() {

  return (
    <>
      <NavBar />
      <Homepage/>
      <CheckPrice/>
      <FooterComponent/>
    </>
  )
}

export default App

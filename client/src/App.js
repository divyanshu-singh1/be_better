// import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import NavDrawer from './components/NavDrawer';
import Navbar from './components/layout/Navbar';
// import DemoForm from './components/DemoForm';
import { Container } from '@mui/material';
function App() {
  return (
      <>
        {/* <NavDrawer /> */}
        {/* <Container> */}

        <Navbar />
        {/* </Container> */}
        <Home />
      </>
  );
}

export default App;

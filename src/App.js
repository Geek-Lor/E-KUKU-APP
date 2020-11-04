/**Styling Import */
import './App.css';

/**Components Import */
import Navbar from './components/Navbar';
// import Home from './pages/Home';
import Market from './pages/Market'

function App() {
  return (
  <>
   <Navbar />
   {/* <Home /> */}
    <Market />
  </>
  );
}

export default App;

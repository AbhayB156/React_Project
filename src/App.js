// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import LiveTV from './LiveTV'

function App() {
  const img = "https://v3img.voot.com/resizeMedium,w_270,h_270/v3Storage/assets/mumbai%20logo-1675884471350.png?imformat=chrome";
  const link = "https://www.jiocinema.com/";
  return (
    <div className="App">
      <Navbar/>      
      <div className = "content">
        <h1>MATCHES</h1>
        <a href={link}>Watch Now</a>
        {/* <href>KKRvsRCB</href> */}
        <LiveTV/>        
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

function App() {
  var iconRotated = 0; 
  const Header = (
    <div className = "header">
      <h5 className='navIcon' id = "navIcon" onClick={() =>{
        if (iconRotated == 1){
          document.getElementById("navIcon").style.transform = "rotateZ(0deg)";
          iconRotated = 0; 
          document.getElementById("sideNav").style.left = "-11rem"; 
        }else{
          document.getElementById("navIcon").style.transform = "rotateZ(90deg)";
          iconRotated = 1; 
          document.getElementById("sideNav").style.left = "0rem"; 
        }
      }}>  &gt; </h5>
      <h1 className = "title">MPS</h1>

    </div>
  );

  const sideNav = (
    <div className = "sideNav" id = "sideNav">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Demo</li>
      </ul>
    </div>
  );

  const sect1 = (
    <div>
      <p>GPS is a global known tool, but what if we can brng it out of this atmosphere and into other worlds!
        This is exactly what MPS is aims to do, re-adapt GPS to other worlds. To start small, we picked the moon to start. 
        <br/>
        One small step for MPS, one huge leap for mankind! 
      </p>

     
    </div>
  )
  return (
    <div className="App">
    {Header}
    {sideNav}
    {sect1}
    <img src="./moon.png" height={250} width = {250}/>
    </div>
  );
}

export default App;

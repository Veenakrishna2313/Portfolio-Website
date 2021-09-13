import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Header from "./components/Header";
import Particles from "react-particles-js";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Particles className="particles-canvas"
      params={{
        particles:{
          number:{
            value:30, density:{
              enable:true, value_area:800
            }
          }, shape:{
            type:"star", stroke:{
              width:5, color:"#f9ab00"
            }
          }
        }
      }}/>
      <Navbar/>
      <Header/>
      <About/>
      
    </div>
  );
}

export default App;

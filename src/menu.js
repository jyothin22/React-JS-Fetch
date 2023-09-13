import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Equipment from './components/Equipment';
import Maintenance from './components/Maintenance';
import Sensor from './components/Sensor';
import Technician from './components/Technician';
function Menubar(){
    return(
      <BrowserRouter>
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to={"/"} >Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to={"/Equipment"}>Equipment</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to={"/Maintenance"}>Maintenance</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to={"/Sensor"}>Sensor</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to={"/Technician"}>Technician</Link>
      </li>
    </ul>
  </div>
            </nav>
            <Routes>
              <Route path="/" ></Route>
              <Route path="/Equipment" element={<Equipment/>}></Route>
              <Route path="/Maintenance" element={<Maintenance/>}></Route>
              <Route path="/Sensor" element={<Sensor/>}></Route>
              <Route path="/Technician" element={<Technician/>}></Route>
            </Routes>
        </div>
      </BrowserRouter>
    );
}
export default Menubar;
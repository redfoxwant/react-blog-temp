import Home from "./pages/home/Home.jsx";
import  Topbar from "./Components/topbar/Topbar.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Settings from "./pages/settings/Settings.jsx";
import Single from "./pages/single/Single.jsx";
import Write from "./pages/write/Write.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const user = false;

  return (

    <Router>
      <Topbar />
      
      <Routes>
        <Route path='/' element={<Home />}>   
        </Route>
        <Route path='/login' element={user ? <Home/> : <Login />}>      
        </Route>
        <Route path='/register' element={user ? <Home/> : <Register />}>     
        </Route>
        <Route path='/post/:postId' element={<Single />}>     
        </Route>
        <Route path='/settings' element={user ? <Settings /> : <Register />}>   
        </Route>
        <Route path='/write' element={user ? <Write /> : <Register />}>   
        </Route>
      </Routes>

      
    </Router>
  );
}

export default App;

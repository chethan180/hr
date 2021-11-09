import './App.css';
import 'antd/dist/antd.css';
import {BrowserRouter as Router ,Route ,Switch} from "react-router-dom";
import Login from './HodComponents/Login';
import Home from './HodComponents/Home';
import Homef from './Faccomp/Homef';
import Head from './HodComponents/Head';
import Navbar from './Faccomp/navibar';
import SignUp from './Faccomp/Auth/Auth';
// import Recipies from './Hrcomp/hrmain';
import Homeh from './Hrcomp/Homeh';

function App() {
  return (
    <Router>
      <main>
        {/* <Head/> */}
        <Navbar/>
        <Switch>
          <Route path = "/auth" exact component = {SignUp}/>
 
          <Route path = "/hod" exact component = {Home}/>
          <Route path = "/hod/form" exact component = {Home}/>
          <Route path = "/hod/default" exact component = {Home}/>
          <Route path = "/hod/leave" exact component = {Home}/>
          <Route path = "/hod/left" exact component = {Home}/>
          <Route path = "/hod/status" exact component = {Home}/>
          <Route path = "/hod/mix" exact component = {Home}/>

          <Route path = "/fac" exact component = {Homef}/>
          <Route path = "/fac/form" exact component = {Homef}/>
          <Route path = "/fac/default" exact component = {Homef}/>
          <Route path = "/fac/leave" exact component = {Homef}/>
          <Route path = "/fac/left" exact component = {Homef}/>
          <Route path = "/fac/status" exact component = {Homef}/>

          <Route path = "/hr" exact component = {Homeh}/>
          <Route path = "/hr/form" exact component = {Homeh}/>
          <Route path = "/hr/default" exact component = {Homeh}/>
          <Route path = "/hr/leave" exact component = {Homeh}/>
          <Route path = "/hr/left" exact component = {Homeh}/>
          <Route path = "/hr/status" exact component = {Homeh}/>




          <Route path = "/hr/hr" exact component= {Homeh}/>
        </Switch>
      </main>
    </Router>
  );
}

export default App;

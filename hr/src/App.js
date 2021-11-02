import './App.css';
import 'antd/dist/antd.css';
import {BrowserRouter as Router ,Route ,Switch} from "react-router-dom";
import Login from './HodComponents/Login';
import Home from './HodComponents/Home';
import Homef from './Faccomp/Homef';
import Head from './HodComponents/Head';
import Navbar from './Faccomp/navibar';
import SignUp from './Faccomp/Auth/Auth';

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
          <Route path = "/fac/form" exact component = {Home}/>
          <Route path = "/fac/default" exact component = {Home}/>
          <Route path = "/fac/leave" exact component = {Home}/>
          <Route path = "/fac/left" exact component = {Home}/>
          <Route path = "/fac/status" exact component = {Home}/>
        </Switch>
      </main>
    </Router>
  );
}

export default App;

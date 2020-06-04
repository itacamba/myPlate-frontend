import React from 'react';
import '../src/App.css';
import About from './pages/About';
import ChefsContainer from './pages/ChefsContainer';
import Cuisines from './pages/Cuisines';
import Home from './pages/Home';
import ProfileInner from './pages/ProfileInner';
import ProfileOuter from './pages/ProfileOuter';
import SignUpContainer from './pages/SignUpContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      user: null
    }
  }
  render(){
    return (
      <Router>
          <nav>
            <Link to="/">Home</Link><br></br>
            <Link to="/chefs">Find a Chef</Link><br></br>
            <Link to="/cuisines">Cuisines</Link><br></br>
            <Link to="/about">About</Link><br></br>
            <Link to="/login" >Log In</Link><br></br>
            <Link to="/profile">Profile</Link><br></br>

          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/chefs" component={ChefsContainer} />
            <Route exact path="/cuisines" component={Cuisines} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={SignUpContainer} />
            <Route exact path="/profile">
                {this.state.user? <ProfileInner/> : <Redirect to="/login"/>}
            </Route>
            <Route exact path="/profile/:id" component={ProfileOuter} />
          </Switch>
      </Router>
    );
  }
}

export default App;

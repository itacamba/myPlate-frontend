import React from 'react';
import '../src/App.css';
import Nav from './Nav'
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
  Redirect
} from "react-router-dom";

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      user: null,
      searchInp: "",
      chefs: []
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/chefs")
    .then(resp => resp.json())
    .then(data => {
        this.setState({
            chefs: data
        })
    })
}
//----- Search Feature ----//
handleOnChangeSearch = (e) => {
    this.setState({
        searchInp: e.target.value
    })
    this.filterSearch()
}

filterSearch = () => {
    let filtered = this.state.chefs.filter( chef => chef.name.toLowerCase().includes(this.state.searchInp.toLowerCase()))
    return filtered
}
//----- Search Feature ----//


  render(){
    return (
      <Router>
          {/* <nav className ="ui teal inverted menu">
            <Link className="item" to="/">Home</Link><br></br>
            <Link className="item" to="/chefs">Find a Chef</Link><br></br>
            <Link className="item" to="/cuisines">Cuisines</Link><br></br>
            <Link className="item" to="/about">About</Link><br></br>
            <Link className="item" to="/login" >Log In</Link><br></br>
            <Link className="item" to="/profile">Profile</Link><br></br>
          </nav> */}
          <Nav user={this.state.user}/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/chefs" render={
              () => {
                return (<ChefsContainer 
                  chefs={this.filterSearch()} 
                  handleOnChangeSearch={this.handleOnChangeSearch} 
                />)
              } 
            }/>
            <Route exact path="/cuisines" component={Cuisines} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={SignUpContainer} />
            <Route exact path="/profile">
                {this.state.user? <ProfileInner/> : <Redirect to="/login"/>}
            </Route>
            <Route exact path={"/chefs/:id"} render={
              (props) => {
                let id = props.match.params.id
                let chef = this.state.chefs.find( c => c.id == id)
                console.log("what is my chef: ", chef)
                return <ProfileOuter chef={chef}/>
              }
            }/>
          </Switch>
      </Router>
    );
  }
}

export default App;

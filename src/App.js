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
      user: {id: 8, name: "Lola", email: "lola@mail.com", password_digest: "pass", about: "I am a human being" },
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

//----- On Dish Click ----//
onDishClick = (dishId) => {
  console.log("I was clicked", dishId)
}

  render(){
    return (
      <Router >
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
                let chef = this.state.chefs.find( c => c.id === parseInt(id))
                console.log("what is my chef: ", chef)
                return <ProfileOuter chef={chef} user={this.state.user}/>
              }
            }/>
          </Switch>
      </Router>
    );
  }
}

export default App;

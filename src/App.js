import React from 'react';
import '../src/App.css';
import Nav from './Nav'
import HowItWorks from './pages/HowItWorks';
import FindAChef from './pages/FindAChef';
import Cuisines from './pages/Cuisines';
import Home from './pages/Home';
import ProfileInner from './pages/ProfileInner';
import ChefProfileOuter from './pages/ChefProfileOuter';
import SignUpContainer from './pages/SignUpContainer';
import ChefProfileInner from './pages/ChefProfileInner'
import Footer from './components/Footer'
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
      //user: {id:5, name: "Beza Sirak", email: "beza@mail.com", password_digest: "pass", about: "I make a killer Kitfo", is_chef: true,  img: "https://ca.slack-edge.com/T02MD9XTF-URUT7DR3P-ecbb7719005a-512",cover_img: "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"},
      user: {id: 1, name: "Lola", email: "lola@mail.com", password_digest: "pass", about: "I am a human being", is_chef: false,  img: "https://voxpopulii.in/system/static/dashboard/img/default_user.png", cover_img: "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"},
      //user: {id: 3, name: "Dave Molina", email: "dave@mail.com", password_digest: "pass", about: "I am a human being", is_chef: true,  img: "https://voxpopulii.in/system/static/dashboard/img/default_user.png", cover_img: "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"},
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
  console.log("dish was clicked", dishId)
}

  render(){
    return (
      <Router >
          <Nav user={this.state.user}/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/chefs" render={
              () => {
                return (<FindAChef 
                  chefs={this.filterSearch()} 
                  handleOnChangeSearch={this.handleOnChangeSearch} 
                />)
              } 
            }/>
            <Route exact path="/cuisines" component={Cuisines} />
            <Route exact path="/how-it-works" component={HowItWorks} />
            <Route exact path="/login" component={SignUpContainer} />
            <Route exact path="/profile">
                {this.state.user? 
                this.state.user.is_chef?  <ChefProfileInner user={this.state.user}/> : <ProfileInner user={this.state.user}/> 
                : <Redirect to="/login"/>}
            </Route>
            <Route exact path={"/chefs/:id"} render=
            {
              (props) => {
                let id = props.match.params.id
                let chef = this.state.chefs.find( c => c.id === parseInt(id))
                console.log("what is my chef: ", chef)
                return <ChefProfileOuter chef={chef} user={this.state.user}/>
              }
            }/>
          </Switch>
          <Footer/>
      </Router>
    );
  }
}

export default App;

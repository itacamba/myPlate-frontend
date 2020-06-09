import React,{Component} from 'react';
import CoverPhoto from '../components/CoverPhoto'
import ProfileRoundPhoto from '../components/ProfileRoundPhoto'
import UserNameAndPro from '../components/UserNameAndPro'
import SelectedDish from '../components/SelectedDish'
import AllDishes from '../components/AllDishes'
import FormDishQuote from '../components/FormDishQuote'

class ProfileOuter extends Component {
    constructor(){
        super()
        this.state = {
            selectedDish: null,
            getQuoteClicked: false
        }
    }

    onDishClick = (dish) => {
        this.setState({
            selectedDish: dish
        })
    }

    onGetQuoteClick = (id) => {
        console.log("clicked", id)
        this.setState({
            getQuoteClicked: !this.state.getQuoteClicked
        })
        
    }


    render() {
        let {chef} = this.props
        return chef? 
           
           <div class="ui grid container">
                <CoverPhoto img={chef.cover_img}/>
                <ProfileRoundPhoto img={chef.img}/>
                <UserNameAndPro name={chef.name}/>
                {this.state.selectedDish === null ?  null : <SelectedDish dish={this.state.selectedDish} onGetQuoteClick={this.onGetQuoteClick} isClicked={this.state.getQuoteClicked}/> }
                {this.state.getQuoteClicked ? <FormDishQuote dish={this.state.selectedDish} user={this.props.user} chefId={chef.id}  onGetQuoteClick={this.onGetQuoteClick} successMessage={this.successMessage}/> : null}
                <AllDishes dishes={chef.dishes} onDishClick={this.onDishClick}/>
                
            </div>




        : <div className="not-found">Sorry Chef not Found :(</div> 
    }
}

export default ProfileOuter;
import React, {Component} from 'react';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import Footer from './FooterComponent';

import {DISHES} from '../shared/dishes';
import DishDetail from './DishdetailComponent';

class Main extends Component{
  constructor(props){
    super(props);
    this.state ={
      dishes : DISHES,
      selectedDish : null
    };
  }
  onDishSelect(dishId){
    this.setState({selectedDish: dishId}) ;
    console.log(dishId)
}


  render(){
    return (
      <div >
      <Header></Header>
      <Menu   dishes = {this.state.dishes}
        onClick={(dishId)=>this.onDishSelect(dishId)}
      />
      <DishDetail   dish={this.state.dishes.filter((dish)=>dish.id=== this.state.selectedDish)[0]}></DishDetail>
      <Footer />
    </div>
    )
  }

}



export default Main;
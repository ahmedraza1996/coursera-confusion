import React, {Component} from 'react';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {DISHES} from '../shared/dishes';
import DishDetail from './DishdetailComponent';
import {Switch, Route, Redirect } from 'react-router-dom';
class Main extends Component{
  constructor(props){
    super(props);
    this.state ={
      dishes : DISHES,
      selectedDish : null
    };
  }
  



  render(){
    const HomePage=()=>{
      return (
        <Home />
      )
    }
    return (
      <div >
      <Header></Header>
        <Switch>
          <Route path ="/home" component ={HomePage} />
          <Route exact path ="/menu" component ={()=><Menu dishes= {this.state.dishes}/>} />
          <Redirect to ="/home" />
        </Switch>
      <Footer />
    </div>
    )
  }

}



export default Main;

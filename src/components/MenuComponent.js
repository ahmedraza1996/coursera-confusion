import React, {Component} from 'react';
import Dish from './DishdetailComponent';
import {Card, CardImg, CardImgOverlay,  CardTitle} from 'reactstrap';




class Menu extends Component{

    constructor(props){
        super(props);  //this is required for class components
        this.state ={selectedDish : null}
        console.log("constructor invoked!!!");
        }
        onDishSelect(dish){
            this.setState({selectedDish: dish}) ;
        }
        
      

    //class component also required render method
        componentDidMount(){
            console.log("did mount invoked!!!");
        }
    render(){
        console.log("render is invoked!!!");
        const menu=this.props.dishes.map((dish)=>{
            return (
               <div className ="col-12 col-md-5 m-1">
                   <Card key = {dish.id} onClick= {()=>this.onDishSelect(dish)}>
                       <CardImg width = "100%" src= {dish.image} alt = {dish.name} />
                       <CardImgOverlay >
                           <CardTitle>
                               {dish.name}
                           </CardTitle>
                       </CardImgOverlay>
                    
                   </Card>
               </div>
                )
            
        });
               
               
            
           
        return (
                <div className="container">
                    <div className="row">
                       {menu}
                    </div>
                   
                   <Dish dish = {this.state.selectedDish}></Dish>
                    {/* <div className = "col-12 col-md-5 m-1">
                        {this.renderDish(this.state.selectedDish)}
                    </div> */}
                </div>

        );
    }
}
export default Menu; 

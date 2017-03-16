import React, { Component,Proptypes } from 'react';
import List from './Listitems';
import SignUpForm from './SignUpForm';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state={
            item:[{
                name:'Mango',
                price:500,
                qty:1
            }],
            totalPrice:500,
        }
    }
    updateItemList(event){
        let obj={};
        if(event.which===13){
            obj={
                name:event.target.value.split("-")[0],
                price:parseInt(event.target.value.split("-")[1]),
                qty:1
            }
            let temp_total_cost=this.state.totalPrice;
            temp_total_cost+=obj.qty*obj.price;
            this.setState({
               item:[...this.state.item,obj],
                totalPrice:temp_total_cost
            });
            event.target.value='';
        }
    }
    calCulateTotalCost(){

        // temp+=
    }
    incrementItem(index){
        let temp=this.state.item[index];
        temp = Object.assign({},temp,{qty:temp.qty+1});
        let litem=Object.assign([],this.state.item,{[index]:temp});
        let temp_total_cost=this.state.totalPrice;
        temp_total_cost+=parseInt(temp.price);
        this.setState({
                item:litem,
                totalPrice:temp_total_cost,
        })
        this.calCulateTotalCost();
    }
    decrementItem(index){
        let temp=this.state.item[index];
        temp = Object.assign({},temp,{qty:temp.qty-1});
        let litem=Object.assign([],this.state.item,{[index]:temp});
        let temp_total_cost=this.state.totalPrice;
        temp_total_cost-=parseInt(temp.price);

        this.setState({
            item:litem,
            totalPrice:temp_total_cost
        })
    }
    removeItem(i){
        let temp_total_cost=this.state.totalPrice;
        temp_total_cost-=parseInt(this.state.item[i].price)*parseInt(this.state.item[i].qty);
        let litem=this.state.item;
        litem=this.state.item.filter((item,index)=>index!==i);
        this.setState({
            item:litem,
            totalPrice:temp_total_cost
        })
    }
  render() {

    return (
      <div className="App">
          <h1>My Cart</h1>
          <input type="text" onKeyPress={this.updateItemList.bind(this)}/>
          <List  items={this.state.item} incr={(index) => {this.incrementItem.bind(this)(index)}} decr={(index)=>{this.decrementItem.bind(this)(index)}} remove={(index)=>{this.removeItem.bind(this)(index)}}/>
          <div>Total Price: {this.state.totalPrice}</div>
          <SignUpForm />
      </div>
    );
  }
}
export default App;

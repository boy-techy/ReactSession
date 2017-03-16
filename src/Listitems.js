/**
 * Created by yatindra on 15/3/17.
 */
import React,{Component,PropTypes} from 'react';

export default class Listitems extends Component{


    render(){
        // let totalPrice=0;
        let itemList=this.props.items.map((item,i)=>{
            return(
                <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.qty}</td>
                    <td><input type="button"  onClick={() => {this.props.incr(i)}} value="+" /></td>
                    <td><input type="button" onClick={()=>this.props.decr(i)} value="-" /></td>
                    <td><input type="button" onClick={()=>this.props.remove(i)}   value="Delete" /></td>
                </tr>
            )
        });
        return(
        <table>
            <tbody>
            {itemList}
            </tbody>
        </table>
        )
    }
}
Listitems.propTypes={

    items:PropTypes.arrayOf(PropTypes.shape({name:PropTypes.string.isRequired})).isRequired
}
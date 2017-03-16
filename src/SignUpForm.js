/**
 * Created by yatindra on 16/3/17.
 */

import React,{Component} from 'react';

export default class SignUpForm extends Component{

    constructor(){
        super();
        this.state={
            username:'',
            password:'',
            re_password:'',
            message:'',
        }
    }
    handler(event){
       let state={};
       state[event.target.name]=event.target.value;
       this.setState(state)
    }
    signUpHandler(event){
        event.preventDefault()
        if(this.state.password===this.state.re_password){
            this.setState({
                message:"SignUp Successfully",
            });
        }
        else{

        }
    }
    render(){
        return(
            <div>
              <form onSubmit={this.signUpHandler.bind(this)}>
                  <input type="text" name="username" value={this.state.username} onChange={this.handler.bind(this)} />
                  <input type="text" name="password" value={this.state.password} onChange={this.handler.bind(this)} />
                  <input type="text" name="re_password" value={this.state.re_password} onChange={this.handler.bind(this)} />
                  <input type="submit" value="Signup"/>
              </form>
                <p>{this.state.message}</p>
            </div>
        );
    }
}

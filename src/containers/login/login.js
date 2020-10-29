import React from "react"


export default class Login extends React.Component {
    constructor(){
        super();
        this.state= {
            userName : "",
            password : ""

        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }
   
    handleOnChange(e) {
        const value = e.target.value;
        this.setState({ [e.target.name]: value });
      }

    render(){
    
        return(
            <div>
                <div>
                <label>User Name</label>
                <input type="text" name="userName" value={this.state.userName} onChange={this.handleOnChange}/>
                </div>
                <div>
                <label>Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleOnChange}/>
                </div>
                <div>
                <button onclick="">Login</button>
                </div>
            </div>
        )
    }
} 
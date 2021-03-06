import React from "react"


export default class Login extends React.Component {
    constructor(){
        super();
        this.state= {
            // userName : "",
            // password : ""
            //fields: {},
            //errors: {}
            username: {
                value : "",
                error :""
            },
            password: {
                value: "",
                error: ""
            },
            showloginDetails: false

        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
   
    handleOnChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        let error ="";

        switch(name){
            case "username" :
                  if (value.length < 1) {
                    error = "*Please enter your username.";
                  }
                  break;
            case "password":   
                  if (value.length < 1) { 
                    error ="*Please enter your password.";
                  } 
                 break;

             default :
                 break;
              }
       const fieldname = this.state[name]

       fieldname.value = value
       fieldname.error = error
        this.setState({
            fieldname: fieldname
        });
      }

      handleSubmit(e) {
        alert("Hiii");
        e.preventDefault();
        this.setState({showloginDetails : true})
        console.log(this.state);

      }    

    render(){
    
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <div>
                <label>User Name</label>
                <input type="text" name="username" value={this.state.username.value} onChange={this.handleOnChange}/>
                <div className="errorMsg">{this.state.username.error}</div>
                </div>
                <div>
                <label>Password</label>
                <input type="password" name="password" value={this.state.password.value} onChange={this.handleOnChange}/>
                <div className="errorMsg">{this.state.password.error}</div>
                </div>
                <div>
                <button type="submit">Login</button>
                
                </div>
                </form>
                {this.state.showloginDetails && 
                <p>{this.state.username.value}</p>
                }
            </div>
        )
    }
} 
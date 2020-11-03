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
            }

        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleClickEvent = this.handleClickEvent.bind(this);
    }
   
    handleOnChange(e) {
        //const value = e.target.value;
        //this.setState({ [e.target.name]: value });
        //let fields = this.state.fields;
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
        console.log(this.state);

      }

      handleClickEvent(e) {
        alert("hii");
        if (this.validateForm()) {
            let fields = {};
            fields["username"] = "";
            fields["password"] = "";
            this.setState({fields:fields});
            alert("Form submitted");
        }
      }

     

    render(){
    
        return(
            <div>
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
                <button onclick={this.handleClickEvent}>Login</button>
                </div>
            </div>
        )
    }
} 
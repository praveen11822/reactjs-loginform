import React from "react";
import ReactDOM from "react-dom/client";

class Login extends React.Component{
  render(){
    return (
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <form>
            <div class="form-group">
              <h1 style={{color:"red",textAlign:"center"}}>Login</h1>
              <label class="skills" for="Subject">Username</label>
              <input type="text" id="username" class="form-control"  required>
              </input>
            </div>
            <div>
              <label class="skills" for="Body">Password</label>
              <input type="password" id="pwd" required class="form-control"></input>
            </div><br/>
            <input type="submit" value="Login" id="navigation" class="btn btn-primary"></input>
          </form>
        </div>
      </div>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Login />);
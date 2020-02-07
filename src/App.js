import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import MainArea from './components/MainArea/MainArea';
import LogIn from './components/LogIn/LogIn';
import Reports from './components/Reports/Reports';
//import SignUp from './components/SignUp/SignUp';
import  './Server/Server';
import firebase from 'firebase/app';
import {Route,Switch} from 'react-router-dom';
import Items from './components/Items/Items';



class App extends Component {

  state={
    LogInStatus:false,
    SignUpStatus:null,
    email:'',
    password:'',
    userId:" "
  }

  logHandler=()=>{
    firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
    .then((cred)=>{
      this.setState({userId:cred.user.uid})
      return this.state.userId !== " " ?  this.setState({LogInStatus:true}) :  null
    })
    .catch(err=>{
      alert(err);
    })
  }
  signUpHandler=()=>{
    firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
    .then(cred =>{
      console.log(cred);
    });
  };
  emailHandler=(e)=>{
    this.setState({email:e.target.value});
  };
  passwordHandler=(e)=>{
    this.setState({password:e.target.value});
  };
  logOuthandler=(e)=>{
    firebase.auth().signOut().then(()=>{
      this.setState({userId:" "});
      this.setState({LogInStatus:false});
    });
  };

  enterPressHandler=(e)=>{
    if(e.key=== 'Enter' ){
    this.logHandler()
    }
    else return null;
  };

  render() {
    return (
      
      <div>
        {
        this.state.LogInStatus ?
         (<div>
          <Navbar logout={this.logOuthandler}/>
          <Switch>
          <Route path='/' exact component={MainArea}/>
          <Route path='/items' component={Items}/>
          <Route path='/reports' component={Reports}/>
          </Switch>
          </div>)
         :
          <LogIn 
          onsubmit={this.logHandler} 
          toSignUp={this.signUpHandler} 
          email={this.emailHandler}
          password={this.passwordHandler}
          onkeypress={this.enterPressHandler}
          /> 
         }
        
      </div>
      
    )
  }
}

export default App;

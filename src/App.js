import React, {Component} from 'react';
import NavBar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';


import axios from 'axios';
import './App.css';

class App extends Component{
  state = {
    users: [],
    loading: false,
    alert: null
  }
  
  //Data received from Search.js 
  //Search Github users
  searchUsers = async text => {
    this.setState({loading: true});

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
    ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({users: res.data.items, loading: false});
  }

  /*Method for this.clearUsers, sent up from Search.js Component*/
  //clear users from state
  clearUsers = () => this.setState({users: [], loading: false});

  //Set Alert
  setAlert = (msg, type) => {
    //since obj/value are the same {msg, type} will do
    //previously {alert: {msg: msg, type: type}
    this.setState({alert: {msg, type}});

    setTimeout(() => this.setState({alert: null}), 5000);
  }

  render(){
    //destructoring values from this.state to avoid coding "this.state.users"
    const {users, loading} = this.state;
    return (
      <div className="App">
        <NavBar />
        <div className='container'>
          <Alert alert={this.state.alert}/>
          <Search 
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}/>
          <Users loading={loading} users={users}/>
        </div>
        
      </div>
    );
  }  
}

export default App;

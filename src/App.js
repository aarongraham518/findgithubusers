import React, {Component} from 'react';
import NavBar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';
import './App.css';

class App extends Component{
  render(){

    return (
      <div className="App">
        <NavBar />
        <UserItem/>
      </div>
    );
  }  
}

export default App;

import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class Search extends Component {
    state = {
        text: ''
    };
    
    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.text === ''){
            this.props.setAlert('Please Enter something', 'light');
        }else{
            /*Send data up to App.js*/
            this.props.searchUsers(this.state.text);    
            this.setState({text: ''});
        }
    }    
    //setting the state of e.target.name which handles the form field names
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    /*send this, "this.props.clearUsers" <-- data up to App.js*/
    render() {

        //destructoring values from props to avoid this.props.something
        const {showClear, clearUsers} = this.props;
        return (
            <div>
                <form 
                onSubmit={this.onSubmit}
                className="form">
                    <input 
                        type="text"
                        name="text"
                        placeholder="Search Users..."
                        value={this.state.text}
                        onChange={this.onChange}
                    />

                    <input
                        type="submit"
                        value="Search"
                        className='btn btn-dark btn-block'
                    />
                </form>
                {showClear && (
                    <button
                    className="btn btn-light btn-block"
                    onClick={clearUsers}>
                    Clear
                    </button>
                )}
                
            </div>
        )
    }
}

export default Search

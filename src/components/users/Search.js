import React, { Component } from 'react'

export class Search extends Component {
    state = {
        text: ''
    };
    
    onSubmit = (e) => {
        e.preventDefault();
        console.log("hi there");
    }    
    //setting the state of e.target.name which handles the form field names
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
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
            </div>
        )
    }
}

export default Search

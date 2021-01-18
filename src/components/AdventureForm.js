import React, { Component } from 'react';
import { addAdventure } from '../actions/AdventuresActions';
import { withRouter } from "react-router";
import { connect } from 'react-redux'




class AdventureForm extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            image_url: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addAdventure(this.state);
        this.setState({
            name: "",
            image_url: ""
        })
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
            <h2>Add New Topic: </h2>
            
            <label>Topic's Name </label>
            <input name="name" required value={this.state.name} onChange={this.handleChange}
                />
                <br>
                </br>
            <br>
            </br>
            <label>Image</label>
            <textarea name="image_url" required value={this.state.image_url} onChange={this.handleChange} />
            <br></br>
            <button type="submit">Add Entry</button>
        </form>
        )
    }
}
const AdventureFormWithRouter = withRouter(AdventureForm)



export default connect(AdventureFormWithRouter, { addAdventure })(AdventureForm);
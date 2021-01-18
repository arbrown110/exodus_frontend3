import React from 'react'
import { Connect } from 'react-redux'
import Events from '../containers/Events'
import { deleteAdventure } from '../actions/AdventuresActions'

const AdventureShow = props => {
    //let adventure = props.adventure.filter(adventure => adventure.id == props.match.params.id)[0];

    const handleDelete = (e)=> {
        e.preventDefault()
        props.deleteAdventure(e.target.id)
    }

    const adventures = props.adventures.map(adventure, i) => {
        
        return (
            <div>
                <label>Topic's Name: </label>
                <li key={i}>
                    {adventure.name}
                    <br></br>
                    <label>Image: {adventure.image_url}</label>
                    <br></br>
                    <button id={adventure.id} onClick={handleClick}>Delete</button>
                </li>
               
            </div>
        })
        return (
            <div>
                {adventures}
            </div>
        )
    
}

export defualt Events
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const AdventuresList = props => {
    return (
        <div>
            <Link to='/adventures/new' role='button'>Add New Entry</Link>

            <h3>Recent entries</h3>
            {props.adventures.map(adventure =>
                <Link key={adventure.id} to={'/adventures/${adventure.id'}>
                    {adventure.name}
                    <br></br>
                    {adventure.image_url}

                </Link>
                )}
        </div>
    )
}

export default AdventuresList;

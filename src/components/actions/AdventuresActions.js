//action creator - function that reutnrs action ( action obj creator function)

export const fetchAdventures = () => {
    return dispatch => {
        dispatch({type: "FETCH_ADVENTURES"})
        fetch("adventures")
        .then(res => res.json())
        .then(adventures => dispatch({type: "ADVENTURES_LOADED", payload:adventures})) 
    }
}

export const addAdventure = (adventure) => {
    return dispatch => {
        dispatch({ type: "ADDING_ADVENTURE" })
        fetch("/adventure", {
            method: "POST",
            body: JSON.stringify(adventure),
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json'
            }
        })
        .then(res => res.json())
        .then(adventure => dispatch({ type: "ADVENTURE_ADDED", payload:adventure }))
    }
}

export const deleteAdventure = (id) => {
    return dispatch => {
        dispatch({ type: "DELETING_ADVENTURE" })
        fetch(`/adventures/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json'
            }
        })
        .then(() => dispatch({ type: "ADVENTURE_DELETED", payload: id }))
    }
}

//recieiving data ....Make use of async actions(rails api backend request) and redux-thunk middleware to send data to and receive data from a server.
/// will build form to send date
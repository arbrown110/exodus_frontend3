let newAdventure

export default function adventuresReducer(state = {adventures: [], loading: false}, action)  {

    switch(action.type) {
        case("FETCH_ADVENTURES"):
            return {...state, loading: true}
        case ("ADVENTURES_LOADED"):
            return { ...state, loading: false, adventures: action.payload }
        case ("ADDING_ADVENTURE"):
            return { ...state, loading: true }
        case ("ADVENTURE_ADDED"):
            return { ...state, loading: false, adventures: [...state.adventures, action.payload] }
        case ("DELETING_ADVENTURE"):
            return { ...state, loading: true }
        case ("ADVENTURE_DELETED"):
            return { ...state, 
                    loading: false, 
                    todos: state.adventures.filter(adventure => adventure.id !== action.payload) }
        
        
        case("FETCH_EVENTS"):
            return { ...state, events: action.payload.events }
        case ("LOADING_EVENTS"):
            return {...state, loading: true}

        case ("ADDING_EVENT"):
            newAdventure = {...action.payload.adventure, events: [...action.payload.adventure.events, action.payload.event]}
            return {...state,
              adventures: [...state.adventures.filter(adv => adv.id !== action.payload.adventure.id).concat(newAdventure)]}
        case ("DELETING_EVENT"):
            newAdventure =  {...action.payload.adventure, events: action.payload.adventure.events.filter(eve => eve.id !== action.payload.event.id)}
            return {...state,
              adventures: [...state.adventures.filter(adv => adv.id !== action.payload.adventure.id).concat(newAdventure)]}
        default:
            return state;
    }    
}
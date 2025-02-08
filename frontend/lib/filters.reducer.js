

const filterReducer = (state, action) => {

    if (action.type === 'FILTER_PRICE')
    {
        return {
            ...state,
            dataSort: action.payload.sortByPrice
        }
    }

    if (action.type === 'FILTER_NOTE')
    {
        return {
            ...state,
            dataSort: action.payload.sortByNote
        }
        
    }

    if (action.type === 'FILTER_HOUR')
    {
        return {
            ...state,
            datasorted: action.payload.datasorted
        }
    }

    return state



}

export default filterReducer;
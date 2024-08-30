
import { SET_BROKERS_API_JSON, SET_BROKERS_DATA, SET_BROKERS_SEARCH_JSON } from "../../action/brokers/brokers-action"

const initialState = {
    doc: null,
    apiJson: {},
    searchJson: { page: 1, limit: 10, search: {} },
    timestamp: Date.now()
}

const BrokersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BROKERS_DATA:
            return ({ ...state, doc: action.value, timestamp: Date.now() })
        case SET_BROKERS_API_JSON:
            return ({ ...state, apiJson: action.value, timestamp: Date.now() })
        case SET_BROKERS_SEARCH_JSON:
            return ({ ...state, searchJson: action.value, timestamp: Date.now() })
        default:
            return state;
    }
}

export default BrokersReducer;

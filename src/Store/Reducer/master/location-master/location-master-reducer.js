import { SET_LOCATION_MASTER_API_JSON, SET_LOCATION_MASTER_DATA, SET_LOCATION_MASTER_SEARCH_JSON } from "../../../Action/master/location-master/location-master-action"

const initialState = {
    doc: null,
    apiJson: {},
    searchJson: { page: 1, limit: 10, search: {} },
    timestamp: Date.now()
}

const LocationMasterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOCATION_MASTER_DATA:
            return ({ ...state, doc: action.value, timestamp: Date.now() })
        case SET_LOCATION_MASTER_API_JSON:
            return ({ ...state, apiJson: action.value, timestamp: Date.now() })
        case SET_LOCATION_MASTER_SEARCH_JSON:
            return ({ ...state, searchJson: action.value, timestamp: Date.now() })
        default:
            return state;
    }
}

export default LocationMasterReducer;

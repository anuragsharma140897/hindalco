import { SET_ROLES_AND_PERMISSION } from "../../Action/RolesAndPermission/RolesAndPermissionAction";

const initialState = {
    doc: [
        {
            "dashboard": {
                read: false, write: false, delete: false, 
                child: [
                    { "Ron": { read: false, write: false, delete: false } },
                    { "Se": { read: false, write: false, delete: false } },
                    { "Budings": { read: false, write: false, delete: false } },
                    { "Ze": { read: false, write: false, delete: false } },
                ]
            }
        },
        {
            "user management": {
                read: false, write: false, delete: false,
                child: [
                    { "Roln": { read: false, write: false, delete: false } },
                    { "Sie": { read: false, write: false, delete: false } },
                    { "Buldings": { read: false, write: false, delete: false } },
                    { "Zne": { read: false, write: false, delete: false } },
                ]
            }
        },
        {
            "Master": {
                read: false, write: false, delete: false,
                child: [
                    { "Role and Permission": { read: false, write: false, delete: false } },
                    { "Site": { read: false, write: false, delete: false } },
                    { "Buildings": { read: false, write: false, delete: false } },
                    { "Zone": { read: false, write: false, delete: false } },
                ]
            },
        },
    ],
    timestamp: Date.now()
}

const RolesAndPermissionReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_ROLES_AND_PERMISSION:
            return ({ ...state, doc: action.value, timestamp: Date.now() })
        default:
            return state;
    }
}

export default RolesAndPermissionReducer;
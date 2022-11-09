const defaultState = {
    ohusers:
    {
        emailAddress: "vinod@gmail.com",
        firstName: "vinod",
        lastName: "saggam",
        memberId: "7892079201",
        mobileNumber: "7892079201"
    },
    drDetails: {}
}

export const ohuserReducer = (state = defaultState, action) => {

    switch (action.type) {
        case 'SAVE_OHUSER':
            return {
                ...state,
                ohusers: action.payload
            }

        case 'GET_OHUSER':
            return {
                ...state,
                ohusers: state.ohusers
            }

        case 'SAVE_DRDETAILS':
            return {
                ...state,
                drDetails: action.payload
            }
        case 'GET_DRDETAILS':
            return {
                ...state,
                drDetails: state.drDetails
            }

        default:
            return state
    }

}
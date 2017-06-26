import { FETCH_HOME_SUCCESS, FETCH_HOME_FAIL  } from '../actions/type'

export default (state = [] , action) => {
    switch (action.type) {
        case FETCH_HOME_SUCCESS:
            return action.payload
        case FETCH_HOME_FAIL:
            return []
        default:
            return state
    }
}
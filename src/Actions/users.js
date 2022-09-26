import { fetchUser, createUser, patchUser } from '../API/users';


export const fetchUsers = () => async (dispatch) => {
    try {
        const { data } = await fetchUser();
        return dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        return error.message;
    }
}

export const addUser = (userData) => async (dispatch) => {
    try {
        const { data } = await createUser(userData);
        return dispatch({ type: 'CREATE_USER', payload: data })
    } catch (error) {
        return error.message;
    }
}

export const updateUser = (userData) => async (dispatch) => {
    try {
        const { data } = await patchUser(userData.id,userData);

        console.log(data)
        return dispatch({ type: 'UPDATE_USER', payload: data })
    } catch (error) {
        return error.message;
    }
}



export const getUserById = (sort) => async (dispatch) => {
    try {
        const { data } = await fetchUser();

        switch (sort) {
            case 'name':

                return dispatch({
                    type: 'SORT_BY_NAME',
                    payload: data
                })
            case 'username':

                return dispatch({
                    type: 'SORT_BY_USERNAME',
                    payload: data
                })
            case 'email':

                return dispatch({
                    type: 'SORT_BY_EMAIL',
                    payload: data
                })
            default:
                return dispatch({
                    type: 'SORT_BY_NAME',
                    payload: data
                })
        }


    } catch (error) {
        return error.message;
    }
}


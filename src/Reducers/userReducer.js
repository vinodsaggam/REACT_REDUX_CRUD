const defaultState = {
    users: [],
    errors:{},
    updatedUser: [],
  }
  

  export const userReducer = (state=defaultState, action) => {

    switch (action.type) {
  
      case 'FETCH_ALL': {
        return {
          ...state,
          users: action.payload
        }
      }

      case 'SORT_BY_NAME': {
        return {
          ...state,
          users: state.users.sort((a, b) => {
            return a.name.localeCompare(b.name)
        })
        }
      }

      case 'SORT_BY_USERNAME': {
        return {
          ...state,
          users: state.users.sort((a, b) => {
            return a.username.localeCompare(b.username)
        })
        }
      }

      case 'SORT_BY_EMAIL': {
        return {
          ...state,
          users: state.users.sort((a, b) => {
            return a.email.localeCompare(b.email)
        })
        }
      }

      case 'CREATE_USER': {
        return {
          ...state,
          updatedUser: state.users.push(action.payload),
          users: state.users.concat(state.updatedUser)
        }
      }

      case 'UPDATE_USER': {

         let updatedUser = state.users.map((user) => {
          if (user.id === action.payload.id) {
            user.name = action.payload.name;
            user.username = action.payload.username;
            user.email = action.payload.email;
            user.phone = action.payload.phone;
          }

          return user;
          
        });

        return {
          ...state,
          users: updatedUser
        }
      }
   
      default:
        return state;
    }
    
  }
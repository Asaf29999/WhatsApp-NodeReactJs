
function login(state = [], action) {
    switch (action.type) {
      case 'LOG_IN':
        return state.concat([action.user])
      default:
        return state
    }
  };

export default login;
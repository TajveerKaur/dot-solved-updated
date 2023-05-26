import { GET_USERS } from "./userConstants";

const initialState = {
  registeredUsers: JSON.parse(
    localStorage.getItem("registeredUsers") || "[]"
  ),
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return state.registeredUsers;
    default:
      return state;
  }
};

export default userReducer;

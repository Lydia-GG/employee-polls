export const AUTHED_USER_LOGIN = 'AUTHED_USER_LOGIN';
export const AUTHED_USER_LOGOUT = 'AUTHED_USER_LOGOUT';

export function authedUserLogin(authedUser) {
  return {
    type: AUTHED_USER_LOGIN,
    authedUser,
  };
}

export function authedUserLogout() {
  return {
    type: AUTHED_USER_LOGOUT,
  };
}

export function handleLogout() {
  return (dispatch) => {
    return dispatch(authedUserLogout());
  };
}

export function handleLogin(username, password) {
  return (dispatch, getState) => {
    const { users } = getState();
    const user = Object.values(users).find((user) => {
      return user.id === username && user.password === password;
    });

    if (user) {
      return dispatch(authedUserLogin(user));
    }
  };
}

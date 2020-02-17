export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const USER_INFO = 'USER_INFO';

/*
    setting token to login
*/
export function LoginDispatch(data: any) {
  return {
    type: LOGIN,
    data,
  };
}

/*
    clear all data and logout
*/

export function LogoutDispatch(data: any) {
  return {
    type: LOGOUT,
    data,
  };
}

/*
    setting userdata
*/

// export function SettingUserDispatch(data: any) {
//   return {
//     type: USER_INFO,
//     data,
//   };
// }

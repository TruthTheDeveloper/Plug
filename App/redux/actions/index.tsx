/* eslint-disable prettier/prettier */

// authentication
export {
  auth,
  logout,
  setAuthRedirectPath,
  authCheckState,
  authSuccess,
  checkRefreshTimeout,
} from './auth';

// profile

export {
  postProfile,
  getProfilePic,
  getAllProfile,
  retrieveProfileDetail,
} from './profile';
export function getProfile(): any {
  throw new Error('Function not implemented.');
}


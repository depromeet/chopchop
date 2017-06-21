import axios from 'axios';
import config from '/config/config.json'

export function signUp(userInfo){
  return axios.post(
    config.server.url + 'users',{
      user_tokenid: {userInfo.tokenid},
      user_name: {userInfo.name},
      user_nickname: {userInfo.nickname},
      user_email: {userInfo.email},
      user_password: {userInfo.password},
      user_source: {userInfo.source}
    }
  ).then(
    response => {
      return { ...response.data };
    }
  ).catch(
    err => {
      throw err;
    }
  );
}

import roomsSaga from './rooms';
import homeSaga from './home';
import authSaga from './auth';
import messageSaga from './message';
import roomSaga from './room';
import reviewSaga from './review';
import myPageSaga from './myPage';
import profileSaga from './profile';

export default function* rootSaga() {
  yield [
    roomsSaga(),
    homeSaga(),
    authSaga(),
    messageSaga(),
    roomSaga(),
    reviewSaga(),
    myPageSaga(),
    profileSaga()
  ];
};

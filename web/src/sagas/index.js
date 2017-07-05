import roomsSaga from './rooms';
import homeSaga from './home';
import authSaga from './auth';
import messageSaga from './message';

export default function* rootSaga() {
  yield [
    roomsSaga(),
    homeSaga(),
    authSaga(),
    messageSaga()
  ];
};

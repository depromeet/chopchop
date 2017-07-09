import roomsSaga from './rooms';
import homeSaga from './home';
import authSaga from './auth';
import messageSaga from './message';
import roomSaga from './room';
import reviewSaga from './review';

export default function* rootSaga() {
  yield [
    roomsSaga(),
    homeSaga(),
    authSaga(),
    messageSaga(),
    roomSaga(),
    reviewSaga()
  ];
};

import roomsSaga from './rooms';
import homeSaga from './home';
import authSaga from './auth';

export default function* rootSaga() {
  yield [
    roomsSaga(),
    homeSaga(),
    authSaga()
  ];
};

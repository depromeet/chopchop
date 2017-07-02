import roomsSaga from './rooms';
import homeSaga from './home';

export default function* rootSaga() {
  yield [
    roomsSaga(),
    homeSaga()
  ];
};

import roomsSaga from './rooms';

export default function* rootSaga() {
  yield [
    roomsSaga()
  ];
};

import test from './test';

export default function* rootSaga() {
  yield [
    test()
  ];
};

import { takeLatest, put, all, call } from 'redux-saga/effects';

import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase.utils';

import { userActionTypes } from './user.types';

import { signInSuccess, signInFail } from './user.action';


export function* getSnapShotFromAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const snapShot = yield userRef.get();
    yield put(signInSuccess({
      id: snapShot.id,
      ...snapShot.data()
    }));
  } catch (error) {
    yield put(signInFail(error));
  }
}

// GOOGLE SIGN-IN
export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapShotFromAuth(user);
  } catch(error) {
    yield put(signInFail(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

// EMAIL SIGN-IN
export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapShotFromAuth(user);
  } catch (error) {
    alert('Login Failed!');
    yield put(signInFail(error));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

// TO ROOT SAGA
export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart)
  ]);
}
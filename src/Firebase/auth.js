import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { firebaseApp } from "./firebase";

export const signInWithGoogle = async () => {
  const auth = getAuth(firebaseApp);
  let provider = new GoogleAuthProvider();
  let { currentUser } = auth;
  try {
    const { _tokenResponse } = await signInWithPopup(auth, provider);
    currentUser = _tokenResponse;
  } catch (error) {
    console.log("Google signIn : ", error.message);
    return { error: error.message };
  }
  return {
    firstName: currentUser?.firstName,
    lastName: currentUser?.lastName,
    email: currentUser?.email,
    image: currentUser?.photoUrl,
  };
};

export const onSignOut = async () => {
  const auth = getAuth(firebaseApp);
  await signOut(auth);
  return "logout successfull";
};

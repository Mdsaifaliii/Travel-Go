import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { auth, db } from "./firebase";

import { setDoc, doc, getDoc } from "firebase/firestore";

// Sign up
export const signUp = async (email, password, role = 'user') => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  // Save role in Firestore
  await setDoc(doc(db, "users", user.uid), {
    email,
    role
  });
};

// Sign in
export const signIn = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

// Fetch role
export const getUserRole = async (uid) => {
  const docSnap = await getDoc(doc(db, "users", uid));
  return docSnap.exists() ? docSnap.data().role : null;
};

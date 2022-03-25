import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBEd7QaLQxkLaLwBKSy9oU4qwSYZ9Dj4A4",
  authDomain: "test-meditation-mitra.firebaseapp.com",
  projectId: "test-meditation-mitra",
  storageBucket: "test-meditation-mitra.appspot.com",
  messagingSenderId: "1070162213626",
  appId: "1:1070162213626:web:9d094a464a746ef1726743",
  measurementId: "G-8DLTXCJ207",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export { firebaseApp };

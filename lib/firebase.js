import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
  getAuth, 
  GoogleAuthProvider, 
  GithubAuthProvider, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBapYYuCUhwQELq-veFeOA6-LuryeRgi8o",
  authDomain: "pokochan-0504.firebaseapp.com",
  projectId: "pokochan-0504",
  storageBucket: "pokochan-0504.firebasestorage.app",
  messagingSenderId: "1058871890823",
  appId: "1:1058871890823:web:7ff626daf6f3926014b922",
  measurementId: "G-LQ99L5RLS0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { 
  auth, 
  googleProvider, 
  githubProvider, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged 
};
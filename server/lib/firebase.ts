import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyQF9T4D62RSDr-Z9StDJYga-94n3PGYs",
  authDomain: "tienda-al-cubo.firebaseapp.com",
  projectId: "tienda-al-cubo",
  storageBucket: "tienda-al-cubo.appspot.com",
  messagingSenderId: "739845423490",
  appId: "1:739845423490:web:0945223ba10c2b3b210f9b",
  measurementId: "G-YQ9HRXENXM",
};

const firebaseApp = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(firebaseApp);

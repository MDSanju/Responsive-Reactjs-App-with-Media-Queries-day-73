import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.initialize";

initializeAuthentication();

const useFirebase = () => {
  const [users, setUsers] = useState({});
  const [error, setError] = useState("");
  // fix the loading issue(remove user's data after loading)
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUsers(result.user);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  // observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsers(user);
      } else {
        setUsers({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  // logout
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUsers({});
      })
      .finally(() => setIsLoading(false));
  };

  return {
    users,
    error,
    isLoading,
    setUsers,
    signInUsingGoogle,
    logout,
  };
};

export default useFirebase;

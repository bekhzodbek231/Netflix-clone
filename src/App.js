import './App.css';
import HomeScreen from "./HomeScreen";
import { useEffect } from "react"
import LoginScreen from "./LoginScreen";
import ProfileScreen from "./ProfileScreen";
import { Routes, Route } from "react-router-dom";
import { auth } from './firebase';
import { useDispatch, useSelector } from "react-redux"
import { login, logout, selectUser } from "./features/userSlice"


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((Authuser) => {
      if (Authuser) {
        dispatch(login({
          uid: Authuser.uid,
          email: Authuser.email
        }
        ));
      }
      else {
        dispatch(logout())
      }
    });
    return unsubscribe;
  }, [dispatch]);




  return (
    <div className="app">
      {!user ? (
        <LoginScreen />
      ) : (
        <Routes>
          <Route exact path='/' element={<HomeScreen />} />
          <Route path='profilescreen' element={<ProfileScreen />} />

        </Routes>
      )}

    </div>
  );
}

export default App;

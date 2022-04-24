import { useEffect } from "react";
import AppRouter from "./router/Router";
import { auth } from "./utils/firebaseUtil";
import { setCurrentUser } from './redux/actions/authActions';
import { useDispatch } from "react-redux";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const userInfo = auth.onAuthStateChanged(user => {
      dispatch(setCurrentUser(user))
    });
    return userInfo;//!clean-up function

  }, [dispatch]);

  return (
    <div>
      <AppRouter />
    </div>
  );
};

export default App;

import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
  useMemo
} from "react";
import Auth from "../utils/Auth";

const AuthContext = createContext();

const useAuth = () => {
  const context = useContext(AuthContext);

  return context ? context : null;
};

const initialState = { currentUser: null, token: null, isAuth: false };

const LOGIN_USER = "LOGIN_USER";
const IS_LOGGED_IN = "IS_LOGGED_IN";
const SIGNOUT_USER = "SIGNOUT_USER";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case LOGIN_USER:
      return {
        ...state,
        currentUser: payload
      };

    case IS_LOGGED_IN:
      return {
        ...state,
        token: payload,
        isAuth: !!payload
      };

    case SIGNOUT_USER:
      return {
        ...state,
        ...initialState
      };

    default:
      return state;
  }
};

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setIsAuth = useCallback(payload => {
    Auth.setToken(payload);
    dispatch({ type: IS_LOGGED_IN, payload });
  }, []);

  useEffect(() => {
    if (Auth.doesTokenExist()) {
      const token = Auth.getToken();
      setIsAuth(token);
    }
  }, [setIsAuth]);

  const loginUser = useCallback(
    payload => dispatch({ type: LOGIN_USER, payload }),
    []
  );
  const userSignout = useCallback(() => {
    Auth.removeToken();
    dispatch({ type: SIGNOUT_USER });
  }, []);

  const value = useMemo(
    () => ({
      state,
      loginUser,
      setIsAuth,
      userSignout
    }),
    [state, loginUser, setIsAuth, userSignout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { useAuth, AuthContextProvider };

import { createContext, useContext, useReducer, useEffect } from 'react';
import { reducer } from './reducer';
import strings from '../utils/constant/stringConstant';

const AppContext = createContext();

const initialState = {
  user: {
    id: "",
    username: "",
    name: "",
    email: "",
    isLogin:false,
    accessToken:""
  }
};

const AppProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, initialState, () => {
    // Load state from local storage if available
    const storedState = localStorage.getItem(strings.LOCAL_STORAGE_KEY);
    return storedState ? JSON.parse(storedState) : initialState;
  });

  // Save state to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem(strings.LOCAL_STORAGE_KEY, JSON.stringify(store));
  }, [store]);

  return <AppContext.Provider value={{ store, dispatch }}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext, AppContext };

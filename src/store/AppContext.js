import { createContext, useState, useEffect } from "react";


export const authContest = createContext({
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const AuthProvider = ({ children }) => {
   const [token, setToken] = useState(null);
   useEffect(() => {
    const parsedUser = JSON.parse(localStorage.getItem("user"));
    if (parsedUser) {
      setToken(parsedUser.idToken);
    }
   },[])
   const isLoggedIn = !!token;
    const contextValue = {
        isLoggedIn,
        login: (token) => {
            setToken(token);
        },
        token,
        logout: () => {
            setToken(null);
        },
    };
    
    return (
        <authContest.Provider value={contextValue}>
        {children}
        </authContest.Provider>
    );
};
export default AuthProvider;

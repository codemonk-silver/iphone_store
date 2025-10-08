import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // ✅ Load saved login state (true/false)
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const saved = localStorage.getItem("isLoggedIn");
    return saved === "true"; // convert string back to boolean
  });

  // ✅ Save to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

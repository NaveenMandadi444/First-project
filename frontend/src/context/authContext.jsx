import React, { createContext, useContext, useState } from "react";

// Create Context
const UserContext = createContext();

// AuthProvider Component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom Hook for Using the Context
export const useAuth = () => useContext(UserContext);

export default AuthProvider; // ✅ Correct: Default export

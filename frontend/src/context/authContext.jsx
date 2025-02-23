import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
// Create Context
const UserContext = createContext();

// AuthProvider Component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get(
            "http://localhost:5001/api/auth/verify",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log(response);
          if (response.data.success) {
            setUser(response.data.user);
          } else {
            setUser(null);
          }
        }
      } catch (error) {
        console.error(error);
        if (error.response && !error.response.data.error) setUser(null);
      } finally {
        setLoading(false);
      }
    };
    verifyUser();
  }, []);

  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom Hook for Using the Context
export const useAuth = () => useContext(UserContext);

export default AuthProvider; // ✅ Correct: Default export

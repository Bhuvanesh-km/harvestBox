import React, { createContext, useState, useContext, ReactNode } from "react";

type AuthContextType = {
  userId: string | null;
  updateUserId: (newUserId: string) => void;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType>({
  userId: null,
  updateUserId: () => {},
  isAuthenticated: false,
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const updateUserId = (newUserId: string) => {
    setUserId(newUserId);
    setIsAuthenticated(true);
  };

  return (
    <AuthContext.Provider value={{ userId, updateUserId, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

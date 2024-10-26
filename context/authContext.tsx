import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import * as SecureStore from "expo-secure-store";
import { router } from "expo-router";

type AuthContextType = {
  signIn: (sessionId: string) => void;
  signOut: () => void;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType>({
  signIn: () => {},
  signOut: () => {},
  isAuthenticated: false,
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const loadAuthState = async () => {
    const session = await SecureStore.getItemAsync("session");
    if (session) {
      setIsAuthenticated(true);
    }
  };
  useEffect(() => {
    loadAuthState();
  }, []);

  const signIn = async (sessionId: string) => {
    await SecureStore.setItemAsync("session", sessionId);
    setIsAuthenticated(true);
  };

  const signOut = async () => {
    await SecureStore.deleteItemAsync("session");
    setIsAuthenticated(false);
    router.replace({ pathname: "/(auth)/login" });
  };

  return (
    <AuthContext.Provider value={{ signIn, signOut, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

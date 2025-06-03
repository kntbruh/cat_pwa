import { createContext, useContext, useState, type ReactNode } from 'react';

type AuthContextType = {
  isLoggedIn: boolean;
  signIn: (email: string, password: string) => boolean;
  signOut: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}

type AuthProviderProps = { children: ReactNode };

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Моковые данные для проверки
  const validEmail = 'test@test.com';
  const validPassword = 'terra123';

  const signIn = (email: string, password: string) => {
    if (email === validEmail && password === validPassword) {
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const signOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

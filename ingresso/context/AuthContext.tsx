import { createContext, useState, useContext, ReactNode } from "react";

// Definindo o tipo para o usuário
interface User {
  email: string;
  password: string;
}

// Definindo o tipo para o estado de autenticação
interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

// Criação do contexto com tipos definidos
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provedor de contexto para gerenciar o estado de autenticação
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null); // Estado para armazenar o usuário autenticado
  const [loading, setLoading] = useState(true); // Para controlar o carregamento de dados

  const login = (userData: User) => {
    setUser(userData); // Define o usuário autenticado
  };

  const logout = () => {
    setUser(null); // Remove o usuário autenticado
  };

  const value = {
    user,
    login,
    logout,
    loading,
    setLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Hook para acessar o contexto
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import config from "./config";
import api, { type User } from "./api";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (data: { email: string; password: string; name: string; language: string; exam_date: string | null }) => Promise<void>;
  logout: () => void;
  updateUser: (user: User) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem(`${config.storagePrefix}_token`);
    if (token) {
      api.getMe()
        .then(setUser)
        .catch(() => localStorage.removeItem(`${config.storagePrefix}_token`))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const res = await api.login(email, password);
    localStorage.setItem(`${config.storagePrefix}_token`, res.token);
    setUser(res.user);
  }, []);

  const register = useCallback(async (data: { email: string; password: string; name: string; language: string; exam_date: string | null }) => {
    const res = await api.register(data);
    localStorage.setItem(`${config.storagePrefix}_token`, res.token);
    setUser(res.user);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(`${config.storagePrefix}_token`);
    setUser(null);
  }, []);

  const updateUser = useCallback((u: User) => setUser(u), []);

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

import * as React from 'react'
import type { User } from '@/types'

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}

interface AuthContextValue extends AuthState {
  login: (email: string, _password: string) => Promise<void>
  signup: (email: string, _password: string, name: string, org?: string) => Promise<void>
  logout: () => void
  setUser: (user: User | null) => void
}

const AuthContext = React.createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = React.useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  })

  React.useEffect(() => {
    const stored = localStorage.getItem('flowboard_user')
    if (stored) {
      try {
        const user = JSON.parse(stored) as User
        setState((s) => ({ ...s, user, isAuthenticated: true, isLoading: false }))
      } catch {
        setState((s) => ({ ...s, isLoading: false }))
      }
    } else {
      setState((s) => ({ ...s, isLoading: false }))
    }
  }, [])

  const login = React.useCallback(async (email: string, _password: string) => {
    setState((s) => ({ ...s, isLoading: true }))
    try {
      const user: User = {
        id: '1',
        email,
        name: email.split('@')[0],
      }
      localStorage.setItem('flowboard_user', JSON.stringify(user))
      localStorage.setItem('flowboard_token', 'mock-token')
      setState({ user, isAuthenticated: true, isLoading: false })
    } catch {
      setState((s) => ({ ...s, isLoading: false }))
      throw new Error('Login failed')
    }
  }, [])

  const signup = React.useCallback(
    async (email: string, _password: string, name: string, _org?: string) => {
      setState((s) => ({ ...s, isLoading: true }))
      try {
        const user: User = { id: '1', email, name }
        localStorage.setItem('flowboard_user', JSON.stringify(user))
        localStorage.setItem('flowboard_token', 'mock-token')
        setState({ user, isAuthenticated: true, isLoading: false })
      } catch {
        setState((s) => ({ ...s, isLoading: false }))
        throw new Error('Signup failed')
      }
    },
    []
  )

  const logout = React.useCallback(() => {
    localStorage.removeItem('flowboard_user')
    localStorage.removeItem('flowboard_token')
    setState({ user: null, isAuthenticated: false, isLoading: false })
  }, [])

  const setUser = React.useCallback((user: User | null) => {
    setState((s) => ({
      ...s,
      user,
      isAuthenticated: !!user,
    }))
    if (user) localStorage.setItem('flowboard_user', JSON.stringify(user))
    else {
      localStorage.removeItem('flowboard_user')
      localStorage.removeItem('flowboard_token')
    }
  }, [])

  const value: AuthContextValue = {
    ...state,
    login,
    signup,
    logout,
    setUser,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(): AuthContextValue {
  const ctx = React.useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

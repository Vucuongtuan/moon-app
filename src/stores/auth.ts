import AsyncStorage from "@react-native-async-storage/async-storage"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import { User } from "../payload-types"
import {
  fetchMe as fetchMeAPI,
  forgotPassword as forgotPasswordAPI,
  login as loginAPI,
  logout as logoutAPI,
  register as registerAPI,
  resetPassword as resetPasswordAPI
} from "../service/rest/auth"

// Types
type CreateArgs = {
  fullName?: string
  email: string
  password: string
  confirmPassword: string
}

type LoginArgs = {
  email: string
  password: string
  type?: 'default' | 'google'
}

type ForgotPasswordArgs = {
  email: string
}

type ResetPasswordArgs = {
  email: string
  password: string
  confirmPassword: string
}

interface AuthState {
  user: User | null
  status: 'loggedIn' | 'loggedOut' | undefined
  hydrated: boolean
  
  setUser: (user: User | null) => void
  setStatus: (status: 'loggedIn' | 'loggedOut' | undefined) => void
  setHydrated: (hydrated: boolean) => void
  
  create: (args: CreateArgs) => Promise<void>
  login: (args: LoginArgs) => Promise<User>
  logout: () => Promise<void>
  forgotPassword: (args: ForgotPasswordArgs) => Promise<void>
  resetPassword: (args: ResetPasswordArgs) => Promise<void>
  fetchMe: () => Promise<void>
}

export const useAuth = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      status: undefined,
      hydrated: false,

      // Setters
      setUser: (user) => set({ user }),
      setStatus: (status) => set({ status }),
      setHydrated: (hydrated) => set({ hydrated }),

      // Register
      create: async (args) => {
        try {
          const res = await registerAPI({
            fullName: args.fullName || '',
            email: args.email,
            password: args.password,
            confirmPassword: args.confirmPassword
          })
          
          if (res?.data) {
            set({ 
              user: res.data.user || res.data,
              status: 'loggedIn' 
            })
          }
        } catch (error) {
          console.error('Register error:', error)
          throw error
        }
      },

      // Login
      login: async ({email,password,type = 'default'}) => {
        try {
          const res = await loginAPI({
            email,
            password,
            // type
          })
          
          if (res?.data) {
            set({ 
              user: res.data.user || res.data,
              status: 'loggedIn' 
            })
            return res.data
          }
        } catch (error) {
          throw error
        }
      },

      // Logout
      logout: async () => {
        try {
          await logoutAPI()
          set({ 
            user: null,
            status: 'loggedOut' 
          })
        } catch (error) {
          console.error('Logout error:', error)
          set({ 
            user: null,
            status: 'loggedOut' 
          })
          throw error
        }
      },

      // Forgot Password
      forgotPassword: async (args) => {
        try {
          await forgotPasswordAPI({
            email: args.email
          })
        } catch (error) {
          console.error('Forgot password error:', error)
          throw error
        }
      },

      // Reset Password
      resetPassword: async (args) => {
        try {
          await resetPasswordAPI({
            email: args.email,
            password: args.password,
            confirmPassword: args.confirmPassword
          })
        } catch (error) {
          console.error('Reset password error:', error)
          throw error
        }
      },

      fetchMe: async () => {
        try {
          const result = await fetchMeAPI()
          
          if (result.data?.user) {
            set({ 
              user: result.data.user,
              status: 'loggedIn',
              hydrated: true
            })
          } else {
            set({ 
              user: null,
              status: 'loggedOut',
              hydrated: true
            })
          }
        } catch (error) {
          console.error('Fetch me error:', error)
          set({ 
            user: null,
            status: 'loggedOut',
            hydrated: true
          })
        }
      }
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({ 
        user: state.user,
        status: state.status
      }),
      onRehydrateStorage: () => (state) => {
        // Sau khi rehydrate, set hydrated = true
        state?.setHydrated(true)
      }
    }
  )
)

export default useAuth
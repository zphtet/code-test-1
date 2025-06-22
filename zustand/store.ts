import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface LogoState {
  showLogo: boolean
  setLogoState: (show: boolean) => void
}

export const useLogoStore = create<LogoState>()(
  persist(
    (set) => ({
      showLogo: true, // default value
      setLogoState: (show) => set({ showLogo: show }),
    }),
    {
      name: 'logo-storage', // unique name for localStorage key
      storage: createJSONStorage(() => localStorage), // use localStorage
    }
  )
)

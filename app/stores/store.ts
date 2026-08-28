import { create } from "zustand"

export type MenuMobileStore = {
      isActiveMenu: boolean,
      setIsActiveMenu: () => void,
}

export const useMenuMobileStore = create<MenuMobileStore>(( set ) => ({
      isActiveMenu: false,
      setIsActiveMenu: () => set( (state) => ({isActiveMenu: !state.isActiveMenu}) )
}))
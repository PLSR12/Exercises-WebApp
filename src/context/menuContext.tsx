import * as React from 'react'

interface IMenuContext {
  categorySelected: number
  setCategorySelected: (category: number) => void
}

interface IMenuProvider {
  children: React.ReactNode
}

export const MenuContext = React.createContext<IMenuContext>({} as IMenuContext)

export function MenuProvider({ children }: IMenuProvider) {
  const [categorySelected, setCategorySelected] = React.useState<number>(0)

  return (
    <>
      <MenuContext.Provider value={{ categorySelected, setCategorySelected }}>
        {children}
      </MenuContext.Provider>
    </>
  )
}

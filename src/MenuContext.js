import { createContext, useContext, useState } from 'react';
const MenuContext = createContext([]);

export function ValueProvider({children}) {
  const LIST = [
    { title: "Home", href: "/", icon: "home" },
    { title: "Services", href: "/services", icon: "services" },
    { title: "Pricing", href: "/pricing", icon: "pricing" },
    { title: "Blog", href: "/blog", icon: "blog" },
  ];
  const PROFILE = [
    { title: "Profile", href: "/profile", icon: "profile" },
  ];

  const [isLoggedIn, setLogin] = useState(false);
  const login = () => setLogin(true);
  const logout = () => setLogin(false);
  const menuList = isLoggedIn ? LIST.concat(PROFILE) : LIST;

  const contextValue = { menuList, isLoggedIn, login, logout };
  return (
    <MenuContext.Provider value={contextValue}>
      {children}
    </MenuContext.Provider>
  )
}

export function useMenu() {
  return useContext(MenuContext);
};

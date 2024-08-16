import React, { useContext, useState } from "react";

export const LayoutContext = React.createContext({
  isNavbarOpen: false,
  setIsNavbarOpen: () => {},
});

export function LayoutContextProvider({ children }) {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <LayoutContext.Provider value={{ isNavbarOpen, setIsNavbarOpen }}>
      {children}
    </LayoutContext.Provider>
  );
}

export const useLayoutContext = () => {
  return useContext(LayoutContext);
};

import React from "react";

export const AppContextType = React.createContext({
    isMobile: false,
    isTablet: false,
    isDesktop: false
});
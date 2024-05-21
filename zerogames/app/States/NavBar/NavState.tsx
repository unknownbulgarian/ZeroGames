'use client';

import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';


interface NavType {
    nav: string;
    setNav: Dispatch<SetStateAction<string>>;
}


const NavContext = createContext<NavType | undefined>(undefined);

export const useNav = (): NavType => {
    const context = useContext(NavContext);
    if (!context) {
        throw new Error('useConfig must be used within an EditorProvider');
    }
    return context;
};

export const NavProvider: React.FC<{ children: ReactNode }> = ({ children }) => {


    const [nav, setNav] = useState<string>('Home')


    const value = {
        nav,
        setNav,
    };

    return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};
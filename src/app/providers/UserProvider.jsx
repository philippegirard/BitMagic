import React, { createContext, useContext, useEffect, useState } from 'react';
import { useMagic } from "@/app/providers/MagicProvider";
import LoadingDots from "@/app/components/LoadingDots";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const { magic } = useMagic();
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (magic) {
            magic.user.getInfo().then(setUser);
        }
    }, [magic]);

    if (!user) {
        return <h1>Loading User<LoadingDots/></h1>;
    }

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useMagic } from "@/app/providers/MagicProvider";
import LoadingDots from "@/app/components/LoadingDots";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const { magic } = useMagic();
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        async function waitAndSetUser() {
            const userInfo = await magic.user.getInfo();
            setUserInfo(userInfo);
        }

        waitAndSetUser()
    }, [magic]);

    if (!userInfo) {
        return <h1>Loading User<LoadingDots/></h1>;
    }

    console.log("userInfo:", userInfo)

    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserInfo = () => useContext(UserContext);
'use client'

import {MagicProvider} from './MagicProvider';
import {LoginProvider} from "@/app/providers/LoginProvider";
import {UserProvider} from "@/app/providers/UserProvider";

export default function AppProvider({children}) {
    return (
        <MagicProvider>
            <LoginProvider>
                <UserProvider>
                    {children}
                </UserProvider>
            </LoginProvider>
        </MagicProvider>
    )
}
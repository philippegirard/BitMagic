'use client'

import {MagicProvider} from './MagicProvider';
import {WaitForMagicProvider} from "@/app/providers/WaitForMagicProvider";
import {LoginProvider} from "@/app/providers/LoginProvider";

export default function AppProvider({children}) {
    return (
        <MagicProvider>
            <WaitForMagicProvider>
                <LoginProvider>
                    {children}
                </LoginProvider>
            </WaitForMagicProvider>
        </MagicProvider>
    )
}
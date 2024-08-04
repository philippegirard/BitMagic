'use client'

import {MagicProvider} from './MagicProvider';
import {WaitForMagicProvider} from "@/app/providers/WaitForMagicProvider";

export default function AppProvider({children}) {
    return (
        <MagicProvider>
            <WaitForMagicProvider>
                {children}
            </WaitForMagicProvider>
        </MagicProvider>
    )
}